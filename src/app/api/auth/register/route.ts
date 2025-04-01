import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongoose';
import User from '@/models/User';
import { fileToBuffer } from '@/lib/upload';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

export async function POST(req: NextRequest) {
  try {
    // Connect to database
    await connectDB();
    
    // Get form data
    const formData = await req.formData();
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    const profilePic = formData.get('profilePic') as File;
    
    // Validate required fields
    if (!name || !email || !password || !profilePic) {
      return NextResponse.json(
        { message: 'All fields are required' },
        { status: 400 }
      );
    }
    
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { message: 'User with this email already exists' },
        { status: 409 }
      );
    }
    
    // Process profile picture
    const buffer = await fileToBuffer(profilePic);
    
    // Create new user
    const user = await User.create({
      name,
      email,
      password,
      profilePic: {
        data: buffer,
        contentType: profilePic.type,
      },
    });
    
    // Generate JWT token
    const token = jwt.sign(
      { id: user._id, email: user.email, name: user.name },
      JWT_SECRET,
      { expiresIn: '7d' }
    );
    
    // Return success response with token
    return NextResponse.json({
      message: 'User registered successfully',
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
    
  } catch (error) {
    console.error('Registration error:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
} 