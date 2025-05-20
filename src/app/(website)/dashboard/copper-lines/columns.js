// Column definitions for copper lines data table
export const copperLineColumns = [
  {
    header: "رقم الخط الارضي", // Changed from "رقم الخط الأرضي" to match requested format
    accessorKey: "landline_number",
    enableSearch: true,
  },
  { header: "السنترال", accessorKey: "central", enableSearch: true },
  { header: "البلد", accessorKey: "village", enableSearch: true }, // Changed from "القرية" to "البلد"
  { header: "رقم الكابينة", accessorKey: "cabinet_number", enableSearch: true }, // Changed from "رقم الكبينة"
  { header: "رقم البورت", accessorKey: "port_number", enableSearch: true }, // Changed from "رقم المنفذ"
  {
    header: "رقم الترمنال", // Changed from "رقم المحطة الطرفية"
    accessorKey: "terminal_number",
    enableSearch: true,
  },
  {
    header: "موقع الكابينة", // Changed from "موقع الكبينة"
    accessorKey: "cabinet_location",
    enableSearch: true,
  },
  { header: "رقم البوكس", accessorKey: "box_number", enableSearch: true },
  {
    header: "استحقاق البوكس",
    accessorKey: "box_entitlement",
    enableSearch: true,
  },
  {
    header: "موقع البوكس",
    accessorKey: "box_location",
    enableSearch: true,
  },
  {
    header: "موقع اللحامات", // Changed from "موقع الوصلة"
    accessorKey: "joint_location",
    enableSearch: true,
  },
  {
    header: "استحقاق اللحامات", // Changed from "استحقاق الوصلة"
    accessorKey: "joint_entitlement",
    enableSearch: true,
  },
  {
    header: "عمق المسافة اللحامة", // Changed from "عمق الوصلة"
    accessorKey: "joint_depth",
    enableSearch: true,
  },
  {
    header: "موقع الغرفة",
    accessorKey: "room_location",
    enableSearch: true,
  },
  {
    header: "مستوي العزل", // Changed from "مستوى العزل" (removed the ى)
    accessorKey: "insulation_level",
    enableSearch: true,
  },
  { header: "المسؤول", accessorKey: "responsible", enableSearch: true },
  { header: "الملاحظات", accessorKey: "notes", enableSearch: true }, // Changed from "ملاحظات"
  { header: "الوقت", accessorKey: "createdAt", enableSearch: false }, // Changed from "تاريخ الإنشاء"
];
