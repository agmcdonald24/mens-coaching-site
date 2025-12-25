import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Men's Work & Coaching",
  description: "Transform your life through men's work and 1:1 coaching",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
