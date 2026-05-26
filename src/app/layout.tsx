import type { Metadata } from "next";
import { Recursive } from "next/font/google";
import Image from "next/image";
import "./globals.css";

// Font setup
const recursive = Recursive({
  subsets: ["latin-ext"],
  variable: "--font-recursive",
});

export const metadata: Metadata = {
  title: "Góc Cá Xinh",
  description: "Góc Cá Xinh (GCX) là điểm thưởng dùng để đổi sẩn phẩm trong cửa hàng Góc Cá Xinh",
  icons: {
    icon: "/favicon/GCX.png?v=1",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={recursive.variable}>
      <head>
        {/* Favicon setup */}
        <link rel="icon" href="/favicon/GCX.png?v=1" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon/GCX.png?v=1" />
        <link
          rel="shortcut icon"
          href="/favicon/GCX.png"
          type="image/png"
        />
      </head>

      <body className="bg-gray-50 text-gray-800 flex flex-col min-h-screen">
        {/* HEADER */}
        <header className="p-4 flex justify-center gap-8 bg-white shadow-sm sticky top-0 z-50">
          <a
            href="/"
            className="flex items-center gap-2 text-blue-600 font-semibold hover:underline"
          >
            <Image
              src="/favicon/GCX.png"
              alt="Góc Cá Xinh Logo"
              width={28}
              height={28}
              className="rounded-full"
            />
            Góc Cá Xinh
          </a>

          <a
            href="/about"
            className="text-blue-600 font-semibold hover:underline"
          >
            About
          </a>
        </header>

        {/* MAIN CONTENT */}
        <main className="flex-grow">{children}</main>

        {/* FOOTER */}
        <footer className="text-center text-gray-500 py-6 border-t">
          © 2026 Góc Cá Xinh — Tích Điểm, Đổi Quà, Kết Nối Đam Mê 🐠
        </footer>
      </body>
    </html>
  );
}
