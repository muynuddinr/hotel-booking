import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongoose';
import User from '@/models/User';
import jwt from 'jsonwebtoken';
import { bufferToDataUrl } from '@/lib/upload';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

export async function GET(req: NextRequest) {
  try {
    // Verify authentication
    const authHeader = req.headers.get('authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json(
        { message: 'Unauthorized' },
        { status: 401 }
      );
    }
    
    const token = authHeader.split(' ')[1];
    let decoded;
    
    try {
      decoded = jwt.verify(token, JWT_SECRET);
    } catch (err) {
      return NextResponse.json(
        { message: 'Invalid token' },
        { status: 401 }
      );
    }
    
    // Connect to database
    await connectDB();
    
    // Fetch all users
    const users = await User.find({}).select('-password');
    
    // Process user data to include profile pictures
    const processedUsers = users.map(user => {
      const userData = user.toObject();
      
      // Convert profile picture buffer to data URL if it exists
      if (userData.profilePic && userData.profilePic.data) {
        userData.profilePic = bufferToDataUrl(
          userData.profilePic.data,
          userData.profilePic.contentType
        );
      } else {
        userData.profilePic = null;
      }
      
      return userData;
    });
    
    // Return success response with users
    return NextResponse.json({
      users: processedUsers
    });
    
  } catch (error) {
    console.error('Error fetching users:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
} 