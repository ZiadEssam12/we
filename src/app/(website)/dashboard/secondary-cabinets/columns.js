// Column definitions for secondary cabinets data table
export const secondaryCabinetColumns = [
  { header: "السنترال", accessorKey: "central", enableSearch: true },
  { header: "القرية", accessorKey: "village", enableSearch: true },
  { header: "بورت GBON", accessorKey: "port_gbon", enableSearch: true },
  { header: "الكبينة", accessorKey: "cabinet", enableSearch: true },
  {
    header: "رقم الاسبلتر",
    accessorKey: "splitter_number",
    enableSearch: true,
  },
  { header: "بورت الاسبلتر", accessorKey: "splitter_port", enableSearch: true },
  { header: "المسافة", accessorKey: "distance", enableSearch: false },
  { header: "رقم البوكس", accessorKey: "box_number", enableSearch: true },
  {
    header: "موقع الكبينة",
    accessorKey: "cabinet_location",
    enableSearch: true,
  },
  { header: "موقع البوكس", accessorKey: "box_location", enableSearch: true },
  {
    header: "المسافة من الكبينة إلى البوكس",
    accessorKey: "cabinet_to_box_distance",
    enableSearch: false,
  },
  { header: "المسؤول", accessorKey: "responsible", enableSearch: true },
  { header: "ملاحظات", accessorKey: "notes", enableSearch: true },
  { header: "تاريخ الإنشاء", accessorKey: "createdAt", enableSearch: false },
];
