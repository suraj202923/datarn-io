import { NextRequest, NextResponse } from 'next/server'

// Simple in-memory token storage (use a database in production)
const tokens = new Map<string, any>()

export async function POST(request: NextRequest) {
  const { action, token, userData } = await request.json()

  if (action === 'setToken') {
    // Store the token
    tokens.set(token.access_token, userData)
    return NextResponse.json({ success: true })
  }

  return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
}

export async function GET(request: NextRequest) {
  // Get the token from the cookie
  const token = request.cookies.get('github_token')?.value

  if (!token) {
    return NextResponse.json({ error: 'Not authenticated' }, { status: 401 })
  }

  const userData = tokens.get(token)
  if (!userData) {
    return NextResponse.json({ error: 'Invalid token' }, { status: 401 })
  }

  return NextResponse.json(userData)
}
