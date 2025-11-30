import mongoose, { Document, Schema } from 'mongoose';

export interface IUser extends Document {
  airtableUserId: string;
  profile: any;
  accessToken: string;
  refreshToken?: string;
  lastLoginAt: Date;
}

const userSchema = new Schema<IUser>(
  {
    airtableUserId: {
      type: String,
      required: true,
      index: true,
    },
    profile: {
      type: Object,
    },
    accessToken: {
      type: String,
      required: true,
    },
    refreshToken: {
      type: String,
      required: false,
    },
    lastLoginAt: {
      type: Date,
      default: Date.now,
      required: true,
    },
  },
  { timestamps: true }
);

export const User = mongoose.model<IUser>('User', userSchema);
