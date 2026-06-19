import type { Metadata } from "next";
import { WEDDING_CONFIG } from "@/lib/constants";
import { getInvitationById } from "../_utils";

interface LayoutProps {
  children: React.ReactNode;
  params: Promise<{ id: string }>;
}

const COUPLE = `${WEDDING_CONFIG.groom.shortName} & ${WEDDING_CONFIG.bride.shortName}`;

// Ảnh OG dùng chung (1200x630). Đường dẫn tương đối -> resolve theo metadataBase ở root layout.
const OG_IMAGE = {
  url: "/images/og-image.jpg",
  width: 1200,
  height: 630,
  alt: `Ảnh cưới ${COUPLE}`,
};

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const invitation = getInvitationById(id);

  if (!invitation) {
    return { title: "Thiệp mời không tồn tại" };
  }

  const guest = `${invitation.pronoun} ${invitation.name}`;
  const title = `Thiệp Mời ${guest} | ${COUPLE}`;
  const description = `Trân trọng kính mời ${guest} đến dự lễ cưới của ${COUPLE} - ${WEDDING_CONFIG.weddingDateDisplay}`;
  const url = `/invitation/${invitation.id}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      type: "website",
      url,
      siteName: `${COUPLE} Wedding`,
      locale: "vi_VN",
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [OG_IMAGE.url],
    },
  };
}

export default function InvitationDetailLayout({ children }: LayoutProps) {
  return <>{children}</>;
}
