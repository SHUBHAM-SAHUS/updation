import { NextResponse, NextRequest } from 'next/server';

const LOCAL_ACCESS_TOKEN_KEY = 'zevo-access-token';

export function middleware(request: NextRequest) {
  const token = request.cookies.get(LOCAL_ACCESS_TOKEN_KEY);
  const url = request.nextUrl.clone();

  // Redirect logged-in users from the root route to the dashboard
  if (token && url.pathname === '/') {
    url.pathname = '/admin/dashboard/usermetrics';
    return NextResponse.redirect(url);
  }

  // Redirect logged-in users from the unauthorized route to the dashboard
  if (token && url.pathname === '/unauthorized') {
    url.pathname = '/admin/dashboard/usermetrics';
    return NextResponse.redirect(url);
  }

  // Redirect non-logged-in users from admin routes to the root route
  if (!token && url.pathname.startsWith('/admin')) {
    url.pathname = '/';
    return NextResponse.redirect(url);
  }

  // Allow all other requests to proceed as normal
  return NextResponse.next();
}

// Define the paths that should use this middleware
export const config = {
  matcher: ['/admin/:path*', '/', '/unauthorized'],
};
