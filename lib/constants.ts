// ============================================================
// Prewedding Images Configuration
// Place all images in: /public/images/prewedding/
// Change basePath below if you store them elsewhere
// ============================================================
export const PREWEDDING_CONFIG = {
  basePath: "/images/prewedding",

  // Hình bìa (cover / hero)
  coverImage: "FOOD8869.JPG",

  // Hình cổng
  gateImage: "FOOD9557.JPG",

  // Để bàn (table display)
  tableImages: [
    "FOOD8487.JPG",
    "FOOD1315.JPG",
    "FOOD3067.JPG",
    "FOOD0554.JPG",
    "FOOD9342.JPG",
  ],

  // 3 images used in the Story (Câu Chuyện) timeline — change freely
  storyImages: {
    firstMeet: "FOOD9557.JPG",
    firstDate: "FOOD8487.JPG",
    proposal: "FOOD1315.JPG",
  },

  // Full album of 40 prewedding photos
  album: [
    "FOOD0241.JPG",
    "FOOD0357.JPG",
    "FOOD0491.JPG",
    "FOOD0554.JPG",
    "FOOD0666.JPG",
    "FOOD1089.JPG",
    "FOOD1166.JPG",
    "FOOD1197.JPG",
    "FOOD1315.JPG",
    "FOOD1753.JPG",
    "FOOD1765.JPG",
    "FOOD1863.JPG",
    "FOOD1892.JPG",
    "FOOD1949.JPG",
    "FOOD2019.JPG",
    "FOOD2078.JPG",
    "FOOD2128.JPG",
    "FOOD2188.JPG",
    "FOOD2277.JPG",
    "FOOD2317.JPG",
    "FOOD2399.JPG",
    "FOOD2934.JPG",
    "FOOD2981.JPG",
    "FOOD3067.JPG",
    "FOOD3118.JPG",
    "FOOD3179.JPG",
    "FOOD8487.JPG",
    "FOOD8618.JPG",
    "FOOD8869.JPG",
    "FOOD8949.JPG",
    "FOOD9076.JPG",
    "FOOD9342.JPG",
    "FOOD9354.JPG",
    "FOOD9467.JPG",
    "FOOD9498.JPG",
    "FOOD9531.JPG",
    "FOOD9542.JPG",
    "FOOD9557.JPG",
    "FOOD9589.JPG",
    "FOOD9793.JPG",
  ],
};

// Helper: build full image src from a filename
export const preweddingImg = (filename: string): string =>
  `${PREWEDDING_CONFIG.basePath}/${filename}`;

export const WEDDING_CONFIG = {
  // Couple Information
  groom: {
    name: "Nguyễn Đức Nam",
    shortName: "Nam",
    role: "Chú Rể",
    image: "/images/prewedding/FOOD8618.JPG",
    description:
      "Một chàng trai yêu đời, luôn tìm thấy niềm vui trong những điều giản dị. Với quan điểm sống tích cực và luôn hết lòng vì gia đình, Nam tin rằng hạnh phúc đến từ sự chân thành và yêu thương.",
  },
  bride: {
    name: "Đặng Thị Mỹ Hiền",
    shortName: "Hiền",
    role: "Cô Dâu",
    image: "/images/prewedding/FOOD9076.JPG",
    description:
      "Một cô gái dịu dàng, tinh tế và đầy nhiệt huyết. Hiền luôn mang đến năng lượng tích cực cho những người xung quanh. Với trái tim ấm áp và tâm hồn lãng mạn, Hiền tin vào tình yêu đích thực.",
  },

  // Wedding Date
  weddingDate: "2026-07-05",
  weddingDateDisplay: "05 Tháng 7, 2026",

  // Hero Section
  hero: {
    backgroundImage: preweddingImg(PREWEDDING_CONFIG.coverImage),
    subtitle: "",
    location: "",
  },

  // Our Story Section
  story: {
    title: "Câu Chuyện Của Chúng Tôi",
    subtitle: "Hành trình tình yêu",
    items: [
      {
        id: 1,
        title: "Lần Đầu Gặp Gỡ",
        date: "Tháng 3, 2020",
        description:
          "Chúng tôi gặp nhau lần đầu tại một buổi họp mặt bạn bè. Ánh mắt đầu tiên đã khiến cả hai không thể quên được nhau.",
        image: preweddingImg(PREWEDDING_CONFIG.storyImages.firstMeet),
        position: "left" as const,
      },
      {
        id: 2,
        title: "Hẹn Hò Đầu Tiên",
        date: "Tháng 4, 2020",
        description:
          "Buổi hẹn hò đầu tiên tại quán cà phê nhỏ, nơi chúng tôi trò chuyện suốt nhiều giờ và nhận ra có rất nhiều điểm chung.",
        image: preweddingImg(PREWEDDING_CONFIG.storyImages.firstDate),
        position: "right" as const,
      },
      {
        id: 3,
        title: "Lời Cầu Hôn",
        date: "Tháng 12, 2025",
        description:
          "Dưới ánh hoàng hôn tuyệt đẹp, anh đã quỳ gối và cầu hôn em với chiếc nhẫn kim cương lấp lánh. Và em đã nói 'Có'!",
        image: preweddingImg(PREWEDDING_CONFIG.storyImages.proposal),
        position: "left" as const,
      },
    ],
  },

  // Gallery/Moments Section
  gallery: {
    title: "Khoảnh Khắc",
    subtitle: "Những kỷ niệm đẹp của chúng tôi",
    images: [
      { id: 1, src: "/images/gallery-1.jpg", alt: "Khoảnh khắc 1" },
      { id: 2, src: "/images/gallery-2.jpg", alt: "Khoảnh khắc 2" },
      { id: 3, src: "/images/gallery-3.jpg", alt: "Khoảnh khắc 3" },
      { id: 4, src: "/images/gallery-4.jpg", alt: "Khoảnh khắc 4" },
      { id: 5, src: "/images/gallery-5.jpg", alt: "Khoảnh khắc 5" },
      { id: 6, src: "/images/gallery-6.jpg", alt: "Khoảnh khắc 6" },
    ],
  },

  // Venue Section (Lễ Vu Quy & Lễ Tân Hôn)
  venue: {
    title: "Địa Điểm Lễ Cưới",
    subtitle: "Trân trọng kính mời quý khách đến dự",
    groomFamily: {
      title: "NHÀ TRAI",
      fatherName: "Ông Nguyễn Đức Dũng",
      motherName: "Bà Nguyễn Thị Lý",
      address: "Phường Bình Lợi Trung, Hồ Chí Minh",
      mapUrl: "https://maps.google.com/?q=1%2F49+Dang+Thuy+Tram+Binh+Loi+Trung+Thu+Duc",
    },
    brideFamily: {
      title: "NHÀ GÁI",
      fatherName: "Ông Đặng Ánh",
      motherName: "Bà Nguyễn Thị Hoa",
      address: "Thành phố Đà Lạt, Lâm Đồng",
      mapUrl: "https://maps.google.com/?q=Vuon+hoa+Cam+Tu+Cau+Da+Lat",
    },
  },

  // The Big Day Section
  events: {
    title: "Ngày Trọng Đại",
    subtitle: "Chúng tôi rất hân hạnh được đón tiếp quý khách",
    coupleImage: preweddingImg("FOOD8869.JPG"),
    ceremony: {
      title: "Tiệc Cưới Nhà Gái",
      date: "05 Tháng 7, 2026",
      time: "10:00 - 12:00",
      venue: "Tại Nhà Gái",
      address: "25/10 Phan Chu Trinh, Phường Lâm Viên, Đà Lạt, Lâm Đồng 670000, Vietnam",
      mapUrl: "https://maps.google.com/?q=25%2F10+Phan+Chu+Trinh%2C+L%C3%A2m+Vi%C3%AAn%2C+%C4%90%C3%A0+L%E1%BA%A1t%2C+L%C3%A2m+%C4%90%E1%BB%93ng",
    },
    reception: {
      title: "Tiệc Cưới Nhà Trai",
      date: "12 Tháng 7, 2026",
      time: "18:00 - 22:00",
      venue: "Trung Tâm Hội Nghị & Tiệc Cưới Pavillon Tân Sơn Nhất",
      address: "Trường Sơn, Phường 2, Tân Bình, TP.HCM, Vietnam",
      mapUrl: "https://maps.google.com/?q=Pavillon+Tan+Son+Nhat+Wedding+Hall",
    },
  },

  // Well Wishes / Gift Section
  wishes: {
    title: "Lời Chúc & Mừng Cưới",
    subtitle:
      "Sự hiện diện của quý khách là niềm vinh hạnh lớn nhất của chúng tôi. Nếu quý khách muốn gửi quà mừng, xin vui lòng sử dụng thông tin bên dưới.",
    bankAccounts: [
      {
        id: 1,
        title: "Mừng Cưới Chú Rể",
        bankName: "BIDV",
        accountNumber: "0868212741",
        accountHolder: "Nguyễn Đức Nam",
        qrCode: "/images/qr-groom.png",
      },
      {
        id: 2,
        title: "Mừng Cưới Cô Dâu",
        bankName: "BIDV",
        accountNumber: "8834834787",
        accountHolder: "Đặng Thị Mỹ Hiền",
        qrCode: "/images/qr-bride.png",
      },
    ],
  },

  // Footer
  footer: {
    message: "Cảm ơn bạn đã ghé thăm!",
    hashtag: "#NamHien2026",
  },

  // Navigation
  navigation: [
    { id: "calendar", label: "Lịch Cưới" },
    { id: "story", label: "Câu Chuyện" },
    { id: "gallery", label: "Khoảnh Khắc" },
    { id: "events", label: "Sự Kiện" },
    { id: "rsvp", label: "Xác Nhận" },
    { id: "wishes", label: "Lời Chúc" },
  ],
};

// Gallery Images — auto-generated from PREWEDDING_CONFIG.album
// To change which photos appear, edit the album array in PREWEDDING_CONFIG above
export const GALLERY_IMAGES = PREWEDDING_CONFIG.album.map((filename, index) => ({
  src: preweddingImg(filename),
  alt: `Ảnh cưới ${index + 1}`,
  width: 1200,
  height: 800,
}));

export type WeddingConfig = typeof WEDDING_CONFIG;
