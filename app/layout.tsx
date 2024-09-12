import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WebsiteQuery",
  description: "Bot to answer your queries about any article",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className,"min-h-screen antialiased")}>
        <main className="dark h-screen text-foreground bg-background">
          {children}
        </main>
      </body>
    </html>
  );
}
