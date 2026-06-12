export type InvitationPlace = "groom" | "bride";

export interface Invitation {
  id: string;
  name: string;
  pronoun: string; // Bạn, Anh, Em, ... (có thể chỉnh sửa theo từng khách)
  place: InvitationPlace[];
  additionalInfo?: string;
}

export const INVITATIONS: Invitation[] = [
  { id: "nghia-phuong", name: "Hiếu Nghĩa - Thúy Phượng", pronoun: "2 Vợ Chồng Bạn", place: ["groom"] },
  { id: "thuy-tien", name: "Thủy Tiên", pronoun: "Bạn", place: ["groom"] },
  { id: "bon-nguyen", name: "Bon Nguyễn", pronoun: "Bạn", place: ["groom"] },
  { id: "tuong-vy-trung-thanh", name: "Tường Vy - Trung Thành", pronoun: "2 Vợ Chồng Bạn", place: ["groom"] },
  { id: "hoai-duc-ly-anh", name: "Hoài Đức - Ly Anh", pronoun: "2 Vợ chồng Bạn", place: ["groom"] },
  { id: "minh-ben", name: "Minh Ben", pronoun: "Bạn", place: ["groom"] },
  { id: "minh-thuy", name: "Minh Thúy", pronoun: "Bạn", place: ["groom"] },
  { id: "phuc-an", name: "Phúc Ân", pronoun: "Bạn", place: ["groom"] },
];

export function getInvitationById(id: string): Invitation | undefined {
  return INVITATIONS.find((inv) => inv.id === id);
}
