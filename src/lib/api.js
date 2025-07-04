// get all users
export async function getAllUsers({ headers, query = "" }) {
  return fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/users?query=${query}`, {
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

// Delete a user
export async function deleteUser({ userId }) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_APP_URL}/api/users/${userId}`,
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
      message: data.message || "Failed to delete user",
      error: data.error,
    };
  }

  return {
    success: true,
    message: "تم حذف المستخدم بنجاح",
  };
}

// =================== Major Cabinet API Functions ===================

// Get all major cabinets
export async function getAllMajorCabinets({ headers, query = "" } = {}) {
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
    `${process.env.NEXT_PUBLIC_APP_URL}/api/major-cabinets?query=${query}`,
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
export async function createMajorCabinet({ cabinetData }) {
  // Changed to accept majorCabinetData directly
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_APP_URL}/api/major-cabinets`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cabinetData),
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
export async function updateMajorCabinet({ id, cabinetData }) {
  // Changed to accept id and majorCabinetData
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_APP_URL}/api/major-cabinets/${id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cabinetData),
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
export async function deleteMajorCabinet({ id }) {
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
export async function getAllSecondaryCabinets({ headers, query = "" }) {
  return fetch(
    `${process.env.NEXT_PUBLIC_APP_URL}/api/secondary-cabinets?query=${query}`,
    {
      method: "GET",
      headers: headers,
      credentials: "include",
    }
  ).then((res) => res.json());
}

// Get a single secondary cabinet by ID
export async function getSecondaryCabinetById({ id, headers }) {
  return fetch(
    `${process.env.NEXT_PUBLIC_APP_URL}/api/secondary-cabinets/${id}`,
    {
      method: "GET",
      headers: headers,
      credentials: "include",
    }
  ).then((res) => res.json());
}

// Create a new secondary cabinet
export async function createSecondaryCabinet({ cabinetData }) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_APP_URL}/api/secondary-cabinets`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cabinetData),
      credentials: "include",
    }
  );

  const data = await response.json();

  if (!response.ok) {
    return {
      success: false,
      message: data.message || "Failed to create secondary cabinet",
      error: data.error,
    };
  }

  return {
    success: true,
    message: "تم إنشاء الكبينة الثانوية بنجاح",
    data: data.data,
  };
}

// Update an existing secondary cabinet
export async function updateSecondaryCabinet({ id, cabinetData }) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_APP_URL}/api/secondary-cabinets/${id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cabinetData),
      credentials: "include",
    }
  );

  const data = await response.json();

  if (!response.ok) {
    return {
      success: false,
      message: data.message || "Failed to update secondary cabinet",
      error: data.error,
    };
  }

  return {
    success: true,
    message: "تم تحديث الكبينة الثانوية بنجاح",
    data: data.data,
  };
}

// Delete a secondary cabinet
export async function deleteSecondaryCabinet({ id }) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_APP_URL}/api/secondary-cabinets/${id}`,
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
      message: data.message || "Failed to delete secondary cabinet",
      error: data.error,
    };
  }

  return {
    success: true,
    message: "تم حذف الكبينة الثانوية بنجاح",
  };
}

// =================== Mobile Tower API Functions ===================

// Get all mobile towers
export async function getAllMobileTowers({ headers, query = "" }) {
  return fetch(
    `${process.env.NEXT_PUBLIC_APP_URL}/api/mobile-towers?query=${query}`,
    {
      method: "GET",
      headers: headers,
      credentials: "include",
    }
  ).then((res) => res.json());
}

// Get a single mobile tower by ID
export async function getMobileTowerById({ id, headers }) {
  return fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/mobile-towers/${id}`, {
    method: "GET",
    headers: headers,
    credentials: "include",
  }).then((res) => res.json());
}

// Create a new mobile tower
export async function createMobileTower({ towerData }) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_APP_URL}/api/mobile-towers`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(towerData),
      credentials: "include",
    }
  );

  const data = await response.json();

  if (!response.ok) {
    return {
      success: false,
      message: data.message || "Failed to create mobile tower",
      error: data.error,
    };
  }

  return {
    success: true,
    message: "تم إنشاء برج الجوال بنجاح",
    data: data.data,
  };
}

// Update an existing mobile tower
export async function updateMobileTower({ id, towerData }) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_APP_URL}/api/mobile-towers/${id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(towerData),
      credentials: "include",
    }
  );

  const data = await response.json();

  if (!response.ok) {
    return {
      success: false,
      message: data.message || "Failed to update mobile tower",
      error: data.error,
    };
  }

  return {
    success: true,
    message: "تم تحديث برج الجوال بنجاح",
    data: data.data,
  };
}

// Delete a mobile tower
export async function deleteMobileTower({ id }) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_APP_URL}/api/mobile-towers/${id}`,
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
      message: data.message || "Failed to delete mobile tower",
      error: data.error,
    };
  }

  return {
    success: true,
    message: "تم حذف برج الجوال بنجاح",
  };
}

// =================== Copper Line API Functions ===================

// Get all copper lines
export async function getAllCopperLines({ headers, query = "" }) {
  return fetch(
    `${process.env.NEXT_PUBLIC_APP_URL}/api/copper-lines?query=${query}`,
    {
      method: "GET",
      headers: headers,
      credentials: "include",
    }
  ).then((res) => res.json());
}

// Get a single copper line by ID
export async function getCopperLineById({ id, headers }) {
  return fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/copper-lines/${id}`, {
    method: "GET",
    headers: headers,
    credentials: "include",
  }).then((res) => res.json());
}

// Create a new copper line
export async function createCopperLine({ lineData }) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_APP_URL}/api/copper-lines`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(lineData),
      credentials: "include",
    }
  );

  const data = await response.json();

  if (!response.ok) {
    return {
      success: false,
      message: data.message || "Failed to create copper line",
      error: data.error,
    };
  }

  return {
    success: true,
    message: "تم إنشاء خط النحاس بنجاح",
    data: data.data,
  };
}

// Update an existing copper line
export async function updateCopperLine({ id, lineData }) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_APP_URL}/api/copper-lines/${id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(lineData),
      credentials: "include",
    }
  );

  const data = await response.json();

  if (!response.ok) {
    return {
      success: false,
      message: data.message || "Failed to update copper line",
      error: data.error,
    };
  }

  return {
    success: true,
    message: "تم تحديث خط النحاس بنجاح",
    data: data.data,
  };
}

// Delete a copper line
export async function deleteCopperLine({ id }) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_APP_URL}/api/copper-lines/${id}`,
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
      message: data.message || "Failed to delete copper line",
      error: data.error,
    };
  }

  return {
    success: true,
    message: "تم حذف خط النحاس بنجاح",
  };
}

export async function getAllRequests({ headers }) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_APP_URL}/api/requests`,
    {
      headers,
      cache: "no-store", // Don't cache the results
    }
  );

  const data = await response.json();

  if (!response.ok) {
    return {
      success: false,
      message: data.message || "فشل في استرجاع الطلبات",
      error: data.error,
    };
  }

  return {
    success: true,
    message: "تم استرجاع الطلبات بنجاح",
    data: data.data,
  };
}

export const getAllPendingRequests = async ({ headers }) => {
  try {
    // Using the direct fetch instead of the server function
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_APP_URL}/api/requests`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          ...headers,
        },
        cache: "no-store", // Don't cache the results
      }
    );

    if (!response.ok) {
      throw new Error(`Error fetching request counts: ${response.statusText}`);
    }

    const result = await response.json();
    return (
      result.data || {
        NumberOfMajorCabinets: 0,
        NumberOfSecondaryCabinets: 0,
        NumberOfMobileTowers: 0,
        NumberOfCopperLines: 0,
      }
    );
  } catch (error) {
    console.error("Error fetching request counts:", error);
    return {
      success: false,
      message: "Error fetching requests cound",
      error: error.message,
    };
  }
};

// You can make them into one function by handling the
// module in the backend and in the funtion as a prop
// headers are requireds
export async function getMajorCabinetsRequests({ headers }) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_APP_URL}/api/requests/major-cabinets`,
      {
        headers,
        cache: "no-store", // Don't cache the results
      }
    );

    const data = await response.json();

    if (!response.ok) {
      return {
        success: false,
        message: data.message || "فشل في استرجاع الطلبات",
        error: data.error,
      };
    }

    return {
      success: true,
      message: "تم استرجاع الطلبات بنجاح",
      data: data.data,
    };
  } catch (error) {
    console.error("Error fetching major cabinets requests:", error);
    return {
      success: false,
      message: "فشل في استرجاع الطلبات",
      error: error.message,
    };
  }
}
export async function getSecondaryCabinetsRequests({ headers }) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_APP_URL}/api/requests/secondary-cabinets`,
      {
        headers,
        cache: "no-store",
      }
    );

    const data = await response.json();

    if (!response.ok) {
      return {
        success: false,
        message: data.message || "فشل في استرجاع الطلبات",
        error: data.error,
      };
    }

    return {
      success: true,
      message: "تم استرجاع الطلبات بنجاح",
      data: data.data,
    };
  } catch (error) {
    console.error("Error fetching major cabinets requests:", error);
    return {
      success: false,
      message: "فشل في استرجاع الطلبات",
      error: error.message,
    };
  }
}
export async function getMobileTowersRequests({ headers }) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_APP_URL}/api/requests/mobile-towers`,
      {
        headers,
        cache: "no-store",
      }
    );

    const data = await response.json();

    if (!response.ok) {
      return {
        success: false,
        message: data.message || "فشل في استرجاع الطلبات",
        error: data.error,
      };
    }

    return {
      success: true,
      message: "تم استرجاع الطلبات بنجاح",
      data: data.data,
    };
  } catch (error) {
    console.error("Error fetching major cabinets requests:", error);
    return {
      success: false,
      message: "فشل في استرجاع الطلبات",
      error: error.message,
    };
  }
}
export async function getCopperLinesRequests({ headers }) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_APP_URL}/api/requests/copper-lines`,
      {
        headers,
        cache: "no-store",
      }
    );

    const data = await response.json();

    if (!response.ok) {
      return {
        success: false,
        message: data.message || "فشل في استرجاع الطلبات",
        error: data.error,
      };
    }

    return {
      success: true,
      message: "تم استرجاع الطلبات بنجاح",
      data: data.data,
    };
  } catch (error) {
    console.error("Error fetching major cabinets requests:", error);
    return {
      success: false,
      message: "فشل في استرجاع الطلبات",
      error: error.message,
    };
  }
}

// =================== MSAN Cabinet API Functions ===================

// Get all MSAN cabinets
export async function getAllMsanCabinets({ headers, query = "" } = {}) {
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
    `${process.env.NEXT_PUBLIC_APP_URL}/api/msan-cabinets?query=${query}`,
    fetchOptions
  );
  const data = await response.json();
  if (!response.ok) {
    return {
      success: false,
      message: data.message || "فشل في استرجاع كابينات MSAN",
      error: data.error,
    };
  }
  return data; // Returns { success: true, data: msanCabinets }
}

// Get a single MSAN cabinet by ID
export async function getMsanCabinetById(id) {
  // Changed to accept id directly
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_APP_URL}/api/msan-cabinets/${id}`,
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
      message: data.message || `فشل في استرجاع كابينة MSAN ${id}`,
      error: data.error,
    };
  }
  return data; // Returns { success: true, data: msanCabinet }
}

// Create a new MSAN cabinet
export async function createMsanCabinet({ cabinetData }) {
  // Changed to accept msanCabinetData directly
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_APP_URL}/api/msan-cabinets`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cabinetData),
      credentials: "include",
    }
  );

  const data = await response.json();

  if (!response.ok) {
    return {
      success: false,
      message: data.message || "فشل في إنشاء كابينة MSAN",
      error: data.error,
    };
  }

  return {
    success: true,
    message: "تم إنشاء كابينة MSAN بنجاح",
    data: data.data, // API returns { success: true, message: ..., data: newMsanCabinet }
  };
}

// Update an existing MSAN cabinet
export async function updateMsanCabinet({ id, cabinetData }) {
  // Changed to accept id and msanCabinetData
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_APP_URL}/api/msan-cabinets/${id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cabinetData),
      credentials: "include",
    }
  );

  const data = await response.json();

  if (!response.ok) {
    return {
      success: false,
      message: data.message || "فشل في تحديث كابينة MSAN",
      error: data.error,
    };
  }

  return {
    success: true,
    message: "تم تحديث كابينة MSAN بنجاح",
    data: data.data, // API returns { success: true, message: ..., data: updatedMsanCabinet }
  };
}

// Delete a MSAN cabinet
export async function deleteMsanCabinet({ id }) {
  // Changed to accept id directly
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_APP_URL}/api/msan-cabinets/${id}`,
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
      message: data.message || "فشل في حذف كابينة MSAN",
      error: data.error,
    };
  }

  return {
    success: true,
    message: "تم حذف كابينة MSAN بنجاح",
  };
}

// =================== Secondary Cabinet API Functions ===================
