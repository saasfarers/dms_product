const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Counter = require('./counter.model');


const organizationuserSchema = new mongoose.Schema(
  {
    orguserId: {
      type: String,
      unique: true,
    },
    userName: {
      type: String,
      required: [true, 'userName is required'],
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
      minlength: [6, 'Password must be at least 6 characters'],
    },
    contactPhone: {
      type: String,
    },
    address: {
      street: String,
      city: String,
      state: String,
      country: String,
      postalCode: String,
    },
    role: {
      type: String,
      enum: ['admin', 'head', 'staff', 'member'],
      default: 'admin',
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    lastLogin: {
      type: Date,
    },
    deleted: {
      type: Boolean,
      default: false,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Organization',
    },
  },
  { timestamps: true }
);


organizationuserSchema.pre('save', async function (next) {
  if (this.isNew && !this.orguserId) {
    try {
      const counter = await Counter.findByIdAndUpdate(
        { _id: 'organizationUserId' },
        { $inc: { seq: 1 } },
        { new: true, upsert: true }
      );

      this.orguserId = `ORG-USER-${counter.seq.toString().padStart(4, '0')}`;
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

organizationuserSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model('Organizationuser', organizationuserSchema);
