import { auth } from "@/app/auth";
import { MdWavingHand } from "react-icons/md";

export default async function Page() {
  const session = await auth();

  return (
    <div className="h-screen overflow-hidden flex items-center justify-center">
      <div className="text-center max-w-3xl px-4">
        <div className="inline-flex items-start justify-center gap-3 mb-4">
          <MdWavingHand
            className="text-amber-500 animate-pulse mt-3"
            size={36}
            aria-hidden="true"
          />
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-l from-blue-600 to-purple-600 text-transparent bg-clip-text animate-gradient-text leading-tight">
            أهلا بك في لوحة التحكم
          </h1>
        </div>
        {/* Subtitle */}
        <p className="text-lg md:text-xl text-gray-600">
          نظام إدارة الكابينات والأبراج المتكامل لشركة الاتصالات المصرية
        </p>
      </div>
    </div>
  );
}
