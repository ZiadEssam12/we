/**
 * Role-Based Access Control (RBAC) system
 * Defines permissions for each role across different modules
 */
const rolePermissions = {
  ADMIN: {
    users: ["create", "read", "update", "delete"],
    majorCabinets: ["create", "read", "update", "delete"],
    secondaryCabinets: ["create", "read", "update", "delete"],
    copperLines: ["create", "read", "update", "delete"],
    mobileTowers: ["create", "read", "update", "delete"],
    requests: ["read", "update", "delete"],
    exportCSV: ["read"],
  },
  MANAGER: {
    users: [], // No permissions for users module
    majorCabinets: ["read", "update", "delete"],
    secondaryCabinets: ["read", "update", "delete"],
    copperLines: ["read", "update", "delete"],
    mobileTowers: ["read", "update", "delete"],
    requests: ["read", "update", "delete"],
    exportCSV: [],
  },
  USER: {
    users: [], // No permissions for users module
    majorCabinets: ["create", "read", "update"],
    secondaryCabinets: ["create", "read", "update"],
    copperLines: ["create", "read", "update"],
    mobileTowers: ["create", "read", "update"],
    requests: [],
    exportCSV: [],
  },
};

/**
 * Check if a user with the given role has the specified permission for a module
 * @param {string} role - User role (ADMIN, MANAGER, USER)
 * @param {string} module - Module name (users, majorCabinets, etc.)
 * @param {string} permission - Permission to check (create, read, update, delete)
 * @returns {boolean} - Whether the user has the permission
 */
const checkPermission = (role, resource, permission) => {
  // If role doesn't exist, no permissions
  if (!rolePermissions[role]) return false;

  // If module doesn't exist for the role, no permissions
  if (!rolePermissions[role][resource]) return false;

  // Check if the permission exists in the module for the role
  return rolePermissions[role][resource].includes(permission);
};

/**
 * Get all permissions for a specific role
 * @param {string} role - User role (ADMIN, MANAGER, USER)
 * @returns {Object} - Object containing all permissions for the role
 */
const getRolePermissions = (role) => {
  return rolePermissions[role] || {};
};

export { rolePermissions, checkPermission, getRolePermissions };
