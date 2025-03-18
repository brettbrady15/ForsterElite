import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import * as jose from 'jose';

export async function middleware(request: NextRequest) {
  // Only run on admin routes
  if (!request.nextUrl.pathname.startsWith('/admin')) {
    return NextResponse.next();
  }
  
  // Allow access to the login page
  if (request.nextUrl.pathname === '/admin/login') {
    return NextResponse.next();
  }
  
  // Check if the user is authenticated
  const token = request.cookies.get('auth-token')?.value;
  
  if (!token) {
    return NextResponse.redirect(new URL('/admin/login', request.url));
  }
  
  try {
    // Verify the token without using bcrypt
    const secret = new TextEncoder().encode(
      process.env.JWT_SECRET || 'fallback-secret-do-not-use-in-production'
    );
    
    await jose.jwtVerify(token, secret);
    return NextResponse.next();
  } catch (error) {
    // Token is invalid
    return NextResponse.redirect(new URL('/admin/login', request.url));
  }
}

export const config = {
  matcher: ['/admin/:path*'],
}; 