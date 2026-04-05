import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  try {
    const userCookie = request.cookies.get('github_user')?.value

    if (!userCookie) {
      return NextResponse.json(null)
    }

    const user = JSON.parse(userCookie)
    return NextResponse.json(user)
  } catch (error) {
    return NextResponse.json(null)
  }
}
