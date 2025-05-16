// Column definitions for copper lines data table
export const copperLineColumns = [
  {
    header: "رقم الخط الأرضي",
    accessorKey: "landline_number",
    enableSearch: true,
  },
  { header: "السنترال", accessorKey: "central", enableSearch: true },
  { header: "القرية", accessorKey: "village", enableSearch: true },
  { header: "رقم الكبينة", accessorKey: "cabinet_number", enableSearch: true },
  { header: "رقم المنفذ", accessorKey: "port_number", enableSearch: true },
  {
    header: "رقم المحطة الطرفية",
    accessorKey: "terminal_number",
    enableSearch: true,
  },
  {
    header: "موقع الكبينة",
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
    header: "موقع الوصلة",
    accessorKey: "joint_location",
    enableSearch: true,
  },
  {
    header: "استحقاق الوصلة",
    accessorKey: "joint_entitlement",
    enableSearch: true,
  },
  {
    header: "عمق الوصلة",
    accessorKey: "joint_depth",
    enableSearch: true,
  },
  {
    header: "موقع الغرفة",
    accessorKey: "room_location",
    enableSearch: true,
  },
  {
    header: "مستوى العزل",
    accessorKey: "insulation_level",
    enableSearch: true,
  },
  { header: "المسؤول", accessorKey: "responsible", enableSearch: true },
  { header: "ملاحظات", accessorKey: "notes", enableSearch: true },
  { header: "تاريخ الإنشاء", accessorKey: "createdAt", enableSearch: false },
];
