// get all users
export function getAllUsers({ headers }) {
  return fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/users`, {
    method: "GET",
    headers: headers,
    credentials: "include",
  }).then((res) => res.json());
}

// Create a new user
export async function createUser({ user }) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
    credentials: "include",
  });

  const data = await response.json();
  console.log("response : ", data);

  if (!response.ok) {
    return {
      success: false,
      message: data.message || "Failed to create user",
      error: data.error,
    };
  }

  return {
    success: true,
    message: "تم إنشاء المستخدم بنجاح",
    user: data.user,
  };
}
