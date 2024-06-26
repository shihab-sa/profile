import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { BreadcrumbDemo } from "@/components/BreadcrumbDemo";
import Sidebar from "@/components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* header and navbar  */}
        <BreadcrumbDemo />

        <div className="flex ml-10 mr-10">
          <div className="w-[15%] ">
            <Sidebar />
          </div>
          <div className=" w-[90%] mt-10 ml-10 bg-sidebarbgcolor rounded-2xl">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
