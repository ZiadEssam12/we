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

// Update an existing user
export async function updateUser({ user }) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_APP_URL}/api/users/${user.id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
      credentials: "include",
    }
  );

  const data = await response.json();

  if (!response.ok) {
    return {
      success: false,
      message: data.message || "Failed to update user",
      error: data.error,
    };
  }

  return {
    success: true,
    message: "تم تحديث المستخدم بنجاح",
    user: data.user,
  };
}

// Change user password
export async function changePassword({ userId, passwordData }) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_APP_URL}/api/users/${userId}/password`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(passwordData),
      credentials: "include",
    }
  );

  const data = await response.json();

  if (!response.ok) {
    return {
      success: false,
      message: data.message || "Failed to update password",
      error: data.error,
    };
  }

  return {
    success: true,
    message: "تم تحديث كلمة المرور بنجاح",
  };
}

// =================== Major Cabinet API Functions ===================

// Get all major cabinets
export async function getAllMajorCabinets({ headers } = {}) {
  // Added headers parameter
  const fetchOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      ...(headers && headers), // Spread the passed headers
    },
  };

  // Only add credentials if headers are not explicitly passed (for client-side calls)
  if (!headers) {
    fetchOptions.credentials = "include";
  }

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_APP_URL}/api/major-cabinets`,
    fetchOptions
  );
  const data = await response.json();
  if (!response.ok) {
    return {
      success: false,
      message: data.message || "فشل في استرجاع الكبائن الرئيسية",
      error: data.error,
    };
  }
  return data; // Returns { success: true, data: majorCabinets }
}

// Get a single major cabinet by ID
export async function getMajorCabinetById(id) {
  // Changed to accept id directly
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_APP_URL}/api/major-cabinets/${id}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    }
  );
  const data = await response.json();
  if (!response.ok) {
    return {
      success: false,
      message: data.message || `فشل في استرجاع الكبينة الرئيسية ${id}`,
      error: data.error,
    };
  }
  return data; // Returns { success: true, data: majorCabinet }
}

// Create a new major cabinet
export async function createMajorCabinet(majorCabinetData) {
  // Changed to accept majorCabinetData directly
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_APP_URL}/api/major-cabinets`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(majorCabinetData),
      credentials: "include",
    }
  );

  const data = await response.json();

  if (!response.ok) {
    return {
      success: false,
      message: data.message || "فشل في إنشاء الكابينة الرئيسية",
      error: data.error,
    };
  }

  return {
    success: true,
    message: "تم إنشاء الكابينة الرئيسية بنجاح",
    data: data.data, // API returns { success: true, message: ..., data: newMajorCabinet }
  };
}

// Update an existing major cabinet
export async function updateMajorCabinet(id, majorCabinetData) {
  // Changed to accept id and majorCabinetData
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_APP_URL}/api/major-cabinets/${id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(majorCabinetData),
      credentials: "include",
    }
  );

  const data = await response.json();

  if (!response.ok) {
    return {
      success: false,
      message: data.message || "فشل في تحديث الكابينة الرئيسية",
      error: data.error,
    };
  }

  return {
    success: true,
    message: "تم تحديث الكابينة الرئيسية بنجاح",
    data: data.data, // API returns { success: true, message: ..., data: updatedMajorCabinet }
  };
}

// Delete a major cabinet
export async function deleteMajorCabinet(id) {
  // Changed to accept id directly
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_APP_URL}/api/major-cabinets/${id}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    }
  );

  const data = await response.json();

  if (!response.ok) {
    return {
      success: false,
      message: data.message || "فشل في حذف الكابينة الرئيسية",
      error: data.error,
    };
  }

  return {
    success: true,
    message: "تم حذف الكابينة الرئيسية بنجاح",
  };
}

// =================== Secondary Cabinet API Functions ===================

// Get all secondary cabinets
export function getAllSecondaryCabinets() {
  return fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/secondary-cabinets`, {
    method: "GET",
    credentials: "include",
  }).then((res) => res.json());
}

// Get a single secondary cabinet by ID
export function getSecondaryCabinetById({ id }) {
  return fetch(
    `${process.env.NEXT_PUBLIC_APP_URL}/api/secondary-cabinets/${id}`,
    {
      method: "GET",
      credentials: "include",
    }
  ).then((res) => res.json());
}

// Create a new secondary cabinet
export async function createSecondaryCabinet({ secondaryCabinetData }) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_APP_URL}/api/secondary-cabinets`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(secondaryCabinetData),
      credentials: "include",
    }
  );

  const data = await response.json();

  if (!response.ok) {
    return {
      success: false,
      message: data.message || "فشل في إنشاء الكابينة الفرعية",
      error: data.error,
    };
  }

  return {
    success: true,
    message: "تم إنشاء الكابينة الفرعية بنجاح",
    secondaryCabinet: data.secondaryCabinet,
  };
}

// Update an existing secondary cabinet
export async function updateSecondaryCabinet({ id, secondaryCabinetData }) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_APP_URL}/api/secondary-cabinets/${id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(secondaryCabinetData),
      credentials: "include",
    }
  );

  const data = await response.json();

  if (!response.ok) {
    return {
      success: false,
      message: data.message || "فشل في تحديث الكابينة الفرعية",
      error: data.error,
    };
  }

  return {
    success: true,
    message: "تم تحديث الكابينة الفرعية بنجاح",
    secondaryCabinet: data.secondaryCabinet,
  };
}

// Delete a secondary cabinet
export async function deleteSecondaryCabinet({ id }) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_APP_URL}/api/secondary-cabinets/${id}`,
    {
      method: "DELETE",
      credentials: "include",
    }
  );

  const data = await response.json();

  if (!response.ok) {
    return {
      success: false,
      message: data.message || "فشل في حذف الكابينة الفرعية",
      error: data.error,
    };
  }

  return {
    success: true,
    message: "تم حذف الكابينة الفرعية بنجاح",
  };
}

// =================== Mobile Tower API Functions ===================

// Get all mobile towers
export function getAllMobileTowers() {
  return fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/mobile-towers`, {
    method: "GET",
    credentials: "include",
  }).then((res) => res.json());
}

// Get a single mobile tower by ID
export function getMobileTowerById({ id }) {
  return fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/mobile-towers/${id}`, {
    method: "GET",
    credentials: "include",
  }).then((res) => res.json());
}

// Create a new mobile tower
export async function createMobileTower({ mobileTowerData }) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_APP_URL}/api/mobile-towers`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(mobileTowerData),
      credentials: "include",
    }
  );

  const data = await response.json();

  if (!response.ok) {
    return {
      success: false,
      message: data.message || "فشل في إنشاء برج المحمول",
      error: data.error,
    };
  }

  return {
    success: true,
    message: "تم إنشاء برج المحمول بنجاح",
    mobileTower: data.mobileTower,
  };
}

// Update an existing mobile tower
export async function updateMobileTower({ id, mobileTowerData }) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_APP_URL}/api/mobile-towers/${id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(mobileTowerData),
      credentials: "include",
    }
  );

  const data = await response.json();

  if (!response.ok) {
    return {
      success: false,
      message: data.message || "فشل في تحديث برج المحمول",
      error: data.error,
    };
  }

  return {
    success: true,
    message: "تم تحديث برج المحمول بنجاح",
    mobileTower: data.mobileTower,
  };
}

// Delete a mobile tower
export async function deleteMobileTower({ id }) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_APP_URL}/api/mobile-towers/${id}`,
    {
      method: "DELETE",
      credentials: "include",
    }
  );

  const data = await response.json();

  if (!response.ok) {
    return {
      success: false,
      message: data.message || "فشل في حذف برج المحمول",
      error: data.error,
    };
  }

  return {
    success: true,
    message: "تم حذف برج المحمول بنجاح",
  };
}

// =================== Copper Line API Functions ===================

// Get all copper lines
export function getAllCopperLines() {
  return fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/copper-lines`, {
    method: "GET",
    credentials: "include",
  }).then((res) => res.json());
}

// Get a single copper line by ID
export function getCopperLineById({ id }) {
  return fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/copper-lines/${id}`, {
    method: "GET",
    credentials: "include",
  }).then((res) => res.json());
}

// Create a new copper line
export async function createCopperLine({ copperLineData }) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_APP_URL}/api/copper-lines`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(copperLineData),
      credentials: "include",
    }
  );

  const data = await response.json();

  if (!response.ok) {
    return {
      success: false,
      message: data.message || "فشل في إنشاء خط النحاس",
      error: data.error,
    };
  }

  return {
    success: true,
    message: "تم إنشاء خط النحاس بنجاح",
    copperLine: data.copperLine,
  };
}

// Update an existing copper line
export async function updateCopperLine({ id, copperLineData }) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_APP_URL}/api/copper-lines/${id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(copperLineData),
      credentials: "include",
    }
  );

  const data = await response.json();

  if (!response.ok) {
    return {
      success: false,
      message: data.message || "فشل في تحديث خط النحاس",
      error: data.error,
    };
  }

  return {
    success: true,
    message: "تم تحديث خط النحاس بنجاح",
    copperLine: data.copperLine,
  };
}

// Delete a copper line
export async function deleteCopperLine({ id }) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_APP_URL}/api/copper-lines/${id}`,
    {
      method: "DELETE",
      credentials: "include",
    }
  );

  const data = await response.json();

  if (!response.ok) {
    return {
      success: false,
      message: data.message || "فشل في حذف خط النحاس",
      error: data.error,
    };
  }

  return {
    success: true,
    message: "تم حذف خط النحاس بنجاح",
  };
}
