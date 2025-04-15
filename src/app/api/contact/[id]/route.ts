import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongoose';
import Contact from '@/models/Contact';

// Fix the type definition for the params
export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();
    const { id } = params;
    const data = await req.json();
    
    const updatedContact = await Contact.findByIdAndUpdate(
      id,
      { $set: data },
      { new: true }
    );
    
    if (!updatedContact) {
      return NextResponse.json(
        { error: 'Contact submission not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json(updatedContact);
  } catch (error) {
    console.error('Error updating contact:', error);
    return NextResponse.json(
      { error: 'Failed to update contact submission' },
      { status: 500 }
    );
  }
}

// Also fix the GET method to use the same pattern
export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();
    const { id } = params;
    
    const contact = await Contact.findById(id);
    
    if (!contact) {
      return NextResponse.json(
        { error: 'Contact submission not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json(contact);
  } catch (error) {
    console.error('Error fetching contact:', error);
    return NextResponse.json(
      { error: 'Failed to fetch contact submission' },
      { status: 500 }
    );
  }
}

// Also fix the DELETE method if it exists
export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();
    const { id } = params;
    
    const deletedContact = await Contact.findByIdAndDelete(id);
    
    if (!deletedContact) {
      return NextResponse.json(
        { error: 'Contact submission not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json({ message: 'Contact submission deleted successfully' });
  } catch (error) {
    console.error('Error deleting contact:', error);
    return NextResponse.json(
      { error: 'Failed to delete contact submission' },
      { status: 500 }
    );
  }
}