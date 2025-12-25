import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Andrew McDonald - Men's Coach | Pittsburgh",
  description: "Guiding men to their fullest masculine expression through breathwork, men's group, and 1-on-1 coaching in Pittsburgh.",
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
