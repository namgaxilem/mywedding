import type { Metadata } from "next";
import "./globals.css";
import { WEDDING_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  metadataBase: new URL("https://ducnammyhien.vercel.app"),
  title: "Đức Nam 💝 Mỹ Hiền",
  description: `Trân trọng kính mời bạn đến dự lễ cưới của ${WEDDING_CONFIG.groom.shortName} & ${WEDDING_CONFIG.bride.shortName} vào ngày ${WEDDING_CONFIG.weddingDateDisplay}. Hãy cùng chúng tôi chia sẻ niềm hạnh phúc trong ngày trọng đại này! 💒💍`,
  keywords: ["wedding", "đám cưới", WEDDING_CONFIG.groom.shortName, WEDDING_CONFIG.bride.shortName],
  openGraph: {
    title: `💝 ${WEDDING_CONFIG.groom.shortName} & ${WEDDING_CONFIG.bride.shortName} - Save The Date`,
    description: `Trân trọng kính mời bạn đến dự lễ cưới của chúng tôi vào ngày ${WEDDING_CONFIG.weddingDateDisplay}. Sự hiện diện của bạn là niềm vinh hạnh lớn nhất! 💍✨`,
    type: "website",
    url: "https://ducnammyhien.vercel.app",
    siteName: `${WEDDING_CONFIG.groom.shortName} & ${WEDDING_CONFIG.bride.shortName} Wedding`,
    locale: "vi_VN",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `Ảnh cưới ${WEDDING_CONFIG.groom.shortName} & ${WEDDING_CONFIG.bride.shortName}`,
      },
    ],
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
