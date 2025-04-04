import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

interface AuthResult {
  success: boolean;
  message: string;
  status: number;
}

export async function verifyAuth(req: NextRequest): Promise<AuthResult> {
  const authHeader = req.headers.get('authorization');
  
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return {
      success: false,
      message: 'Unauthorized',
      status: 401
    };
  }
  
  try {
    const token = authHeader.split(' ')[1];
    jwt.verify(token, JWT_SECRET);
    return {
      success: true,
      message: 'Authorized',
      status: 200
    };
  } catch (err) {
    return {
      success: false,
      message: 'Invalid token',
      status: 401
    };
  }
} 