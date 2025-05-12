import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/UI/Sidebar/Sidebar";
import { SessionProvider } from "next-auth/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "لوحة التحكم",
  description: "لوحة التحكم",
};

export default function RootLayout({ children, session }) {
  return (
    <SessionProvider session={session}>
      <html lang="ar" dir="rtl">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <main className="min-h-screen flex items-center justify-center bg-gray-50">
            {children}
          </main>
        </body>
      </html>
    </SessionProvider>
  );
}
