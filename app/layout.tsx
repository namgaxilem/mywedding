import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nam & Hiền - Wedding",
  description: "Chúng tôi sắp kết hôn - 15 Tháng 3, 2026",
  keywords: ["wedding", "đám cưới", "Nam", "Hiền"],
  openGraph: {
    title: "Nam & Hiền - Wedding",
    description: "Chúng tôi sắp kết hôn - 15 Tháng 3, 2026",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Lato:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
