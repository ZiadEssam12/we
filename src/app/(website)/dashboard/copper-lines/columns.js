// Column definitions for copper lines data table
export const copperLineColumns = [
  {
    Header: "رقم الخط الأرضي",
    accessorKey: "landline_number",
    enableSearch: true,
  },
  { Header: "السنترال", accessorKey: "central", enableSearch: true },
  { Header: "القرية", accessorKey: "village", enableSearch: true },
  { Header: "رقم الكبينة", accessorKey: "cabinet_number", enableSearch: true },
  { Header: "رقم المنفذ", accessorKey: "port_number", enableSearch: true },
  {
    Header: "رقم المحطة الطرفية",
    accessorKey: "terminal_number",
    enableSearch: true,
  },
  {
    Header: "موقع الكبينة",
    accessorKey: "cabinet_location",
    enableSearch: true,
  },
  { Header: "رقم الصندوق", accessorKey: "box_number", enableSearch: true },
  {
    Header: "استحقاق الصندوق",
    accessorKey: "box_entitlement",
    enableSearch: true,
  },
  { Header: "المسؤول", accessorKey: "responsible", enableSearch: true },
  { Header: "تاريخ الإنشاء", accessorKey: "createdAt", enableSearch: false },
];
