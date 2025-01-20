import type { Metadata } from "next";
import "./globals.css";
import { Sider } from "./components/sider/Sider";
import { Search } from "./components/search/Search";
import { Play } from "./components/play/Play";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Project 5",
  description: "Website nghe nhạc trực tuyến",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className="bg-[#292929]">
        <div className="container mx-auto">
          <div className="flex items-start">
            <div className="w-[280px]">
              <Sider />
            </div>
            <div className="ml-[20px] flex-1">
              <Suspense>
                <Search />
              </Suspense>
              <main className="mt-[30px] mb-[150px]">
                {children}
              </main>
            </div>
          </div>
        </div>
        <Play />
      </body>
    </html>
  );
}
