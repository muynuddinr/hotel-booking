import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongoose';
import Newsletter from '@/models/Newsletter';

export async function POST(req: NextRequest) {
  try {
    await connectDB();
    
    const { email } = await req.json();
    
    if (!email) {
      return NextResponse.json(
        { message: 'Email is required' },
        { status: 400 }
      );
    }

    // Check if already subscribed
    const existingSubscriber = await Newsletter.findOne({ email });
    if (existingSubscriber) {
      if (existingSubscriber.status === 'Unsubscribed') {
        existingSubscriber.status = 'Active';
        await existingSubscriber.save();
        return NextResponse.json({ message: 'Successfully resubscribed to newsletter' });
      }
      return NextResponse.json(
        { message: 'Email already subscribed' },
        { status: 409 }
      );
    }

    // Create new subscriber
    await Newsletter.create({
      email,
      dateSubscribed: new Date(),
      status: 'Active',
      source: 'Footer Form'
    });

    return NextResponse.json({ message: 'Successfully subscribed to newsletter' });
    
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
} 