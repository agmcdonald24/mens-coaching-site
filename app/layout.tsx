import type { Metadata } from "next";
import Script from "next/script";
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
      <head>
        <link rel="icon" href="/images/crown1.png" type="image/png" />
      </head>
      <body>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-LS7MXY2DBZ"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-LS7MXY2DBZ');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
