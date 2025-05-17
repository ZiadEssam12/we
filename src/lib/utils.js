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



export function setStatus(data){
  
}