// Column definitions for major cabinets data table
export const majorCabinetColumns = [
  { header: "السنترال", accessorKey: "central", enableSearch: true },
  { header: "القرية", accessorKey: "village", enableSearch: true },
  { header: "رقم الكبينة", accessorKey: "cabinet", enableSearch: true },
  {
    header: "المسافة من السنترال",
    accessorKey: "central_to_cabinet_distance",
    enableSearch: false,
  },
  {
    header: "عدد اللحامات",
    accessorKey: "number_of_joints",
    enableSearch: false,
  },
  {
    header: "موقع اللحام",
    accessorKey: "joint_location",
    enableSearch: true,
  },
  { header: "موقع الغرف", accessorKey: "room_location", enableSearch: true },
  { header: "الاستحقاق", accessorKey: "entitlement", enableSearch: true },
  { header: "المسافة", accessorKey: "distance", enableSearch: false },
  { header: "المسؤول", accessorKey: "responsible", enableSearch: true },
  { header: "تاريخ الإنشاء", accessorKey: "createdAt", enableSearch: false },
];
