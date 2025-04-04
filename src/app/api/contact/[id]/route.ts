import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongoose';
import Contact from '@/models/Contact';

export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();
    const { id } = params;
    const data = await req.json();
    
    const contact = await Contact.findByIdAndUpdate(
      id,
      { $set: data },
      { new: true }
    );
    
    if (!contact) {
      return NextResponse.json(
        { message: 'Contact not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json(contact);
  } catch (error) {
    console.error('Error updating contact:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
} 