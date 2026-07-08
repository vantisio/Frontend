import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { password } = await request.json();

    // Get password from environment variable
    const correctPassword = process.env.CORE_PROPOSAL_PASSWORD || '1234';

    // Validate password
    if (password === correctPassword) {
      const response = NextResponse.json({ success: true });
      
      // Set HttpOnly session cookie (no maxAge = cleared on browser close)
      response.cookies.set('core_auth', 'true', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        path: '/',
        // No maxAge = session cookie, cleared when browser closes
      });

      return response;
    } else {
      return NextResponse.json(
        { success: false, error: 'رمز عبور اشتباه است' },
        { status: 401 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'خطا در پردازش درخواست' },
      { status: 500 }
    );
  }
}
