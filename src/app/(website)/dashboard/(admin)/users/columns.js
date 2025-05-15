// Column definitions for users data table
export const userColumns = [
  { header: "اسم المستخدم", accessorKey: "userName", enableSearch: true },
  { header: "الاسم", accessorKey: "name", enableSearch: true },
  { header: "رقم الهاتف", accessorKey: "phoneNumber", enableSearch: true },
  {
    header: "الدور",
    accessorKey: "role",
    enableSearch: true,
    // Optional: Format roles for display
    // cell: ({ getValue }) => {
    //   const role = getValue();
    //   switch(role) {
    //     case "ADMIN": return "مدير";
    //     case "MANAGER": return "مشرف";
    //     case "USER": return "مستخدم";
    //     default: return role;
    //   }
    // }
  },
//   { header: "تاريخ الإنشاء", accessorKey: "createdAt", enableSearch: false },
];
