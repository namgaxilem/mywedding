import type { Metadata } from "next";
import { WEDDING_CONFIG } from "@/lib/constants";
import { getInvitationById } from "../_utils";

interface LayoutProps {
  children: React.ReactNode;
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const invitation = getInvitationById(id);

  if (!invitation) {
    return {
      title: "Thiệp mời không tồn tại",
    };
  }

  const title = `Thiệp Mời ${invitation.pronoun} ${invitation.name} | ${WEDDING_CONFIG.groom.shortName} & ${WEDDING_CONFIG.bride.shortName}`;
  const description = `Kính mời ${invitation.pronoun} ${invitation.name} dự lễ cưới ${WEDDING_CONFIG.groom.shortName} & ${WEDDING_CONFIG.bride.shortName} - ${WEDDING_CONFIG.weddingDateDisplay}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      locale: "vi_VN",
    },
  };
}

export default function InvitationDetailLayout({ children }: LayoutProps) {
  return <>{children}</>;
}
