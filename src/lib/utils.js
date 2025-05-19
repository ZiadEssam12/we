export async function setCookiesHeader({ sessionTokenCookie }) {
  const headers = {};
  if (sessionTokenCookie) {
    // Construct the cookie string to send
    headers[
      "Cookie"
    ] = `${sessionTokenCookie.name}=${sessionTokenCookie.value}`;
  }

  return headers;
}

// filepath: f:\frontend projects\Nextjs\Safari hub\src\lib\utils.js
export function getSessionCookieName() {
  const isProduction = process.env.NODE_ENV === "production";
  return isProduction
    ? "__Secure-authjs.session-token"
    : "authjs.session-token";
}

export function entityNameArToEn(entityNameAr) {
  switch (entityNameAr) {
    case "برج التليفون":
      return "mobileTowers"; // Changed to plural to match RBAC
    case "الكبينة الرئيسية":
      return "majorCabinets"; // Changed to plural to match RBAC
    case "الكبينة الثانوية":
      return "secondaryCabinets"; // Changed to plural to match RBAC
    case "خط النحاس":
      return "copperLines"; // Changed to plural to match RBAC
    case "المستخدمين":
      return "users";
    default:
      return "";
  }
}
