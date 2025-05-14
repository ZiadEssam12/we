// Column definitions for major cabinets data table
export const majorCabinetColumns = [
  { Header: "السنترال", accessorKey: "central", enableSearch: true },
  { Header: "القرية", accessorKey: "village", enableSearch: true },
  { Header: "رقم الكبينة", accessorKey: "cabinet", enableSearch: true },
  {
    Header: "المسافة من السنترال",
    accessorKey: "central_to_cabinet_distance",
    enableSearch: false,
  },
  {
    Header: "عدد اللحامات",
    accessorKey: "number_of_joints",
    enableSearch: false,
  },
  {
    Header: "موقع اللحام",
    accessorKey: "joint_location",
    enableSearch: true,
  },
  { Header: "موقع الغرف", accessorKey: "room_location", enableSearch: true },
  { Header: "الاستحقاق", accessorKey: "entitlement", enableSearch: true },
  { Header: "المسافة", accessorKey: "distance", enableSearch: false },
  { Header: "المسؤول", accessorKey: "responsible", enableSearch: true },
  { Header: "تاريخ الإنشاء", accessorKey: "createdAt", enableSearch: false },
];
