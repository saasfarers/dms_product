const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const counterSchema = new mongoose.Schema({
  _id: { type: String, required: true },
  seq: { type: Number, default: 0 }
});
const Counter = mongoose.model('Counter', counterSchema);

const superadminSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      unique: true,
    },
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
      minlength: [6, 'Password must be at least 6 characters'],
    },
    role: {
      type: String,
      enum: ['superadmin'],
      default: 'superadmin',
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    lastLogin: {
      type: Date,
    },
    language: {
      type: String,
      enum: ['en', 'ta'],
      default: 'en',
    },
    deleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);


superadminSchema.pre('save', async function (next) {
  if (this.isNew && !this.userId) {
    try {
      const counter = await Counter.findByIdAndUpdate(
        { _id: 'superadminId' }, 
        { $inc: { seq: 1 } },    
        { new: true, upsert: true } 
      );

      this.userId = `SA-${counter.seq.toString().padStart(4, '0')}`;
    } catch (err) {
      return next(err);
    }
  }

  if (this.isModified('password')) {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  }

  next();
});


superadminSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model('Superadmin', superadminSchema);
