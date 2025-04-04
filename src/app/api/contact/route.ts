import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongoose';
import Contact from '@/models/Contact';

export async function POST(req: NextRequest) {
  try {
    await connectDB();
    const data = await req.json();
    
    const contact = await Contact.create({
      ...data,
      status: 'New',
      dateSubmitted: new Date()
    });
    
    return NextResponse.json({
      message: 'Contact form submitted successfully',
      contact
    });
  } catch (error) {
    console.error('Error submitting contact form:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
  try {
    await connectDB();
    const contacts = await Contact.find({}).sort({ dateSubmitted: -1 });
    
    return NextResponse.json(contacts);
  } catch (error) {
    console.error('Error fetching contacts:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
} 