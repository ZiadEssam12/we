import { cookies } from "next/headers";
import ClientRequestsPage from "./ClientRequestsPage";
import { getAllPendingRequests } from "@/lib/api";
import { getSessionCookieName, setCookiesHeader } from "@/lib/utils";

export default async function RequestsPage() {
  const cookieStore = await cookies();
  const sessionCookieName = getSessionCookieName();
  const sessionTokenCookie = cookieStore.get(sessionCookieName);
  const headers = await setCookiesHeader({ sessionTokenCookie });
  const data = await getAllPendingRequests({ headers });

  return <ClientRequestsPage pendingRequests={data} />;
}
