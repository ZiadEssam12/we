/**
 * Helper functions for middleware interactions
 */

/**
 * Extracts the status value from x-status header
 * @param {Request} request - The request object
 * @returns {string|null} - The status value ('ACTIVE', etc) or null if not set
 */
export function getStatusFromHeader(request) {
  return request.headers.get("x-status");
}

/**
 * Applies the status from header to data object if it exists
 * @param {Object} data - The data object to update
 * @param {Request} request - The request object
 * @returns {Object} - The updated data object
 */
export function applyStatusFromHeader(data, request) {
  const status = getStatusFromHeader(request);
  if (status) {
    return {
      ...data,
      status,
    };
  }
  return data;
}

/**
 * Apply middleware headers to validated data
 * This is useful for handling all middleware header values at once
 * @param {Object} validatedData - The validated data from schema validation
 * @param {Request} request - The request object
 * @returns {Object} - The updated data with middleware values applied
 */
export function applyMiddlewareHeaders(validatedData, request) {
  const statusHeader = getStatusFromHeader(request);

  // Apply status if present
  if (statusHeader === "ACTIVE") {
    validatedData.status = statusHeader;
  }

  // Add other middleware header handling here

  return validatedData;
}
