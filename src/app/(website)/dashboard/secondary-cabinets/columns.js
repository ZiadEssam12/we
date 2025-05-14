// Column definitions for secondary cabinets data table
export const secondaryCabinetColumns = [
  { Header: "السنترال", accessorKey: "central", enableSearch: true },
  { Header: "القرية", accessorKey: "village", enableSearch: true },
  { Header: "منفذ GBON", accessorKey: "port_gbon", enableSearch: true },
  { Header: "الكبينة", accessorKey: "cabinet", enableSearch: true },
  {
    Header: "رقم السبليتر",
    accessorKey: "splitter_number",
    enableSearch: true,
  },
  { Header: "منفذ السبليتر", accessorKey: "splitter_port", enableSearch: true },
  { Header: "المسافة", accessorKey: "distance", enableSearch: false },
  { Header: "رقم الصندوق", accessorKey: "box_number", enableSearch: true },
  {
    Header: "موقع الكبينة",
    accessorKey: "cabinet_location",
    enableSearch: true,
  },
  { Header: "موقع الصندوق", accessorKey: "box_location", enableSearch: true },
  {
    Header: "المسافة من الكبينة إلى الصندوق",
    accessorKey: "cabinet_to_box_distance",
    enableSearch: false,
  },
  { Header: "المسؤول", accessorKey: "responsible", enableSearch: true },
  { Header: "تاريخ الإنشاء", accessorKey: "createdAt", enableSearch: false },
];
