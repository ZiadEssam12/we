import { checkPermission } from "@/RBAC";
import { NextResponse } from "next/server";

export async function pathGuardMiddleware(request, token) {
  const path = request.nextUrl.pathname;
  const userRole = token?.role;

  // Check if user has permission to access the path (users page)
  // only ADMIN can access users
  if (
    path.startsWith("/dashboard/users") &&
    !checkPermission(userRole, "users", "read")
  ) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  // Check if user has permission to access the path (requests page)
  // only ADMIN and MANAGER can access requests
  if (
    path.startsWith("/dashboard/requests") &&
    !checkPermission(userRole, "requests", "read")
  ) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  // else go to the next page
  console.log("No redirection needed");
  return NextResponse.next();
}
