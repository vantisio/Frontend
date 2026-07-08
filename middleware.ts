import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Protect documentation routes with HttpOnly session cookies
  if (pathname.startsWith('/docs/core')) {
    const authCookie = request.cookies.get('core_auth');
    if (!authCookie || authCookie.value !== 'true') {
      const url = new URL('/', request.url);
      url.searchParams.set('redirect', '/docs/core');
      return NextResponse.redirect(url);
    }
  }

  if (pathname.startsWith('/docs/social')) {
    const authCookie = request.cookies.get('social_auth');
    if (!authCookie || authCookie.value !== 'true') {
      const url = new URL('/', request.url);
      url.searchParams.set('redirect', '/docs/social');
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/docs/:path*'],
};
