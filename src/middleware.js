// middleware.js
import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(request) {
  // Get the pathname of the request
  const path = request.nextUrl.pathname;

  // Define auth paths that should redirect if user is authenticated
  const authPaths = ["/login"];
  const isAuthPath = authPaths.some((authPath) => path.startsWith(authPath));

  // Define protected paths that need authentication
  const protectedPaths = ["/dashboard", "/admin"];
  const isProtectedPath = protectedPaths.some((protectedPath) =>
    path.startsWith(protectedPath)
  );

  // Get the token instead of using auth() - compatible with Edge Runtime
  const token = await getToken({
    req: request,
    secret: process.env.AUTH_SECRET,
  });
  const isAuthenticated = !!token;

  // If the user is logged in and trying to access auth pages, redirect to home
  if (isAuthenticated && isAuthPath) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // If the user is not logged in and trying to access protected pages, redirect to login
  if (!isAuthenticated && isProtectedPath) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // Continue with the request if no redirection is needed
  return NextResponse.next();
}

// Specify which paths this middleware should run on
export const config = {
  matcher: [
    "/login",
    "/dashboard/:path*",
    "/admin/:path*",
  ],
};
