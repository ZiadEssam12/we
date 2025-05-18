/**
 * Utility functions for searching across database entities
 */

/**
 * Available entity types for search
 */
export const entityTypes = {
  USERS: "users",
  MAJOR_CABINET: "majorCabinet",
  SECONDARY_CABINET: "secondaryCabinet",
  COPPER_LINE: "copperLine",
  MOBILE_TOWER: "mobileTower",
};

/**
 * Search for entities using either the unified search endpoint or direct entity endpoints
 * @param {Object} options - Search options
 * @param {string} options.entityType - Type of entity to search for (Use values from entityTypes)
 * @param {string} options.query - The search query
 * @param {string[]} [options.fields] - Optional specific fields to search in
 * @param {boolean} [options.useUnifiedEndpoint=true] - Whether to use the unified search endpoint
 * @returns {Promise<Object>} - The search results
 */
export async function searchEntities({
  entityType,
  query,
  fields,
  useUnifiedEndpoint = true,
}) {
  if (!entityType) {
    throw new Error("Entity type is required");
  }

  // Use the unified search endpoint
  if (useUnifiedEndpoint) {
    const params = new URLSearchParams({
      table: entityType,
      query: query || "",
    });

    // Add fields parameter if provided
    if (fields && fields.length > 0) {
      params.append("fields", fields.join(","));
    }

    const response = await fetch(`/api/search?${params.toString()}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response.json();
  }
  // Use direct entity endpoints
  else {
    // Map entity types to their API endpoints
    const endpointMap = {
      [entityTypes.USERS]: "/api/users",
      [entityTypes.MAJOR_CABINET]: "/api/major-cabinets",
      [entityTypes.SECONDARY_CABINET]: "/api/secondary-cabinets",
      [entityTypes.COPPER_LINE]: "/api/copper-lines",
      [entityTypes.MOBILE_TOWER]: "/api/mobile-towers",
    };

    const endpoint = endpointMap[entityType];
    if (!endpoint) {
      throw new Error(`Invalid entity type: ${entityType}`);
    }
    const params = new URLSearchParams({
      query: query || "",
    });

    const response = await fetch(`${endpoint}?${params.toString()}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response.json();
  }
}

/**
 * Helper function to build search filters for forms
 * @param {Object} options - Filter options
 * @param {string} options.entityType - Type of entity to filter
 * @returns {Array} Array of filter fields appropriate for the entity type
 */
export function getSearchableFields(entityType) {
  switch (entityType) {
    case entityTypes.USERS:
      return ["userName", "name", "phoneNumber"];
    case entityTypes.MAJOR_CABINET:
      return ["central", "village", "cabinet", "notes"];
    case entityTypes.SECONDARY_CABINET:
      return [
        "central",
        "village",
        "cabinet",
        "port_gbon",
        "box_number",
        "notes",
      ];
    case entityTypes.COPPER_LINE:
      return [
        "landline_number",
        "central",
        "village",
        "cabinet_number",
        "box_number",
        "notes",
      ];
    case entityTypes.MOBILE_TOWER:
      return ["central", "tower_code", "company", "address", "notes"];
    default:
      return [];
  }
}
