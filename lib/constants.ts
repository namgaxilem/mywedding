// ============================================================
// Prewedding Images Configuration
// Place all images in: /public/images/prewedding/
// Change basePath below if you store them elsewhere
// ============================================================
export const PREWEDDING_CONFIG = {
  basePath: "/images/prewedding",

  // Hình bìa (cover / hero)
  coverImage: "FOOD9467.webp",

  // Hình cổng
  gateImage: "FOOD9557.webp",

  // Để bàn (table display)
  tableImages: [
    "FOOD8487.webp",
    "FOOD1315.webp",
    "FOOD3067.webp",
    "FOOD0554.webp",
    "FOOD9342.webp",
  ],

  // 3 images used in the Story (Câu Chuyện) timeline — change freely
  storyImages: {
    firstMeet: "FOOD9557.webp",
    firstDate: "FOOD8487.webp",
    proposal: "FOOD1315.webp",
  },

  // Full album of 40 prewedding photos
  album: [
    "FOOD0241.webp",
    "FOOD0357.webp",
    "FOOD0491.webp",
    "FOOD0554.webp",
    "FOOD0666.webp",
    "FOOD1089.webp",
    "FOOD1166.webp",
    "FOOD1197.webp",
    "FOOD1315.webp",
    "FOOD1753.webp",
    "FOOD1765.webp",
    "FOOD1863.webp",
    "FOOD1892.webp",
    "FOOD1949.webp",
    "FOOD2019.webp",
    "FOOD2078.webp",
    "FOOD2128.webp",
    "FOOD2188.webp",
    "FOOD2277.webp",
    "FOOD2317.webp",
    "FOOD2399.webp",
    "FOOD2934.webp",
    "FOOD2981.webp",
    "FOOD3067.webp",
    "FOOD3118.webp",
    "FOOD3179.webp",
    "FOOD8487.webp",
    "FOOD8618.webp",
    "FOOD8869.webp",
    "FOOD8949.webp",
    "FOOD9076.webp",
    "FOOD9342.webp",
    "FOOD9354.webp",
    "FOOD9467.webp",
    "FOOD9498.webp",
    "FOOD9531.webp",
    "FOOD9542.webp",
    "FOOD9557.webp",
    "FOOD9589.webp",
    "FOOD9793.webp",
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
    image: "/images/prewedding/FOOD9793.webp",
    description:
      "Một chàng trai yêu đời, luôn tìm thấy niềm vui trong những điều giản dị. Với quan điểm sống tích cực và luôn hết lòng vì gia đình, Nam tin rằng hạnh phúc đến từ sự chân thành và yêu thương.",
  },
  bride: {
    name: "Đặng Thị Mỹ Hiền",
    shortName: "Hiền",
    role: "Cô Dâu",
    image: "/images/prewedding/FOOD8487.webp",
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
    title: "Chuyện Chúng Mình",
    subtitle: "Hành trình tình yêu",
    narrative:
      "Chúng mình quen nhau từ những năm tháng đại học. Khi ấy, ấn tượng về nhau chỉ đơn giản là một chàng trai hiền lành, tri thức, đặc biệt là biết chơi guitar và một cô gái vui vẻ, hoạt bát.\n\nSau khi ra trường, mỗi người đều có những hành trình và ngã rẽ riêng. Tưởng chừng chỉ là những người bạn cũ từng lướt qua cuộc đời nhau, nhưng duyên số đã cho chúng mình cơ hội gặp lại vào một thời điểm đặc biệt hơn.\n\nTừ những buổi cà phê, những câu chuyện không hồi kết và những tiếng cười giản dị, tình cảm giữa hai đứa dần lớn lên. Cùng nhau trải qua những khó khăn, thử thách của cuộc sống, chúng mình càng trân trọng sự đồng hành của đối phương và hiểu rằng đã tìm được người muốn gắn bó suốt cuộc đời.\n\nVà hôm nay, với sự yêu thương và chúc phúc của gia đình, bạn bè, chúng mình hạnh phúc thông báo rằng: chúng mình sẽ về chung một nhà.",
    collageImages: [
      preweddingImg(PREWEDDING_CONFIG.storyImages.firstMeet),
      preweddingImg(PREWEDDING_CONFIG.storyImages.firstDate),
      preweddingImg(PREWEDDING_CONFIG.storyImages.proposal),
    ],
  },

  // Gallery/Moments Section
  gallery: {
    title: "Khoảnh Khắc",
    subtitle: "Những kỷ niệm đẹp của chúng tôi",
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
      motherName: "Bà Huỳnh Thị Hoa",
      address: "Thành phố Đà Lạt, Lâm Đồng",
      mapUrl: "https://maps.google.com/?q=Vuon+hoa+Cam+Tu+Cau+Da+Lat",
    },
  },

  // The Big Day Section
  events: {
    title: "Ngày Trọng Đại",
    subtitle: "Chúng tôi rất hân hạnh được đón tiếp quý khách",
    backgroundImage: preweddingImg("FOOD2277.webp"),
    coupleImage: preweddingImg("FOOD1166.webp"),
    ceremony: {
      title: "Tiệc Cưới Nhà Gái",
      date: "05 Tháng 7, 2026",
      time: "11:00 - 14:00", // đón khách 11h, nhập tiệc 12h
      venue: "Nhà hàng Song Hỷ (Mỹ Đình cũ)",
      address: "Đa Lộc, Phường Xuân Trường, Đà Lạt, Lâm Đồng",
      mapUrl: "https://maps.app.goo.gl/AhMKV7m7an8hovA8A",
    },
    reception: {
      title: "Tiệc Cưới Nhà Trai",
      date: "12 Tháng 7, 2026",
      time: "18:00 - 22:00",
      venue: "Sảnh Amber (Tầng 4) - Trung Tâm Hội Nghị & Tiệc Cưới Pavillon Tân Sơn Nhất",
      address: "202 Đ. Hoàng Văn Thụ, Đức Nhuận, Hồ Chí Minh",
      mapUrl: "https://maps.google.com/?q=Pavillon+Tan+Son+Nhat+Wedding+Hall",
    },
    // Hôn lễ tại tư gia: Lễ Thành Hôn (nhà trai) / Lễ Vu Quy (nhà gái)
    homeCeremony: {
      groom: {
        label: "Lễ Thành Hôn",
        date: "12 Tháng 7, 2026",
        lunarDate: "Nhằm ngày 28 tháng 5 năm Bính Ngọ (Âm lịch)",
        time: "10:00 - 11:00",
        venue: "Tư Gia Nhà Trai",
        address: "1/49 Đặng Thùy Trâm, Phường Bình Lợi Trung, TP.HCM",
        mapUrl: "https://maps.google.com/?q=1%2F49+Dang+Thuy+Tram+Binh+Loi+Trung+Thu+Duc",
      },
      bride: {
        label: "Lễ Vu Quy",
        date: "05 Tháng 7, 2026",
        lunarDate: "Nhằm ngày 21 tháng 5 năm Bính Ngọ (Âm lịch)",
        time: "07:00 - 09:00",
        venue: "Tư Gia Nhà Gái",
        address: "Tổ 1, TDP Lộc Quý, Phường Xuân Trường, Đà Lạt, Lâm Đồng",
        mapUrl: "https://maps.google.com/?q=To+1+Loc+Quy+Xuan+Truong+Da+Lat+Lam+Dong",
      },
    },
    // Timeline tiệc theo từng nhà (đón khách -> tiễn khách)
    timeline: {
      groom: [
        { time: "18:00", title: "Đón Khách" },
        { time: "18:30", title: "Chụp Ảnh" },
        { time: "19:00", title: "Khai Tiệc" },
        { time: "21:30", title: "Tiễn Khách" },
      ],
      bride: [
        { time: "11:00", title: "Đón Khách" },
        { time: "11:30", title: "Chụp Ảnh" },
        { time: "12:00", title: "Khai Tiệc" },
        { time: "14:00", title: "Tiễn Khách" },
      ],
    },
  },

  // Guest Wishes Section
  guestWishes: {
    backgroundImage: preweddingImg("FOOD0666.webp"),
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
    image: preweddingImg("FOOD9531.webp"),
  },

  // Navigation
  navigation: [
    { id: "story", label: "Câu Chuyện" },
    { id: "gallery", label: "Khoảnh Khắc" },
    { id: "events", label: "Sự Kiện" },
    { id: "wishes", label: "Lời Chúc" },
  ],
};

// Gallery Images — curated selection of 6 images for "Khoảnh Khắc" section
export const GALLERY_IMAGES = [
  { src: preweddingImg("FOOD0357.webp"), alt: "Ảnh cưới 1", width: 1200, height: 1800 },
  { src: preweddingImg("FOOD1315.webp"), alt: "Ảnh cưới 2", width: 1200, height: 1800 },
  { src: preweddingImg("FOOD8487.webp"), alt: "Ảnh cưới 3", width: 1200, height: 1800 },
  { src: preweddingImg("FOOD2277.webp"), alt: "Ảnh cưới 4", width: 1200, height: 1800 },
  { src: preweddingImg("FOOD0554.webp"), alt: "Ảnh cưới 5", width: 1200, height: 1800 },
  { src: preweddingImg("FOOD1166.webp"), alt: "Ảnh cưới 6", width: 1200, height: 1800 },
];

export type WeddingConfig = typeof WEDDING_CONFIG;
