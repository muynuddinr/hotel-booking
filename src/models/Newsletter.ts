import mongoose, { Schema, Document } from 'mongoose';

export interface INewsletter extends Document {
  email: string;
  name: string | null;
  dateSubscribed: Date;
  status: 'Active' | 'Unsubscribed';
  openRate: number;
  source: string;
}

const NewsletterSchema = new Schema<INewsletter>({
  email: {
    type: String,
    required: [true, 'Please provide an email'],
    unique: true,
    match: [/\S+@\S+\.\S+/, 'Please provide a valid email'],
  },
  name: {
    type: String,
    default: null,
  },
  dateSubscribed: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    enum: ['Active', 'Unsubscribed'],
    default: 'Active',
  },
  openRate: {
    type: Number,
    default: 0,
  },
  source: {
    type: String,
    default: 'Footer Form',
  },
});

export default mongoose.models.Newsletter || mongoose.model<INewsletter>('Newsletter', NewsletterSchema); 