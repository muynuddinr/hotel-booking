import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongoose';
import User from '@/models/User';
import jwt from 'jsonwebtoken';
import { bufferToDataUrl } from '@/lib/upload';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

export async function POST(req: NextRequest) {
  try {
    // Connect to database
    await connectDB();
    
    // Get request body
    const { email, password } = await req.json();
    
    // Validate required fields
    if (!email || !password) {
      return NextResponse.json(
        { message: 'Email and password are required' },
        { status: 400 }
      );
    }
    
    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json(
        { message: 'Invalid credentials' },
        { status: 401 }
      );
    }
    
    // Check password
    const isPasswordValid = await user.comparePassword(password);
    if (!isPasswordValid) {
      return NextResponse.json(
        { message: 'Invalid credentials' },
        { status: 401 }
      );
    }
    
    // Generate profile picture URL if available
    let profilePicUrl = null;
    if (user.profilePic && user.profilePic.data) {
      profilePicUrl = bufferToDataUrl(
        user.profilePic.data,
        user.profilePic.contentType
      );
    }
    
    // Generate JWT token
    const token = jwt.sign(
      { id: user._id, email: user.email, name: user.name },
      JWT_SECRET,
      { expiresIn: '7d' }
    );
    
    // Return success response with token
    return NextResponse.json({
      message: 'Login successful',
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        profilePic: profilePicUrl,
      },
    });
    
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
} 