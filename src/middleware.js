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
    secureCookie: process.env.NODE_ENV === "production",
    secret: process.env.AUTH_SECRET || process.env.NEXTAUTH_SECRET,
  });
  const isAuthenticated = !!token;
  // If the user is logged in and trying to access auth pages, redirect to dashboard
  console.log(
    isAuthenticated && isAuthPath
      ? "Redirecting to dashboard1"
      : "Not redirecting"
  );

  if (isAuthenticated && isAuthPath) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  console.log(
    isAuthenticated && path === "/"
      ? "Redirecting to dashboard2"
      : "Not redirecting"
  );
  // If the user is authenticated and accessing the home page, redirect to dashboard
  if (isAuthenticated && path === "/") {
    return NextResponse.redirect(new URL("/dashboard", request.url));
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
  matcher: ["/", "/login", "/dashboard/:path*", "/admin/:path*"],
};
