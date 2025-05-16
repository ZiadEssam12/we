/**
 * Example demonstrating how to use the status header value in your API code
 */

import { applyMiddlewareHeaders } from "@/lib/middleware-utils";

/**
 * Example API route handler using middleware headers
 *
 * @param {Request} request - The Next.js request object
 */
export async function exampleApiHandler(request) {
  // Extract JSON data from the request
  const data = await request.json();

  // Apply any middleware headers to the validated data
  // This automatically checks for the x-status header and applies it if present
  const processedData = applyMiddlewareHeaders(data, request);

  console.log("Original data:", data);
  console.log("Processed data with middleware headers:", processedData);

  // Continue with database operations using the processedData
  // ...
}

/**
 * Middleware-based status example
 *
 * This shows how the middleware-added header is processed in the API route
 * The middleware adds x-status="ACTIVE" and the API route reads it
 * without parsing the body
 */
