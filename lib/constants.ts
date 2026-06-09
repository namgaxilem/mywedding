// ============================================================
// Prewedding Images Configuration
// Place all images in: /public/images/prewedding/
// Change basePath below if you store them elsewhere
// ============================================================
export const PREWEDDING_CONFIG = {
  basePath: "/images/prewedding",

  // Hình bìa (cover / hero)
  coverImage: "FOOD9467.jpg",

  // Hình cổng
  gateImage: "FOOD9557.jpg",

  // Để bàn (table display)
  tableImages: [
    "FOOD8487.jpg",
    "FOOD1315.jpg",
    "FOOD3067.jpg",
    "FOOD0554.jpg",
    "FOOD9342.jpg",
  ],

  // 3 images used in the Story (Câu Chuyện) timeline — change freely
  storyImages: {
    firstMeet: "FOOD9557.jpg",
    firstDate: "FOOD8487.jpg",
    proposal: "FOOD1315.jpg",
  },

  // Full album of 40 prewedding photos
  album: [
    "FOOD0241.jpg",
    "FOOD0357.jpg",
    "FOOD0491.jpg",
    "FOOD0554.jpg",
    "FOOD0666.jpg",
    "FOOD1089.jpg",
    "FOOD1166.jpg",
    "FOOD1197.jpg",
    "FOOD1315.jpg",
    "FOOD1753.jpg",
    "FOOD1765.jpg",
    "FOOD1863.jpg",
    "FOOD1892.jpg",
    "FOOD1949.jpg",
    "FOOD2019.jpg",
    "FOOD2078.jpg",
    "FOOD2128.jpg",
    "FOOD2188.jpg",
    "FOOD2277.jpg",
    "FOOD2317.jpg",
    "FOOD2399.jpg",
    "FOOD2934.jpg",
    "FOOD2981.jpg",
    "FOOD3067.jpg",
    "FOOD3118.jpg",
    "FOOD3179.jpg",
    "FOOD8487.jpg",
    "FOOD8618.jpg",
    "FOOD8869.jpg",
    "FOOD8949.jpg",
    "FOOD9076.jpg",
    "FOOD9342.jpg",
    "FOOD9354.jpg",
    "FOOD9467.jpg",
    "FOOD9498.jpg",
    "FOOD9531.jpg",
    "FOOD9542.jpg",
    "FOOD9557.jpg",
    "FOOD9589.jpg",
    "FOOD9793.jpg",
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
    image: "/images/prewedding/FOOD9793.jpg",
    description:
      "Một chàng trai yêu đời, luôn tìm thấy niềm vui trong những điều giản dị. Với quan điểm sống tích cực và luôn hết lòng vì gia đình, Nam tin rằng hạnh phúc đến từ sự chân thành và yêu thương.",
  },
  bride: {
    name: "Đặng Thị Mỹ Hiền",
    shortName: "Hiền",
    role: "Cô Dâu",
    image: "/images/prewedding/FOOD8487.jpg",
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
      "Chúng mình quen nhau khi cùng làm việc ở công ty. Nam là cấp trên, Hiền là cấp dưới. Thường xuyên phải tương tác với nhau, nên cứ thế phát sinh tình cảm khi nào chả hay. Các cụ hay bảo nên tránh các trường hợp con thấy, vợ bạn, gái cơ quan để yêu đương. Ấy thế mà chả hiểu sao, dây tơ hồng siết chặt quá nên là 2 đứa cứ thế va vào nhau. Yêu nhau nhùng nhằng thế mà giờ cũng hơn 3 năm, trải qua nhiều cảm xúc cùng nhau, vui có buồn có, nhưng tốt cái là chưa có chia tay. Mỗi đứa giờ 1 công việc, 1 định hướng khác nhau, nhưng có cái yêu nhau thì vẫn còn cùng nhau. Thế là 1 ngày đẹp trời, Nam mua cái nhẫn, dẫn nàng đến quán bò bít tết khứa khứa uống rượu vang, rồi á là quỳ xuống hỏi mình cưới nhau nha, Hiền lia lịa gật đầu. Thế là giờ chúng mình có đám cưới, thế là chúng mình về chung 1 nhà đó mí bạn :)) Chuyện tình yêu chúng mình đơn giản thế thôi đó. Cảm ơn bạn đã đọc đến tận đây nhé !! Cảm ơn bạn vì đã dành tình cảm cho Vợ Chồng mình !!! Yêu bạn ❤️",
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
      motherName: "Bà Nguyễn Thị Hoa",
      address: "Thành phố Đà Lạt, Lâm Đồng",
      mapUrl: "https://maps.google.com/?q=Vuon+hoa+Cam+Tu+Cau+Da+Lat",
    },
  },

  // The Big Day Section
  events: {
    title: "Ngày Trọng Đại",
    subtitle: "Chúng tôi rất hân hạnh được đón tiếp quý khách",
    coupleImage: preweddingImg("FOOD1166.jpg"),
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
    image: preweddingImg("FOOD9531.jpg"),
  },

  // Navigation
  navigation: [
    { id: "story", label: "Câu Chuyện" },
    { id: "gallery", label: "Khoảnh Khắc" },
    { id: "events", label: "Sự Kiện" },
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
