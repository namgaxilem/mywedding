import type { Metadata } from "next";
import "./globals.css";
import { WEDDING_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  metadataBase: new URL("https://ducnammyhien.vercel.app"),
  title: `Thiệp Cưới ${WEDDING_CONFIG.groom.shortName} & ${WEDDING_CONFIG.bride.shortName} | ${WEDDING_CONFIG.weddingDateDisplay}`,
  description: `Kính mời bạn dự lễ cưới ${WEDDING_CONFIG.groom.shortName} & ${WEDDING_CONFIG.bride.shortName} - ${WEDDING_CONFIG.weddingDateDisplay}`,
  keywords: ["wedding", "đám cưới", WEDDING_CONFIG.groom.shortName, WEDDING_CONFIG.bride.shortName],
  openGraph: {
    title: `Thiệp Cưới ${WEDDING_CONFIG.groom.shortName} & ${WEDDING_CONFIG.bride.shortName} | ${WEDDING_CONFIG.weddingDateDisplay}`,
    description: `Kính mời bạn dự lễ cưới ${WEDDING_CONFIG.groom.shortName} & ${WEDDING_CONFIG.bride.shortName} - ${WEDDING_CONFIG.weddingDateDisplay}`,
    type: "website",
    url: "https://ducnammyhien.vercel.app",
    siteName: `${WEDDING_CONFIG.groom.shortName} & ${WEDDING_CONFIG.bride.shortName} Wedding`,
    locale: "vi_VN",
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
