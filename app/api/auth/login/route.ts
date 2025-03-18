import { NextRequest, NextResponse } from 'next/server';
import { generateToken, verifyPassword } from '@/lib/auth';
import { cookies } from 'next/headers';

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    // Parse request body
    const body = await request.json();
    const { username, password } = body;

    // Get credentials from environment variables
    const correctUsername = process.env.ADMIN_USERNAME;
    const hashedPassword = process.env.ADMIN_PASSWORD_HASH;

    // Validate username
    if (!username || username !== correctUsername) {
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      );
    }

    // Validate password (if hash is available)
    if (!hashedPassword) {
      console.error('Password hash not configured in environment variables');
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    const passwordValid = await verifyPassword(password, hashedPassword);
    if (!passwordValid) {
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      );
    }

    // Generate JWT token
    const token = await generateToken(username);

    // Set cookie
    cookies().set({
      name: 'auth-token',
      value: token,
      httpOnly: true,
      path: '/',
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60, // 1 hour
      sameSite: 'strict'
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { error: 'An error occurred during login' },
      { status: 500 }
    );
  }
} 