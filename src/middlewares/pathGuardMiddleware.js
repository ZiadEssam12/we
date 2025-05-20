import { checkPermission } from "@/RBAC";
import { NextResponse } from "next/server";

export async function pathGuardMiddleware(request, token) {
  const path = request.nextUrl.pathname;
  const userRole = token?.role;

  console.log("Path Guard Middleware:", {
    path,
    userRole,
    hasUserReadPermission: checkPermission(userRole, "users", "read"),
    condition:
      path.startsWith("/dashboard/users") &&
      !checkPermission(userRole, "users", "read"),
  });

  if (
    path.startsWith("/dashboard/users") &&
    !checkPermission(userRole, "users", "read")
  ) {
    console.log("Redirecting to dashboard from users path");
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  if (
    path.startsWith("/dashboard/requests") &&
    !checkPermission(userRole, "requests", "read")
  ) {
    console.log("Redirecting to dashboard from requests path");
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  console.log("No redirection needed");
  return NextResponse.next();
}
