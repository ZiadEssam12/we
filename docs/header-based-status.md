# Using Headers for Status in API Requests

This document explains how the application uses headers to set item status instead of modifying the request body.

## Background

Previously, the application used a body-modification approach in middleware:

1. Clone the request
2. Parse the body
3. Add `status: "ACTIVE"` to the body object
4. Create a new request with the modified body

This approach had limitations such as having to parse and reserialize the JSON body, which could cause issues with middleware composability.

## New Approach: Headers

The application now uses an HTTP header-based approach:

1. In middleware, we add a custom header `x-status: "ACTIVE"` to the request
2. In API routes, we check for this header and apply the status to the data before database operations

## Implementation Details

### Middleware Code

In `apiRoleMiddleware.js`, we determine when to add the status header:

```javascript
// Define when status = ACTIVE should be added
const shouldAddStatus =
  (method === "POST" && userRole === "ADMIN") ||
  (method === "PUT" && (userRole === "ADMIN" || userRole === "MANAGER"));

if (shouldAddStatus) {
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
}
```

### Utility Functions

In `middleware-utils.js`, we provide helper functions:

```javascript
// Get the status from header
export function getStatusFromHeader(request) {
  return request.headers.get("x-status");
}

// Apply middleware headers to data
export function applyMiddlewareHeaders(validatedData, request) {
  const statusHeader = getStatusFromHeader(request);

  if (statusHeader === "ACTIVE") {
    validatedData.status = statusHeader;
  }

  return validatedData;
}
```

### API Route Implementation

In API routes, we use the utility functions:

```javascript
import { applyMiddlewareHeaders } from "@/lib/middleware-utils";

// POST handler example
export async function POST(request) {
  const body = await request.json();

  // Validate the data with your schema
  const validatedData = await yourSchema.validate(body);

  // Apply middleware headers (including status if present)
  const processedData = applyMiddlewareHeaders(validatedData, request);

  // Create database record with processed data
  const newRecord = await prisma.yourModel.create({
    data: processedData,
  });

  return NextResponse.json({ success: true, data: newRecord });
}
```

## Benefits

1. **Separation of concerns**: Middleware only modifies headers, not body content
2. **Performance**: No need to parse and stringify JSON in middleware
3. **Composability**: Works better with other middleware functions
4. **Maintainability**: Clearer intent and easier to debug
5. **Extensibility**: Can easily add other header-based flags following the same pattern

## How to Use in New API Routes

1. Import the utility functions:

```javascript
import {
  getStatusFromHeader,
  applyMiddlewareHeaders,
} from "@/lib/middleware-utils";
```

2. After validating request data, apply the middleware headers:

```javascript
const processedData = applyMiddlewareHeaders(validatedData, request);
```

3. Use the processed data for database operations.
