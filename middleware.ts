import { NextResponse, type NextRequest } from 'next/server'

// Demo mode: no authentication required. All routes are public.
export function middleware(request: NextRequest) {
  // Redirect /login straight to dashboard in demo
  if (request.nextUrl.pathname.startsWith('/login')) {
    const url = request.nextUrl.clone()
    url.pathname = '/'
    return NextResponse.redirect(url)
  }
  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}
