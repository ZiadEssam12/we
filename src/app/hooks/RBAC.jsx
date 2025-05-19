"use client";

import { checkPermission } from "@/RBAC";
import { useSession } from "next-auth/react";

/**
 * Hook to check if the current user has permission for an action
 */
export function usePermission() {
  const { data: session } = useSession();

  const role = session?.user?.role; // Default to USER if no role found

  /**
   * Check if the current user has the specified permission
   * @param {string} resource - The resource to check permissions for
   * @param {string} permission - The permission to check
   * @returns {boolean} - Whether the user has the permission
   */
  const hasPermission = (resource, permission) => {
    console.log("Checking permission for resource:", resource);
    console.log("Checking permission for role:", role);
    console.log("Checking permission for action:", permission);
    return checkPermission(role, resource, permission);
  };

  /**
   * Check if the current user can perform any actions on a resource
   * @param {string} resource - The resource to check
   * @returns {boolean} - Whether the user has any permissions for the resource
   */
  const canAccessResource = (resource) => {
    const permissions = ["create", "read", "update", "delete"];
    return permissions.some((permission) =>
      hasPermission(resource, permission)
    );
  };

  return { hasPermission, canAccessResource, role };
}
