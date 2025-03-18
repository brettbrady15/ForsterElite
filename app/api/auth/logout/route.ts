import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export function POST(request: NextRequest): NextResponse {
  // Clear the auth cookie
  cookies().set({
    name: 'auth-token',
    value: '',
    httpOnly: true,
    path: '/',
    expires: new Date(0), // Expire immediately
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict'
  });
  
  return NextResponse.json({ success: true });
} 