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

  { id: "thien-luan", name: "Thiên Luân", pronoun: "Bạn", place: ["groom"] },
  { id: "son-lam", name: "Sơn Lâm", pronoun: "Bạn", place: ["groom"] },

  { id: "tuyen", name: "Tuyên", pronoun: "Bạn", place: ["groom"] },
  { id: "nhan", name: "Nhân", pronoun: "Em", place: ["groom"] },
  { id: "tu", name: "Tú", pronoun: "Em", place: ["groom"] },
  { id: "huy", name: "Huy", pronoun: "Em", place: ["groom"] },
  { id: "dat-duong", name: "Đạt Dương", pronoun: "Em", place: ["groom"] },
  { id: "cuc", name: "Cúc", pronoun: "Anh", place: ["groom"] },
  { id: "lam", name: "Lâm", pronoun: "Em", place: ["groom"] },
  { id: "thu", name: "Thư", pronoun: "Em", place: ["groom"] },
  { id: "truong", name: "Trường", pronoun: "Anh", place: ["groom"] },

  { id: "phong", name: "Phong", pronoun: "Bạn", place: ["groom"] },
  { id: "hoang", name: "Hoàng", pronoun: "Bạn", place: ["groom"] },
  { id: "thanh-tri", name: "Thành Trí", pronoun: "Bạn", place: ["groom"] },
  { id: "bao", name: "Bảo", pronoun: "Bạn", place: ["groom"] },
  { id: "hung", name: "Hưng", pronoun: "Bạn", place: ["groom"] },
  { id: "van", name: "Văn", pronoun: "Bạn", place: ["groom"] },

  { id: "a-tri", name: "Tri", pronoun: "Anh", place: ["groom"] },
  { id: "khai", name: "Khải", pronoun: "Bạn", place: ["groom"] },
  { id: "duy", name: "Duy", pronoun: "Bạn", place: ["groom"] },
];

export function getInvitationById(id: string): Invitation | undefined {
  return INVITATIONS.find((inv) => inv.id === id);
}
