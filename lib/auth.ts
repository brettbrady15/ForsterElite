'use server';

import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';
import { NextRequest } from 'next/server';
import bcrypt from 'bcrypt';

// JWT token generation
export async function generateToken(username: string): Promise<string> {
  const secret = process.env.JWT_SECRET || 'fallback-secret-do-not-use-in-production';
  
  return jwt.sign(
    { username }, 
    secret, 
    { expiresIn: '1h' }
  );
}

// JWT token verification
export async function verifyToken(token: string): Promise<boolean> {
  try {
    const secret = process.env.JWT_SECRET || 'fallback-secret-do-not-use-in-production';
    jwt.verify(token, secret);
    return true;
  } catch (error) {
    return false;
  }
}

// Extract user from token
export async function getUserFromToken(token: string): Promise<{ username: string } | null> {
  try {
    const secret = process.env.JWT_SECRET || 'fallback-secret-do-not-use-in-production';
    const decoded = jwt.verify(token, secret) as { username: string };
    return { username: decoded.username };
  } catch (error) {
    return null;
  }
}

// Verify password against hash
export async function verifyPassword(password: string, hash: string): Promise<boolean> {
  return bcrypt.compare(password, hash);
}

// Hash a password (useful for initial setup)
export async function hashPassword(password: string): Promise<string> {
  const saltRounds = 10;
  return bcrypt.hash(password, saltRounds);
}

// Check if user is authenticated from the request
export async function isAuthenticated(request: NextRequest): Promise<boolean> {
  const token = request.cookies.get('auth-token')?.value;
  if (!token) return false;
  return verifyToken(token);
}

// Get the auth token from cookies
export async function getAuthToken(): Promise<string | undefined> {
  const cookieStore = cookies();
  return cookieStore.get('auth-token')?.value;
}

// Check if user is authenticated (for server components)
export async function isAuthenticatedFromCookies(): Promise<boolean> {
  const token = await getAuthToken();
  if (!token) return false;
  return verifyToken(token);
} 