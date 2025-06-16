// Column definitions for MSAN cabinets data table
export const msanCabinetColumns = [
  { header: "اسم الكابينة", accessorKey: "cabinet_name", enableSearch: true },
  { header: "رقم الكابل", accessorKey: "cable_number", enableSearch: true },
  { header: "سعة الكابل", accessorKey: "cable_capacity", enableSearch: false },
  {
    header: "المسافة من السنترال",
    accessorKey: "distance_from_central",
    enableSearch: false,
  },
  {
    header: "اسم ODF",
    accessorKey: "odf_name",
    enableSearch: true,
  },
  {
    header: "رقم الكاست",
    accessorKey: "cassette_number",
    enableSearch: true,
  },
  { header: "الفروع", accessorKey: "branches", enableSearch: true },
  { header: "الاحتياط", accessorKey: "spares", enableSearch: true },
  {
    header: "موقع الكابينة",
    accessorKey: "cabinet_location",
    enableSearch: true,
  },
  { header: "المسؤول", accessorKey: "responsible", enableSearch: true },
  { header: "ملاحظات", accessorKey: "notes", enableSearch: true },
  { header: "تاريخ الإنشاء", accessorKey: "createdAt", enableSearch: false },
];
