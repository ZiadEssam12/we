// Utility functions for interacting with the requests API

/**
 * Fetch pending requests for a specific entity type
 * @param {string} entityType - The type of entity (major-cabinets, secondary-cabinets, mobile-towers, copper-lines)
 * @returns {Promise<Array>} - List of pending requests
 */
export const fetchPendingRequests = async (entityType) => {
  try {
    const response = await fetch(`/api/requests/${entityType}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(
        `Error fetching ${entityType} requests: ${response.statusText}`
      );
    }

    const data = await response.json();
    return data.data || [];
  } catch (error) {
    console.error(`Error fetching ${entityType} requests:`, error);
    throw error;
  }
};

/**
 * Approve a pending request
 * @param {string} entityType - The type of entity (major-cabinets, secondary-cabinets, mobile-towers, copper-lines)
 * @param {string} requestId - The ID of the request to approve
 * @param {Object} formData - Optional form data to update before approval
 * @returns {Promise<Object>} - Result of the approval
 */
export const approveRequest = async (
  entityType,
  requestId,
  formData = null
) => {
  try {
    const response = await fetch(`/api/requests/${entityType}/${requestId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        action: "approve",
        formData: formData, // Include form data if provided
      }),
    });

    if (!response.ok) {
      throw new Error(`Error approving request: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error approving request:", error);
    throw error;
  }
};

/**
 * Reject a pending request
 * @param {string} entityType - The type of entity (major-cabinets, secondary-cabinets, mobile-towers, copper-lines)
 * @param {string} requestId - The ID of the request to reject
 * @returns {Promise<Object>} - Result of the rejection
 */
export const rejectRequest = async (entityType, requestId) => {
  try {
    const response = await fetch(`/api/requests/${entityType}/${requestId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ action: "reject" }),
    });

    if (!response.ok) {
      throw new Error(`Error rejecting request: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error rejecting request:", error);
    throw error;
  }
};

/**
 * Fetch all request counts for the dashboard
 * @returns {Promise<Object>} - Counts of pending requests by entity type
 */
export const fetchRequestCounts = async () => {
  try {
    const response = await fetch("/api/requests", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store", // Don't cache the results
    });

    if (!response.ok) {
      throw new Error(`Error fetching request counts: ${response.statusText}`);
    }

    const data = await response.json();
    return (
      data.data || {
        NumberOfMajorCabinets: 0,
        NumberOfSecondaryCabinets: 0,
        NumberOfMobileTowers: 0,
        NumberOfCopperLines: 0,
      }
    );
  } catch (error) {
    console.error("Error fetching request counts:", error);
    throw error;
  }
};

/**
 * Fetch detailed information about a specific request
 * @param {string} entityType - The type of entity (major-cabinets, secondary-cabinets, mobile-towers, copper-lines)
 * @param {string} requestId - The ID of the request to fetch details for
 * @returns {Promise<Object>} - Detailed information about the request
 */
export const fetchRequestDetails = async (entityType, requestId) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_APP_URL}/api/requests/${entityType}/${requestId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Error fetching request details: ${response.statusText}`);
    }

    const data = await response.json();

    return data.data || null;
  } catch (error) {
    console.error("Error fetching request details:", error);
    throw error;
  }
};
