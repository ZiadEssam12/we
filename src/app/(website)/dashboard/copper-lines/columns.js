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
  { header: "رقم الصندوق", accessorKey: "box_number", enableSearch: true },
  {
    header: "استحقاق الصندوق",
    accessorKey: "box_entitlement",
    enableSearch: true,
  },
  { header: "المسؤول", accessorKey: "responsible", enableSearch: true },
  { header: "تاريخ الإنشاء", accessorKey: "createdAt", enableSearch: false },
];
