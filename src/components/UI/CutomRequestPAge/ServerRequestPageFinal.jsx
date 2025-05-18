import React from "react";
import CustomRequestPageFinal from "./CustomRequestPageFinal";
import { cookies } from "next/headers";
import { getSessionCookieName, setCookiesHeader } from "@/lib/utils";

/**
 * A server component that fetches request data and passes it to the client component
 * @param {Object} props
 * @param {string} props.entityType - The type of entity (e.g., "major-cabinets", "secondary-cabinets")
 * @param {string} props.title - Page title
 * @param {string} props.backLinkUrl - URL for the back button
 * @param {string} props.backLinkText - Text for the back button
 * @param {Function} props.fetchFn - Server function to fetch pending requests data
 * @param {React.Component} props.RequestForm - Form component to render for request details
 * @param {string} props.apiEndpoint - API endpoint for approving/rejecting requests
 */

export const dynamic = 'force-dynamic';

export default async function ServerRequestPageFinal({
  entityType,
  title,
  fetchFn,
  RequestForm,
  apiEndpoint,
}) {
  // Fetch data from API or database using server component capabilities
  let pendingRequests = [];

  if (fetchFn) {
    try {
      const cookieStore = await cookies();
      const sessionCookieName = getSessionCookieName();
      const sessionTokenCookie = cookieStore.get(sessionCookieName);
      const headers = await setCookiesHeader({ sessionTokenCookie });
      pendingRequests = await fetchFn({ headers });
    } catch (error) {
      console.error("Error fetching pending requests:", error);
      // You could handle error state here
    }
  }

  return (
    <CustomRequestPageFinal
      entityType={entityType}
      title={title}
      initialPendingRequests={pendingRequests.data}
      RequestForm={RequestForm}
      apiEndpoint={apiEndpoint}
    />
  );
}
