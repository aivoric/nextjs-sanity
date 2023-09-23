import "@/app/globals.css";
import { getPages } from "@/sanity/sanity-utils";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ivan's Website",
  description: "Generated by Next + Sanity",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // get all our pages
  const pages = await getPages();
  console.log(pages);

  return (
    <html lang="en">
      <body className="max-w-5xl mx-auto py-10">
        <header className="flex items-center justify-between">
          <Link
            href="/"
            className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent text-lg font-bold"
          >
            {" "}
            Ivan{" "}
          </Link>
          <div className="flex items-center text-sm text-gray-600 gap-5">
            {pages.map((page) => (
              <Link
                href={`/${page.slug}`}
                key={page._id}
                className="hover:underline"
              >
                {page.title}
              </Link>
            ))}
          </div>
        </header>
        <main className="py-20">{children}</main>
      </body>
    </html>
  );
}