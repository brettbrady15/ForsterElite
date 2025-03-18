import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { verifyToken, getUserFromToken } from '@/lib/auth';

export async function GET() {
  const cookieStore = cookies();
  const token = cookieStore.get('auth-token')?.value;
  
  if (!token || !(await verifyToken(token))) {
    return NextResponse.json({ 
      authenticated: false 
    });
  }
  
  const user = await getUserFromToken(token);
  
  return NextResponse.json({ 
    authenticated: true,
    user: {
      username: user?.username
    }
  });
} 