const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const superadminSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      unique: true,
      required: true,
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
  const Superadmin = this.constructor;

  if (this.isNew) {
    const lastUser = await Superadmin
      .findOne({ userId: { $regex: /^SA-\d+$/ } })
      .sort({ createdAt: -1 })
      .select('userId');

    let nextId = 'SA-0001';

    if (lastUser && lastUser.userId) {
      const lastNumber = parseInt(lastUser.userId.split('-')[1], 10);
      const newNumber = lastNumber + 1;
      nextId = `SA-${newNumber.toString().padStart(4, '0')}`;
    }

    this.userId = nextId;
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


superadminSchema.index({ userId: 1 }, { unique: true });

module.exports = mongoose.model('Superadmin', superadminSchema);
