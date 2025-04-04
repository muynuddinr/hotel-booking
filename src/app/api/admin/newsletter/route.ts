import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongoose';
import Newsletter from '@/models/Newsletter';
import { verifyAuth } from '@/lib/auth';
import { formatDate } from '@/utils/dateFormat';

export async function GET(req: NextRequest) {
  try {
    // Verify admin authentication
    const authResult = await verifyAuth(req);
    if (!authResult.success) {
      return NextResponse.json(
        { message: authResult.message },
        { status: authResult.status }
      );
    }

    await connectDB();
    
    const subscribers = await Newsletter.find({})
      .sort({ dateSubscribed: -1 });
    
    return NextResponse.json({ subscribers });
    
  } catch (error) {
    console.error('Error fetching newsletter subscribers:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
} 