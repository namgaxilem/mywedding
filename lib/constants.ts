export const WEDDING_CONFIG = {
  // Couple Information
  groom: {
    name: "Nguyễn Đức Nam",
    shortName: "Nam",
  },
  bride: {
    name: "Đặng Thị Mỹ Hiền",
    shortName: "Hiền",
  },

  // Wedding Date
  weddingDate: "2026-03-15",
  weddingDateDisplay: "15 Tháng 3, 2026",

  // Hero Section
  hero: {
    backgroundImage: "/images/hero-couple.jpg",
    subtitle: "Chúng tôi sắp kết hôn",
    location: "Thành phố Hồ Chí Minh, Việt Nam",
  },

  // Our Story Section
  story: {
    title: "Câu Chuyện Của Chúng Tôi",
    subtitle: "Hành trình tình yêu",
    items: [
      {
        id: 1,
        title: "Lần Đầu Gặp Gỡ",
        date: "Tháng 6, 2020",
        description:
          "Chúng tôi gặp nhau lần đầu tại một buổi họp mặt bạn bè. Ánh mắt đầu tiên đã khiến cả hai không thể quên được nhau.",
        image: "/images/story-1.jpg",
        position: "left" as const,
      },
      {
        id: 2,
        title: "Hẹn Hò Đầu Tiên",
        date: "Tháng 8, 2020",
        description:
          "Buổi hẹn hò đầu tiên tại quán cà phê nhỏ, nơi chúng tôi trò chuyện suốt nhiều giờ và nhận ra có rất nhiều điểm chung.",
        image: "/images/story-2.jpg",
        position: "right" as const,
      },
      {
        id: 3,
        title: "Lời Cầu Hôn",
        date: "Tháng 12, 2025",
        description:
          "Dưới ánh hoàng hôn tuyệt đẹp, anh đã quỳ gối và cầu hôn em với chiếc nhẫn kim cương lấp lánh. Và em đã nói 'Có'!",
        image: "/images/story-3.jpg",
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

  // The Big Day Section
  events: {
    title: "Ngày Trọng Đại",
    subtitle: "Chúng tôi rất hân hạnh được đón tiếp quý khách",
    ceremony: {
      title: "Lễ Cưới",
      date: "15 Tháng 3, 2026",
      time: "10:00 - 12:00",
      venue: "Nhà Thờ Đức Bà",
      address: "01 Công xã Paris, Quận 1, TP.HCM",
      mapUrl: "https://maps.google.com/?q=Nhà+Thờ+Đức+Bà+Sài+Gòn",
    },
    reception: {
      title: "Tiệc Cưới",
      date: "15 Tháng 3, 2026",
      time: "18:00 - 22:00",
      venue: "Khách sạn Rex Sài Gòn",
      address: "141 Nguyễn Huệ, Quận 1, TP.HCM",
      mapUrl: "https://maps.google.com/?q=Rex+Hotel+Saigon",
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
        bankName: "Vietcombank",
        accountNumber: "1234567890",
        accountHolder: "NGUYEN DUC NAM",
        qrCode: "/images/qr-groom.png",
      },
      {
        id: 2,
        title: "Mừng Cưới Cô Dâu",
        bankName: "Techcombank",
        accountNumber: "0987654321",
        accountHolder: "DANG THI MY HIEN",
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

// Gallery Images Configuration
// Add your wedding photos here. Each image needs:
// - src: path to image (place images in /public/images/gallery/)
// - alt: description for accessibility
// - width & height: actual image dimensions (for proper aspect ratio)
export const GALLERY_IMAGES = [
  {
    src: "/images/gallery/photo-1.jpg",
    alt: "Ảnh cưới 1",
    width: 1200,
    height: 800,
  },
  {
    src: "/images/gallery/photo-2.jpg",
    alt: "Ảnh cưới 2",
    width: 800,
    height: 1200,
  },
  {
    src: "/images/gallery/photo-3.jpg",
    alt: "Ảnh cưới 3",
    width: 1200,
    height: 800,
  },
  {
    src: "/images/gallery/photo-4.jpg",
    alt: "Ảnh cưới 4",
    width: 1200,
    height: 800,
  },
  {
    src: "/images/gallery/photo-5.jpg",
    alt: "Ảnh cưới 5",
    width: 800,
    height: 1200,
  },
  {
    src: "/images/gallery/photo-6.jpg",
    alt: "Ảnh cưới 6",
    width: 1200,
    height: 800,
  },
];

export type WeddingConfig = typeof WEDDING_CONFIG;
