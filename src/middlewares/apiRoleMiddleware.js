import { NextRequest, NextResponse } from "next/server";

export async function apiRoleMiddleware(req, token) {
  const path = req.nextUrl.pathname;

  if (path.startsWith("/api/auth")) {
    return NextResponse.next();
  }

  const method = req.method;
  const userRole = token?.role;

  if (!userRole) {
    return NextResponse.json(
      { success: false, message: "غير مصرح به" },
      { status: 401 }
    );
  }

  
  if (path.startsWith("/api/export-csv") && userRole !== "ADMIN") {
    return NextResponse.json(
      { success: false, message: "ليس لديك صلاحيات للقيام بهذا الإجراء" },
      { status: 401 }
    );
  }
  
  // DELETE requests only allowed for ADMIN
  if (method === "DELETE" && userRole !== "ADMIN") {
    return NextResponse.json(
      { success: false, message: "ليس لديك صلاحيات للقيام بهذا الإجراء" },
      { status: 401 }
    );
  }

  // Define when status = ACTIVE should be added
  const shouldAddStatus =
    (method === "POST" && userRole === "ADMIN") ||
    (method === "PUT" && (userRole === "ADMIN" || userRole === "MANAGER"));

  if (shouldAddStatus) {
    try {
      // Create a new headers object with all original headers
      const newHeaders = new Headers(req.headers);

      // Add status directly in the header
      newHeaders.set("x-status", "ACTIVE");

      // Clone the request with new headers
      const newReq = new Request(req.url, {
        method,
        headers: newHeaders,
        body: req.body,
      });

      return NextResponse.next({ request: newReq });
    } catch (error) {
      console.error("Failed to modify request headers in middleware:", error);
    }
  }

  return NextResponse.next();
}
