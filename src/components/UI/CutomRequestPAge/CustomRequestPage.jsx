"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import {
  MdOutlineStorage,
  MdCheckCircleOutline,
  MdOutlineCancel,
  MdArrowBack,
} from "react-icons/md";
import Link from "next/link";
import toast from "react-hot-toast";

export default function MajorCabinetsRequestsPage({
  entityType = "major-cabinets",
  title = "طلبات الإضافة والتعديل المعلقة للكبائن الرئيسية",
  backLinkUrl = "/dashboard/requests",
  backLinkText = "العودة للطلبات",
  initialPendingRequests = [],
  RequestForm, // Component to render the form
  apiEndpoint, // API endpoint for approving/rejecting requests
}) {
  const [selectedRequestId, setSelectedRequestId] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const searchParams = useSearchParams();
  const router = useRouter();
  const requestId = searchParams.get("id");

  // Use initial data from server component and allow client-side updates
  const [pendingRequests, setPendingRequests] = useState([
    {
      id: "req1",
      central: "سنترال المنيا",
      village: "قرية النيل",
      cabinet: "KB-123",
      status: "pending",
      createdAt: "2025-05-15T10:30:00",
      type: "update", // or "add" for new cabinets
    },
    {
      id: "req2",
      central: "سنترال الجيزة",
      village: "قرية الهرم",
      cabinet: "KB-456",
      status: "pending",
      createdAt: "2025-05-16T09:15:00",
      type: "add",
    },
    {
      id: "req3",
      central: "سنترال القاهرة",
      village: "قرية المعادي",
      cabinet: "KB-789",
      status: "pending",
      createdAt: "2025-05-16T14:45:00",
      type: "update",
    },
    {
      id: "req4",
      central: "سنترال أسيوط",
      village: "قرية الوادي",
      cabinet: "KB-101",
      status: "pending",
      createdAt: "2025-05-17T08:20:00",
      type: "update",
    },
    {
      id: "req5",
      central: "سنترال الإسكندرية",
      village: "قرية البحر",
      cabinet: "KB-112",
      status: "pending",
      createdAt: "2025-05-17T11:10:00",
      type: "add",
    },
    {
      id: "req6",
      central: "سنترال الأقصر",
      village: "قرية النيل الجديدة",
      cabinet: "KB-131",
      status: "pending",
      createdAt: "2025-05-17T13:25:00",
      type: "update",
    },
    {
      id: "req7",
      central: "سنترال أسوان",
      village: "قرية النوبة",
      cabinet: "KB-144",
      status: "pending",
      createdAt: "2025-05-17T16:05:00",
      type: "add",
    },
    {
      id: "req8",
      central: "سنترال بورسعيد",
      village: "قرية البحيرة",
      cabinet: "KB-155",
      status: "pending",
      createdAt: "2025-05-17T17:30:00",
      type: "update",
    },
  ]);

  // Sample data for the selected request - In reality, you would fetch this when a request is selected
  const [selectedRequestData, setSelectedRequestData] = useState(null);

  useEffect(() => {
    // Find the selected request based on URL parameter
    if (requestId) {
      const request = pendingRequests.find((req) => req.id === requestId);
      if (request) {
        setSelectedRequestId(requestId);

        // In a real application, you would fetch the full details here
        // For now, we'll use mock data that matches the form fields
        setSelectedRequestData({
          central: request.central,
          village: request.village,
          cabinet: request.cabinet,
          central_to_cabinet_distance: "2.5 كم",
          number_of_joints: 3,
          joint_location: "29.9773,31.1325",
          rooms: "2",
          room_location: "29.9780,31.1330",
          entitlement: "شركة الاتصالات المصرية",
          distance: "2.5",
          responsible: "أحمد محمد",
          notes: "طلب تعديل بناءً على القياسات الجديدة",
        });
      }
    } else {
      setSelectedRequestId(null);
      setSelectedRequestData(null);
    }
  }, [requestId, pendingRequests]);
  const handleRequestClick = (reqId) => {
    router.push(`/dashboard/requests/${entityType}?id=${reqId}`);
  };

  const handleApproveRequest = async (reqId) => {
    setIsProcessing(true);

    try {
      if (apiEndpoint) {
        // Make actual API call if endpoint is provided
        const response = await fetch(`${apiEndpoint}/${reqId}/approve`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Failed to approve request");
        }
      }

      // Remove the request from the list
      const updatedRequests = pendingRequests.filter((req) => req.id !== reqId);
      setPendingRequests(updatedRequests);

      // Reset selection if the approved request was selected
      if (reqId === selectedRequestId) {
        setSelectedRequestId(null);
        setSelectedRequestData(null);
        router.push(`/dashboard/requests/${entityType}`);
      }

      toast.success("تمت الموافقة على الطلب بنجاح");
    } catch (error) {
      console.error("Error approving request:", error);
      toast.error("حدث خطأ أثناء الموافقة على الطلب");
    } finally {
      setIsProcessing(false);
    }
  };

  const handleRejectRequest = async (reqId) => {
    setIsProcessing(true);

    try {
      if (apiEndpoint) {
        // Make actual API call if endpoint is provided
        const response = await fetch(`${apiEndpoint}/${reqId}/reject`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Failed to reject request");
        }
      }

      // Remove the request from the list
      const updatedRequests = pendingRequests.filter((req) => req.id !== reqId);
      setPendingRequests(updatedRequests);

      // Reset selection if the rejected request was selected
      if (reqId === selectedRequestId) {
        setSelectedRequestId(null);
        setSelectedRequestData(null);
        router.push(`/dashboard/requests/${entityType}`);
      }

      toast.error("تم رفض الطلب");
    } catch (error) {
      console.error("Error rejecting request:", error);
      toast.error("حدث خطأ أثناء رفض الطلب");
    } finally {
      setIsProcessing(false);
    }
  };

  // Format the date to a readable format
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("ar-EG", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };
  // Set initial pending requests on component mount
  useEffect(() => {
    if (initialPendingRequests?.length > 0) {
      setPendingRequests(initialPendingRequests);
    }
  }, [initialPendingRequests]);

  return (
    <div className="container mx-auto p-6">
      {" "}
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-3">
          <Link
            href={backLinkUrl}
            className="text-blue-600 hover:text-blue-800 flex items-center bg-blue-50 py-1 px-3 rounded-full hover:bg-blue-100 transition-colors"
          >
            <MdArrowBack className="ml-1" />
            {backLinkText}
          </Link>
          {selectedRequestId && (
            <span className="text-sm text-gray-500">
              {
                pendingRequests.find((req) => req.id === selectedRequestId)
                  ?.cabinet
              }
            </span>
          )}
        </div>
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold bg-gradient-to-l from-blue-600 to-purple-600 text-transparent bg-clip-text">
            {title}
          </h1>
          <div className="text-sm text-gray-500">
            {new Date().toLocaleDateString("ar-EG", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </div>
        </div>
      </div>
      {/* Main content area with the split layout */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left panel - List of requests */}
        <div className="lg:w-1/3 w-full">
          {" "}
          <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200 mb-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-bold text-lg">الطلبات المعلقة</h2>
              <div className="flex items-center gap-2">
                <span className="bg-blue-100 text-blue-700 py-1 px-3 rounded-full text-sm font-bold">
                  {pendingRequests.length}
                </span>
                <div className="text-xs text-gray-500">
                  <span className="inline-block ml-2 w-2 h-2 rounded-full bg-green-500"></span>{" "}
                  إضافة
                  <span className="inline-block mx-2 w-2 h-2 rounded-full bg-amber-500"></span>{" "}
                  تعديل
                </div>
              </div>
            </div>{" "}
            <div className="flex flex-col gap-3 max-h-[65vh] overflow-y-auto pr-1">
              {pendingRequests.length > 0 ? (
                pendingRequests.map((request) => (
                  <div
                    key={request.id}
                    className={`border rounded-lg p-3 cursor-pointer transition-all ${
                      selectedRequestId === request.id
                        ? request.type === "add"
                          ? "border-green-500 bg-green-50"
                          : "border-amber-500 bg-amber-50"
                        : "border-gray-200 hover:border-blue-300"
                    }`}
                    onClick={() => handleRequestClick(request.id)}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <span className="font-bold text-gray-800">
                          {request.cabinet}
                        </span>
                        <span
                          className={`mr-2 text-xs px-2 py-0.5 rounded-full ${
                            request.type === "add"
                              ? "bg-green-100 text-green-700"
                              : "bg-amber-100 text-amber-700"
                          }`}
                        >
                          {request.type === "add" ? "إضافة" : "تعديل"}
                        </span>
                      </div>
                      <div className="flex gap-1">
                        <button
                          className="p-1 cursor-pointer text-green-600 hover:bg-green-100 rounded-full transition-colors"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleApproveRequest(request.id);
                          }}
                          disabled={isProcessing}
                        >
                          <MdCheckCircleOutline size={18} />
                        </button>
                        <button
                          className="p-1 cursor-pointer text-red-600 hover:bg-red-100 rounded-full transition-colors"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleRejectRequest(request.id);
                          }}
                          disabled={isProcessing}
                        >
                          <MdOutlineCancel size={18} />
                        </button>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">
                        {request.central} - {request.village}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        {formatDate(request.createdAt)}
                      </p>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-8 text-gray-500">
                  <MdOutlineStorage
                    className="mx-auto mb-2 text-gray-400"
                    size={32}
                  />
                  <p>لا توجد طلبات معلقة حالياً</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right panel - Form */}
        <div className="lg:w-2/3 w-full">
          {selectedRequestId ? (
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="flex justify-between items-center mb-4 border-b pb-3">
                <h2 className="text-xl font-bold">
                  تفاصيل الطلب
                  <span className="mr-2 text-sm font-normal text-gray-500">
                    {selectedRequestData?.cabinet}
                  </span>
                </h2>
                <span
                  className={`px-3 py-1 rounded-full text-sm ${
                    pendingRequests.find((req) => req.id === selectedRequestId)
                      ?.type === "add"
                      ? "bg-green-100 text-green-700"
                      : "bg-amber-100 text-amber-700"
                  }`}
                >
                  {pendingRequests.find((req) => req.id === selectedRequestId)
                    ?.type === "add"
                    ? "طلب إضافة جديد"
                    : "طلب تعديل بيانات"}
                </span>
              </div>{" "}
              {RequestForm ? (
                <RequestForm
                  initialData={selectedRequestData}
                  isProcessing={isProcessing}
                  hideSubmitButton={true}
                  onSubmit={(data) => {
                    // Handle form submission here
                    console.log("Form submitted with data:", data);
                    // In a real application, you would send this to your API
                  }}
                  formStyle="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-h-[65vh] overflow-y-auto px-2 rounded-lg"
                  renderCustomButtons={(formik) => (
                    <div className="col-span-1 md:col-span-2 lg:col-span-3">
                      <div className="flex justify-between gap-x-2 mt-1 pt-4 border-t">
                        <div className="flex gap-2">
                          <button
                            type="button"
                            onClick={() =>
                              handleRejectRequest(selectedRequestId)
                            }
                            disabled={isProcessing}
                            className="cursor-pointer px-6 py-2 bg-red-50 text-red-600 rounded-md hover:bg-red-100 transition-colors disabled:opacity-50 border border-red-200 font-medium"
                          >
                            رفض
                          </button>
                          <button
                            type="button"
                            onClick={() =>
                              router.push(`/dashboard/requests/${entityType}`)
                            }
                            disabled={isProcessing}
                            className="cursor-pointer px-4 py-2 bg-gray-200 text-gray-600 rounded-md hover:bg-gray-100 transition-colors disabled:opacity-50"
                          >
                            إلغاء
                          </button>
                        </div>
                        <button
                          type="button"
                          onClick={() => {
                            handleApproveRequest(selectedRequestId);
                          }}
                          disabled={isProcessing}
                          className="cursor-pointer px-8 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors disabled:opacity-50 shadow-sm font-medium"
                        >
                          {isProcessing ? "..." : "موافقة"}
                        </button>
                      </div>
                    </div>
                  )}
                />
              ) : (
                <div className="text-red-500 p-4 border border-red-300 rounded-md">
                  Form component not provided
                </div>
              )}
              renderCustomButtons=
              {(formik) => (
                <div className="col-span-1 md:col-span-2 lg:col-span-3">
                  <div className="flex justify-between gap-x-2 mt-1 pt-4 border-t">
                    <div className="flex gap-2">
                      <button
                        type="button"
                        onClick={() => handleRejectRequest(selectedRequestId)}
                        disabled={isProcessing}
                        className="cursor-pointer px-6 py-2 bg-red-50 text-red-600 rounded-md hover:bg-red-100 transition-colors disabled:opacity-50 border border-red-200 font-medium"
                      >
                        رفض
                      </button>
                      <button
                        type="button"
                        onClick={() =>
                          router.push("/dashboard/requests/major-cabinets")
                        }
                        disabled={isProcessing}
                        className="cursor-pointer px-4 py-2 bg-gray-200 text-gray-600 rounded-md hover:bg-gray-100 transition-colors disabled:opacity-50"
                      >
                        إلغاء
                      </button>
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        // You can access form values here if needed before approval
                        // const formData = formik.values;
                        handleApproveRequest(selectedRequestId);
                      }}
                      disabled={isProcessing}
                      className="cursor-pointer px-8 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors disabled:opacity-50 shadow-sm font-medium"
                    >
                      {isProcessing ? "..." : "موافقة"}
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="bg-white p-10 rounded-lg shadow-sm border border-gray-200 h-full flex flex-col items-center justify-center text-center">
              <div className="bg-blue-50 p-5 rounded-full mb-5">
                <MdOutlineStorage className="text-blue-500" size={48} />
              </div>
              <h3 className="text-xl font-medium text-gray-700 mb-3">
                لم يتم تحديد طلب
              </h3>
              <p className="text-gray-500 max-w-md">
                يرجى اختيار أحد الطلبات من القائمة جهة اليمين لعرض تفاصيله
                وإمكانية الموافقة أو الرفض
              </p>
              <div className="mt-5 border-t border-dashed border-gray-200 pt-5 w-full">
                <div className="flex justify-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center">
                    <span className="inline-block ml-1 w-3 h-3 rounded-full bg-green-500"></span>
                    طلبات إضافة جديدة
                  </div>
                  <div className="flex items-center">
                    <span className="inline-block ml-1 w-3 h-3 rounded-full bg-amber-500"></span>
                    طلبات تعديل بيانات
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
