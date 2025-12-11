const mongoose = require('mongoose');
const Counter = require('./counter.model');


const organizationSchema = new mongoose.Schema(
  {
    orgId: {
      type: String,
      unique: true,
    },
    name: {
      type: String,
      required: [true, 'Organization name is required'],
      trim: true,
    },
    domain: {
      type: String,
      unique: true,
      sparse: true,
      lowercase: true,
      trim: true,
    },
    logoUrl: {
      type: String,
    },
    subscriptionPlan: {
      type: String,
      enum: ['FREE', 'BASIC', 'PRO', 'ENTERPRISE'],
      default: 'FREE',
    },
    subscriptionExpiresAt: {
      type: Date,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    deleted: {
      type: Boolean,
      default: false,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Superadmin',
    },
  },
  { timestamps: true }
);


organizationSchema.pre('save', async function (next) {
  if (this.isNew && !this.orgId) {
    try {
      const counter = await Counter.findByIdAndUpdate(
        { _id: 'organizationId' },
        { $inc: { seq: 1 } },
        { new: true, upsert: true }
      );

      this.orgId = `ORG-${counter.seq.toString().padStart(4, '0')}`;
    } catch (err) {
      return next(err);
    }
  }
  next();
});

module.exports = mongoose.model('Organization', organizationSchema);
