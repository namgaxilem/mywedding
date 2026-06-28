export type InvitationPlace = "groom" | "bride";

// Loại lễ trong câu "ĐẾN DỰ LỄ ... CỦA ..."
//  - vu-quy: nhà gái | tan-hon: nhà trai | thanh-hon: chung (mặc định)
export type CeremonyType = "thanh-hon" | "vu-quy" | "tan-hon";

// Người đứng ra mời -> quyết định phần "CỦA ..."
//  - couple: cô dâu chú rể tự mời -> "CỦA CHÚNG TÔI"
//  - family: ba mẹ mời thay con   -> "CỦA CON CHÚNG TÔI"
export type InviteHost = "couple" | "family";

export interface Invitation {
  id: string;
  name: string;
  pronoun: string; // Bạn, Anh, Em, ... (có thể chỉnh sửa theo từng khách)
  place: InvitationPlace[];
  additionalInfo?: string;
  ceremony?: CeremonyType; // override; mặc định suy từ `place`
  host?: InviteHost; // override; mặc định "couple"
}

export const INVITATIONS: Invitation[] = [
  {
    id: "gd-chi-phuong-cuong",
    name: "Anh Chị Phương Cường",
    pronoun: "Gia đình",
    place: ["groom"],
  },
  {
    id: "chi-hoai-linh",
    name: "Linh",
    pronoun: "Chị",
    place: ["groom"],
  },
  {
    id: "em-duc-tai",
    name: "Tài",
    pronoun: "Em",
    place: ["groom"],
  },
  {
    id: "em-van-nhuan",
    name: "Nhuận",
    pronoun: "Em",
    place: ["groom"],
  },

  {
    id: "nghia-phuong",
    name: "Hiếu Nghĩa - Thúy Phượng",
    pronoun: "2 Vợ Chồng Bạn",
    place: ["groom"],
  },
  { id: "thuy-tien", name: "Thủy Tiên", pronoun: "Bạn", place: ["groom"] },
  { id: "bon-nguyen", name: "Bon Nguyễn", pronoun: "Bạn", place: ["groom"] },
  {
    id: "tuong-vy-trung-thanh",
    name: "Tường Vy - Trung Thành",
    pronoun: "2 Vợ Chồng Bạn",
    place: ["groom"],
  },
  {
    id: "hoai-duc-ly-anh",
    name: "Hoài Đức - Ly Anh",
    pronoun: "2 Vợ chồng Bạn",
    place: ["groom"],
  },
  { id: "minh-ben", name: "Minh Ben", pronoun: "Bạn", place: ["groom"] },
  { id: "minh-thuy", name: "Minh Thúy", pronoun: "Bạn", place: ["groom"] },
  { id: "phuc-an", name: "Phúc Ân", pronoun: "Bạn", place: ["groom"] },

  { id: "thien-luan", name: "Thiên Luân", pronoun: "Bạn", place: ["groom"] },
  { id: "son-lam", name: "Sơn Lâm", pronoun: "Bạn", place: ["groom"] },
  {
    id: "dao-huyen-thanh-phuong",
    name: "Đào Huyền Thanh Phương",
    pronoun: "Bạn",
    place: ["groom"],
  },
  {
    id: "thuc-anh",
    name: "Thục Anh",
    pronoun: "Bạn",
    place: ["groom"],
  },
  {
    id: "hoang-anh",
    name: "Hoàng Anh",
    pronoun: "Bạn",
    place: ["groom"],
  },
  {
    id: "ngoc-thanh",
    name: "Ngọc Thành",
    pronoun: "Bạn",
    place: ["groom"],
  },

  { id: "hoang-phuc", name: "Phúc", pronoun: "Bạn", place: ["groom"] },
  { id: "khanh-duy", name: "Duy", pronoun: "Bạn", place: ["groom"] },
  { id: "thanh-phong", name: "Phong", pronoun: "Bạn", place: ["groom"] },
  { id: "lu-minh-hoang", name: "Hoàng", pronoun: "Bạn", place: ["groom"] },
  { id: "khoa-acoustic", name: "Khoa", pronoun: "Bạn", place: ["groom"] },

  { id: "cong-minh", name: "Minh", pronoun: "Bạn", place: ["groom"] },
  { id: "tu-huy", name: "Huy", pronoun: "Bạn", place: ["groom"] },
  { id: "phuc-dat", name: "Đạt", pronoun: "Bạn", place: ["groom"] },

  { id: "dang-phuong", name: "Đẳng - Phương", pronoun: "Gia đình bạn", place: ["groom"] },
  { id: "trung-nam", name: "Nam - Nga", pronoun: "Gia đình bạn", place: ["groom"] },

  { id: "thanh-tri", name: "Thành Trí", pronoun: "Bạn", place: ["groom"] },
  { id: "bao", name: "Bảo", pronoun: "Bạn", place: ["groom"] },
  { id: "hung", name: "Hưng", pronoun: "Bạn", place: ["groom"] },
  { id: "van", name: "Văn", pronoun: "Bạn", place: ["groom"] },
  { id: "e-duy-doto", name: "Duy", pronoun: "Em", place: ["groom"] },

  { id: "tuyen", name: "Tuyên", pronoun: "Bạn", place: ["groom"] },
  { id: "nhan", name: "Nhân", pronoun: "Em", place: ["groom"] },
  { id: "tu", name: "Tú", pronoun: "Em", place: ["groom"] },
  { id: "huy", name: "Huy", pronoun: "Em", place: ["groom"] },
  { id: "dat-duong", name: "Đạt Dương", pronoun: "Em", place: ["groom"] },
  { id: "anh-cuc", name: "Cúc", pronoun: "Gia đình Anh", place: ["groom"] },
  { id: "lam", name: "Lâm", pronoun: "Em", place: ["groom"] },
  { id: "thu", name: "Thư", pronoun: "Em", place: ["groom"] },
  { id: "anh-truong", name: "Trường", pronoun: "Anh", place: ["groom"] },
  { id: "anh-tan-chu", name: "Tân", pronoun: "Anh", place: ["groom"] },

  { id: "anh-tri", name: "Tri", pronoun: "Gia đình Anh", place: ["groom"] },
  { id: "phu-quy", name: "Quý", pronoun: "Bạn", place: ["groom"] },
  { id: "khai", name: "Khải", pronoun: "Bạn", place: ["groom"] },
  { id: "duy", name: "Duy", pronoun: "Bạn", place: ["groom"] },

  { id: "thao-vy", name: "Thảo Vy", pronoun: "Bạn", place: ["bride"] },
  { id: "cu-cu", name: "Cu Cu", pronoun: "Bạn", place: ["bride"] },
  { id: "my-duyen", name: "Mỹ Duyên", pronoun: "Bạn", place: ["bride"] },
  { id: "van-hieu", name: "Văn Hiếu", pronoun: "Bạn", place: ["bride"] },

  { id: "fong-choy", name: "Thanh Phong", pronoun: "Em", place: ["bride"] },

  // Nha gai
  {
    id: "anh-chi-nhuong-thao",
    name: "Nhường Thảo",
    pronoun: "Anh Chị",
    place: ["bride"],
    host: "family",
  },
  {
    id: "gia-dinh-chau-binh-nguyen",
    name: "Cháu Bình Nguyên",
    pronoun: "Gia đình",
    place: ["bride"],
    host: "family",
  },
  { id: "anh-hung-ha-noi", name: "Hùng", pronoun: "Gia đình Anh", place: ["groom"] },
  { id: "long-ha-noi", name: "Long", pronoun: "Bạn", place: ["groom"] },
  { id: "tho-ha-noi", name: "Thơ", pronoun: "Em", place: ["groom"] },
  { id: "minh-ha-noi", name: "Minh", pronoun: "Em", place: ["groom"] },
  { id: "duc-ha-noi", name: "Đức", pronoun: "Em", place: ["groom"] },
  { id: "anh-thang-ha-noi", name: "Thắng", pronoun: "Gia đình Anh", place: ["groom"] },

  // Nha gai - moi them
  { id: "vc-quyen", name: "Quyên", pronoun: "Vợ chồng Em", place: ["bride"] },
  { id: "uyen-tem", name: "Uyên (Tẻm)", pronoun: "Em", place: ["bride"] },
  { id: "thien-bo", name: "Thiện (Bô)", pronoun: "Em", place: ["bride"] },
  { id: "vc-tue", name: "Tuệ", pronoun: "Vợ chồng Em", place: ["bride"] },
  { id: "ng-tan", name: "Tân", pronoun: "Em", place: ["bride"] },
  { id: "tinh-diem", name: "Anh Tình Chị Diễm", pronoun: "Gia đình", place: ["bride"] },
  { id: "loc-linh", name: "Anh Lộc Chị Linh", pronoun: "Gia đình", place: ["bride"] },
  { id: "phuoc-van", name: "Anh Phước Chị Vân", pronoun: "Gia đình", place: ["bride"] },
  { id: "vu-thu", name: "Anh Vũ Chị Thư", pronoun: "Gia đình", place: ["bride"] },
  { id: "luong-quy", name: "Anh Lương Chị Quý", pronoun: "Gia đình", place: ["bride"] },
  { id: "vuong-linh", name: "Anh Vương Chị Linh", pronoun: "Gia đình", place: ["bride"] },
  { id: "huy-tuyet", name: "Anh Huy Chị Tuyết", pronoun: "Gia đình", place: ["bride"] },
  { id: "ng-kiet", name: "Kiệt", pronoun: "Em", place: ["bride"] },
  { id: "an-han", name: "Anh An Chị Hân", pronoun: "Gia đình", place: ["bride"] },
  { id: "ng-son", name: "Sơn", pronoun: "Em", place: ["bride"] },
  { id: "anh-long", name: "Long", pronoun: "Anh", place: ["bride"] },
];

export function getInvitationById(id: string): Invitation | undefined {
  return INVITATIONS.find((inv) => inv.id === id);
}

const CEREMONY_LABEL: Record<CeremonyType, string> = {
  "thanh-hon": "LỄ THÀNH HÔN",
  "vu-quy": "LỄ VU QUY",
  "tan-hon": "LỄ TÂN HÔN",
};

const HOST_POSSESSIVE: Record<InviteHost, string> = {
  couple: "CỦA CHÚNG TÔI",
  family: "CỦA CON CHÚNG TÔI",
};

// Suy ra loại lễ: chỉ nhà gái -> vu quy, còn lại -> thành hôn (trừ khi override `ceremony`)
export function getCeremonyType(inv: Invitation): CeremonyType {
  if (inv.ceremony) return inv.ceremony;
  if (inv.place.length === 1 && inv.place[0] === "bride") return "vu-quy";
  return "thanh-hon";
}

// 2 phần để render: "ĐẾN DỰ {ceremonyLabel} {possessive}"
export function getInviteLine(inv: Invitation): {
  ceremonyLabel: string;
  possessive: string;
} {
  return {
    ceremonyLabel: CEREMONY_LABEL[getCeremonyType(inv)],
    possessive: HOST_POSSESSIVE[inv.host ?? "couple"],
  };
}
