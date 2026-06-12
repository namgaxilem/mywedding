"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { WEDDING_CONFIG, PREWEDDING_CONFIG, preweddingImg } from "@/lib/constants";
import { MapPin, Calendar, Clock, Heart, Users, Camera, Utensils, PartyPopper, X, Home, ArrowLeft } from "lucide-react";
import MusicPlayer from "@/components/MusicPlayer";
import FallingFlowers from "@/components/FallingFlowers";
import { getInvitationById, INVITATIONS, type Invitation } from "../_utils";

interface InvitationPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default function InvitationDetailPage({ params }: InvitationPageProps) {
  const [invitation, setInvitation] = useState<Invitation | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showMapPopup, setShowMapPopup] = useState(false);
  const [selectedMap, setSelectedMap] = useState<{ title: string; address: string; mapUrl: string } | null>(null);

  useEffect(() => {
    params.then(({ id }) => {
      setInvitation(getInvitationById(id));
      setIsLoading(false);
    });
  }, [params]);

  const slides = PREWEDDING_CONFIG.album.slice(0, 8);

  useEffect(() => {
    if (isOpen) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isOpen, slides.length]);

  const handleOpenInvitation = () => {
    setIsOpen(true);
  };

  const handleMapClick = (title: string, address: string, mapUrl: string) => {
    setSelectedMap({ title, address, mapUrl });
    setShowMapPopup(true);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[var(--color-bg-secondary)] px-4 text-center">
        <div className="max-w-md bg-white rounded-xl shadow-lg p-6">
          <p className="text-lg font-semibold text-[var(--color-text-primary)] mb-2">Đang tải...</p>
        </div>
      </div>
    );
  }

  if (!invitation) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[var(--color-bg-secondary)] px-4 text-center">
        <div className="max-w-md bg-white rounded-xl shadow-lg p-6">
          <p className="text-lg font-semibold text-[var(--color-text-primary)] mb-2">Thiệp mời không tồn tại</p>
          <p className="text-sm text-[var(--color-text-muted)] mb-2">Vui lòng kiểm tra lại đường dẫn hoặc quay về trang danh sách thiệp.</p>
          <p className="text-xs text-[var(--color-text-muted)] mt-2">
            Danh sách thiệp có sẵn: {INVITATIONS.map(inv => inv.id).join(', ')}
          </p>
        </div>
      </div>
    );
  }

  const showCeremony = invitation.place.includes("bride");
  const showReception = invitation.place.includes("groom");
  const eventsCount = (showCeremony ? 1 : 0) + (showReception ? 1 : 0);

  const timelineLabel =
    invitation.place.length === 2
      ? "Chương trình tiệc cưới"
      : invitation.place.includes("groom")
        ? "Chương trình tiệc cưới nhà trai"
        : "Chương trình tiệc cưới nhà gái";


  return (
    <div className="min-h-screen bg-cover bg-center bg-fixed" style={{ backgroundImage: `url(${preweddingImg(PREWEDDING_CONFIG.coverImage)})` }}>
      {/* Background blur overlay */}
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-0" />
      
      <FallingFlowers />
      <MusicPlayer />

      {/* Cover Section */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            {/* Background image inside cover */}
            <div className="absolute inset-0">
              <Image
                src={preweddingImg(PREWEDDING_CONFIG.coverImage)}
                alt="Cover Background"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-black/30" />
            </div>

            {/* Left Cover */}
            <motion.div
              className="absolute left-0 top-0 w-1/2 h-full bg-gradient-to-r from-[var(--color-primary-dark)] to-[var(--color-primary)] origin-right z-10"
              exit={{ rotateY: -110 }}
              transition={{ duration: 2, ease: [0.4, 0, 0.2, 1] }}
              style={{ transformStyle: "preserve-3d", perspective: 2000 }}
            >
              <div className="absolute inset-0 flex items-center justify-end pr-8 md:pr-12">
                <div className="text-white text-right" />
              </div>
              {/* Decorative pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 left-10 w-20 h-20 border border-white rounded-full" />
                <div className="absolute bottom-10 left-20 w-16 h-16 border border-white rounded-full" />
              </div>
            </motion.div>

            {/* Right Cover */}
            <motion.div
              className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-[var(--color-primary-dark)] to-[var(--color-primary)] origin-left z-10"
              exit={{ rotateY: 110 }}
              transition={{ duration: 2, ease: [0.4, 0, 0.2, 1], delay: 0.1 }}
              style={{ transformStyle: "preserve-3d", perspective: 2000 }}
            >
              <div className="absolute inset-0 flex items-center justify-start pl-8 md:pl-12">
                <div className="text-white text-left" />
              </div>
              {/* Decorative pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-20 right-10 w-20 h-20 border border-white rounded-full" />
                <div className="absolute bottom-20 right-20 w-16 h-16 border border-white rounded-full" />
              </div>
            </motion.div>

            {/* Center Content */}
            <motion.div
              className="relative z-20 text-center text-white px-4"
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7, type: "spring" }}
                className="mb-6"
              >
                <Heart className="w-10 h-10 md:w-12 md:h-12 mx-auto text-pink-200 fill-pink-200" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="text-xs md:text-sm tracking-[0.3em] mb-5"
              >
                THƯ MỜI
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 }}
                className="font-['Great_Vibes'] text-3xl md:text-4xl mb-6"
              >
                {invitation.pronoun} {invitation.name}
              </motion.div>

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3 }}
                onClick={handleOpenInvitation}
                className="px-6 md:px-8 py-2.5 md:py-3 bg-white/20 backdrop-blur-sm border border-white/50 rounded-full text-white hover:bg-white/30 transition-all duration-300 tracking-wider text-sm md:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                MỞ
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content - Shows after cover opens */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isOpen ? 1 : 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className={isOpen ? "block" : "hidden"}
      >
        {/* Close button */}
        <button
          onClick={() => setIsOpen(false)}
          className="fixed top-4 right-4 z-40 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors"
        >
          <X className="w-5 h-5 text-[var(--color-primary)]" />
        </button>

        {/* Back to Home Button */}
        <Link href="/">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2 }}
            className="fixed bottom-4 left-4 z-40 inline-flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-all duration-300 hover:scale-105"
          >
            <ArrowLeft className="w-4 h-4 text-[var(--color-primary)]" />
            <span className="text-sm font-medium text-[var(--color-primary)]">Về trang chủ</span>
          </motion.button>
        </Link>

        {/* Paper-style Invitation Card */}
        <div className="min-h-screen py-8 px-4">
          <div className="max-w-2xl mx-auto">
            {/* Main Card */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="bg-white/95 backdrop-blur-sm rounded-lg shadow-2xl overflow-hidden"
              style={{
                backgroundImage: 'url("/images/deco.webp")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            >
              {/* Inner content with paper texture */}
              <div className="bg-[var(--color-bg-secondary)]/95 p-6 md:p-10">
                {/* Hero Section with Image Slider */}
                <section className="relative h-80 md:h-96 mb-8 rounded-lg overflow-hidden bg-[var(--color-primary-dark)]">
                  {/* Image Slideshow */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    {slides.map((slide, index) => (
                      <motion.div
                        key={index}
                        className="absolute inset-0 flex items-center justify-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: currentSlide === index ? 1 : 0 }}
                        transition={{ duration: 1 }}
                      >
                        <Image
                          src={preweddingImg(slide)}
                          alt={`Slide ${index + 1}`}
                          fill
                          className="object-contain"
                          priority={index === 0}
                        />
                      </motion.div>
                    ))}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
                  </div>

                  {/* Hero Content */}
                  <div className="relative z-10 h-full flex flex-col items-center justify-center text-white text-center">
                    <motion.p
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.2 }}
                      className="text-sm md:text-base tracking-[0.3em] mb-2"
                    >
                      THƯ MỜI CƯỚI
                    </motion.p>

                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1.4, type: "spring" }}
                      className="mb-4"
                    >
                      <h1 className="font-['Great_Vibes'] text-4xl md:text-6xl">
                        {WEDDING_CONFIG.groom.shortName}
                      </h1>
                      <div className="flex items-center justify-center gap-2 my-2">
                        <div className="w-10 h-[1px] bg-white/60" />
                        <Heart className="w-4 h-4 text-pink-300 fill-pink-300" />
                        <div className="w-10 h-[1px] bg-white/60" />
                      </div>
                      <h1 className="font-['Great_Vibes'] text-4xl md:text-6xl">
                        {WEDDING_CONFIG.bride.shortName}
                      </h1>
                    </motion.div>
                  </div>
                </section>

                {/* Parent Information Section */}
                <section className="text-center mb-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.8 }}
                  >
                    {/* 囍 Logo */}
                    <div className="flex justify-center mb-0">
                      <div className="w-14 h-14 rounded-full border-[3px] border-red-600 flex items-center justify-center">
                        <span className="text-red-600 text-xl font-bold leading-none">囍</span>
                      </div>
                    </div>

                    {/* Decorative image */}
                    <div className="flex justify-center mb-6">
                      <Image
                        src="/images/deco.webp"
                        alt="Decoration"
                        width={100}
                        height={50}
                        className="object-contain"
                      />
                    </div>

                    {/* Two columns: NHÀ TRAI and NHÀ GÁI */}
                    <div className="grid grid-cols-2 gap-6 md:gap-12 mb-8">
                      {/* Nhà Trai */}
                      <div className="text-center">
                        <h3 className="text-sm md:text-base font-semibold text-[var(--color-text-muted)] tracking-widest uppercase mb-3">
                          {WEDDING_CONFIG.venue.groomFamily.title}
                        </h3>
                        <p className="text-sm md:text-base font-bold text-[var(--color-text-primary)] uppercase">
                          {WEDDING_CONFIG.venue.groomFamily.fatherName}
                        </p>
                        <p className="text-sm md:text-base font-bold text-[var(--color-text-primary)] uppercase">
                          {WEDDING_CONFIG.venue.groomFamily.motherName}
                        </p>
                        <p className="text-xs md:text-sm text-[var(--color-text-muted)] mt-2">
                          {WEDDING_CONFIG.venue.groomFamily.address}
                        </p>
                        <button
                          onClick={() => handleMapClick(
                            WEDDING_CONFIG.venue.groomFamily.title,
                            WEDDING_CONFIG.venue.groomFamily.address,
                            WEDDING_CONFIG.venue.groomFamily.mapUrl
                          )}
                          className="mt-3 inline-flex items-center gap-1 text-xs text-[var(--color-primary)] hover:underline cursor-pointer"
                        >
                          <MapPin className="w-3 h-3" />
                          Xem bản đồ
                        </button>
                      </div>

                      {/* Nhà Gái */}
                      <div className="text-center">
                        <h3 className="text-sm md:text-base font-semibold text-[var(--color-text-muted)] tracking-widest uppercase mb-3">
                          {WEDDING_CONFIG.venue.brideFamily.title}
                        </h3>
                        <p className="text-sm md:text-base font-bold text-[var(--color-text-primary)] uppercase">
                          {WEDDING_CONFIG.venue.brideFamily.fatherName}
                        </p>
                        <p className="text-sm md:text-base font-bold text-[var(--color-text-primary)] uppercase">
                          {WEDDING_CONFIG.venue.brideFamily.motherName}
                        </p>
                        <p className="text-xs md:text-sm text-[var(--color-text-muted)] mt-2">
                          {WEDDING_CONFIG.venue.brideFamily.address}
                        </p>
                        <button
                          onClick={() => handleMapClick(
                            WEDDING_CONFIG.venue.brideFamily.title,
                            WEDDING_CONFIG.venue.brideFamily.address,
                            WEDDING_CONFIG.venue.brideFamily.mapUrl
                          )}
                          className="mt-3 inline-flex items-center gap-1 text-xs text-[var(--color-primary)] hover:underline cursor-pointer"
                        >
                          <MapPin className="w-3 h-3" />
                          Xem bản đồ
                        </button>
                      </div>
                    </div>

                    <p className="text-base text-[var(--color-text-muted)] mb-2">TRÂN TRỌNG KÍNH MỜI</p>
                    <p className="font-['Great_Vibes'] text-3xl md:text-4xl text-[var(--color-primary)] border-b-2 border-dashed border-[var(--color-border-light)] pb-2 inline-block">
                      {invitation.pronoun} {invitation.additionalInfo || invitation.name}
                    </p>
                    <p className="text-base md:text-lg text-[var(--color-primary)] mt-4 tracking-wide">
                      ĐẾN DỰ <span className="font-semibold">LỄ THÀNH HÔN</span> CỦA CHÚNG TÔI
                    </p>
                  </motion.div>
                </section>

                {/* Invitation Text Section */}
                <section className="text-center mb-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2 }}
                  >
                    <div className="flex items-center justify-center gap-4 mb-6">
                      <div className="w-16 h-[1px] bg-[var(--color-border)]/60" />
                      <Heart className="w-4 h-4 text-[var(--color-primary)]" />
                      <div className="w-16 h-[1px] bg-[var(--color-border)]/60" />
                    </div>


                  </motion.div>

                  {/* Couple Names */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 2.2 }}
                    className="py-8"
                  >
                    <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                      <div className="text-center">
                        <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-3 border-4 border-[var(--color-primary)]/20">
                          <Image
                            src={WEDDING_CONFIG.groom.image}
                            alt={WEDDING_CONFIG.groom.name}
                            width={96}
                            height={96}
                            className="object-cover w-full h-full"
                          />
                        </div>
                        <h3 className="font-['Great_Vibes'] text-2xl md:text-3xl text-[var(--color-primary)]">
                          {WEDDING_CONFIG.groom.shortName}
                        </h3>
                        <p className="text-sm text-[var(--color-text-muted)]">{WEDDING_CONFIG.groom.name}</p>
                      </div>

                      <div className="text-3xl md:text-4xl font-['Great_Vibes'] text-[var(--color-primary)]">&</div>

                      <div className="text-center">
                        <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-3 border-4 border-[var(--color-primary)]/20">
                          <Image
                            src={WEDDING_CONFIG.bride.image}
                            alt={WEDDING_CONFIG.bride.name}
                            width={96}
                            height={96}
                            className="object-cover w-full h-full"
                          />
                        </div>
                        <h3 className="font-['Great_Vibes'] text-2xl md:text-3xl text-[var(--color-primary)]">
                          {WEDDING_CONFIG.bride.shortName}
                        </h3>
                        <p className="text-sm text-[var(--color-text-muted)]">{WEDDING_CONFIG.bride.name}</p>
                      </div>
                    </div>
                  </motion.div>
                </section>

                {/* Event Details Section - Traditional Style */}
                <section className="text-center mb-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2.4 }}
                  >
                    {/* Section Title */}
                    <div className="flex items-center justify-center gap-4 mb-6">
                      <div className="w-12 h-[1px] bg-[var(--color-primary)]/40" />
                      <h2 className="text-lg md:text-xl text-[var(--color-primary)] tracking-widest uppercase">
                        Được Tổ Chức Vào
                      </h2>
                      <div className="w-12 h-[1px] bg-[var(--color-primary)]/40" />
                    </div>

                    <div className={`space-y-8`}>
                      {/* Ceremony - Bride's Side */}
                      {showCeremony && (
                        <div className="border border-[var(--color-border-light)] rounded-lg p-6 bg-[var(--color-bg-primary)]">
                          <div className="flex items-center justify-center gap-2 mb-3">
                            <Calendar className="w-5 h-5 text-[var(--color-primary)]" />
                            <h3 className="text-base md:text-lg font-semibold text-[var(--color-primary)] uppercase tracking-wide">
                              {WEDDING_CONFIG.events.ceremony.title}
                            </h3>
                          </div>
                          
                          <p className="font-['Great_Vibes'] text-3xl md:text-4xl text-[var(--color-primary)] mb-2">
                            {WEDDING_CONFIG.events.ceremony.date}
                          </p>
                          
                          <div className="flex items-center justify-center gap-2 text-[var(--color-text-secondary)] mb-3">
                            <Clock className="w-4 h-4" />
                            <span className="text-base">{WEDDING_CONFIG.events.ceremony.time}</span>
                          </div>
                          
                          <p className="text-sm md:text-base text-[var(--color-text-primary)] mb-4">
                            {WEDDING_CONFIG.events.ceremony.venue}
                          </p>
                          <p className="text-xs md:text-sm text-[var(--color-text-muted)] mb-4">
                            {WEDDING_CONFIG.events.ceremony.address}
                          </p>

                          {/* Embedded Map */}
                          <div className="rounded-lg overflow-hidden border border-[var(--color-border-light)] mb-3">
                            <iframe
                              src={`https://maps.google.com/maps?q=${encodeURIComponent(WEDDING_CONFIG.events.ceremony.address)}&t=m&z=15&output=embed`}
                              className="w-full h-48 border-0"
                              allowFullScreen
                              loading="lazy"
                              referrerPolicy="no-referrer-when-downgrade"
                            />
                          </div>
                          
                          <a
                            href={WEDDING_CONFIG.events.ceremony.mapUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 text-sm text-[var(--color-primary)] border border-[var(--color-primary)] rounded-full hover:bg-[var(--color-primary)] hover:text-white transition-colors"
                          >
                            <MapPin className="w-4 h-4" />
                            Mở Google Maps
                          </a>
                        </div>
                      )}

                      {/* Reception - Groom's Side */}
                      {showReception && (
                        <div className="border border-[var(--color-border-light)] rounded-lg p-6 bg-[var(--color-bg-primary)]">
                          <div className="flex items-center justify-center gap-2 mb-3">
                            <Calendar className="w-5 h-5 text-[var(--color-primary)]" />
                            <h3 className="text-base md:text-lg font-semibold text-[var(--color-primary)] uppercase tracking-wide">
                              {WEDDING_CONFIG.events.reception.title}
                            </h3>
                          </div>
                          
                          <p className="font-['Great_Vibes'] text-3xl md:text-4xl text-[var(--color-primary)] mb-2">
                            {WEDDING_CONFIG.events.reception.date}
                          </p>
                          
                          <div className="flex items-center justify-center gap-2 text-[var(--color-text-secondary)] mb-3">
                            <Clock className="w-4 h-4" />
                            <span className="text-base">{WEDDING_CONFIG.events.reception.time}</span>
                          </div>
                          
                          <p className="text-sm md:text-base text-[var(--color-text-primary)] mb-4">
                            {WEDDING_CONFIG.events.reception.venue}
                          </p>
                          <p className="text-xs md:text-sm text-[var(--color-text-muted)] mb-4">
                            {WEDDING_CONFIG.events.reception.address}
                          </p>

                          {/* Embedded Map */}
                          <div className="rounded-lg overflow-hidden border border-[var(--color-border-light)] mb-3">
                            <iframe
                              src={`https://maps.google.com/maps?q=${encodeURIComponent(WEDDING_CONFIG.events.reception.address)}&t=m&z=15&output=embed`}
                              className="w-full h-48 border-0"
                              allowFullScreen
                              loading="lazy"
                              referrerPolicy="no-referrer-when-downgrade"
                            />
                          </div>
                          
                          <a
                            href={WEDDING_CONFIG.events.reception.mapUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 text-sm text-[var(--color-primary)] border border-[var(--color-primary)] rounded-full hover:bg-[var(--color-primary)] hover:text-white transition-colors"
                          >
                            <MapPin className="w-4 h-4" />
                            Mở Google Maps
                          </a>
                        </div>
                      )}
                    </div>
                  </motion.div>
                </section>

                {/* Timeline Section */}
                <section className="text-center mb-6">
                  <h2 className="font-['Playfair_Display'] text-2xl md:text-3xl text-[var(--color-primary)] mb-4">Timeline</h2>
                  <p className="text-sm text-[var(--color-text-muted)] mb-4">{timelineLabel}</p>

                  <div className="grid grid-cols-4 gap-3">
                    {[
                      { time: "17:30", title: "Đón Khách", icon: Users },
                      { time: "18:00", title: "Chụp Ảnh", icon: Camera },
                      { time: "18:30", title: "Khai Tiệc", icon: Utensils },
                      { time: "21:30", title: "Tiễn Khách", icon: PartyPopper },
                    ].map((item, index) => (
                      <div key={index} className="text-center">
                        <div className="w-12 h-12 rounded-full bg-[var(--color-primary-lighter)] flex items-center justify-center mx-auto mb-2">
                          <item.icon className="w-5 h-5 text-[var(--color-primary)]" />
                        </div>
                        <p className="text-lg md:text-xl font-['Playfair_Display'] text-[var(--color-primary)] mb-0.5">{item.time}</p>
                        <p className="text-xs md:text-sm text-[var(--color-text-secondary)]">{item.title}</p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Thank You Section */}
                <section className="bg-gradient-to-r from-[var(--color-primary-dark)] to-[var(--color-primary)] rounded-lg p-6 text-white text-center">
                  <h2 className="font-['Great_Vibes'] text-2xl md:text-3xl mb-3">Thank You!</h2>
                  <p className="text-white/80 text-base mb-6">
                    Rất hân hạnh được đón tiếp!
                  </p>
                  <div className="flex items-center justify-center gap-4">
                    <div className="w-12 h-[1px] bg-white/50" />
                    <Heart className="w-4 h-4 text-pink-300 fill-pink-300" />
                    <div className="w-12 h-[1px] bg-white/50" />
                  </div>
                  <p className="mt-4 font-['Great_Vibes'] text-2xl">
                    {WEDDING_CONFIG.groom.shortName} & {WEDDING_CONFIG.bride.shortName}
                  </p>
                </section>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Map Popup */}
      <AnimatePresence>
        {showMapPopup && selectedMap && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
            onClick={() => setShowMapPopup(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-['Playfair_Display'] text-2xl text-[var(--color-primary)]">{selectedMap.title}</h3>
                  <button
                    onClick={() => setShowMapPopup(false)}
                    className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                  >
                    <X className="w-5 h-5 text-gray-600" />
                  </button>
                </div>
                <p className="text-[var(--color-text-secondary)] mb-4">{selectedMap.address}</p>
                <div className="aspect-video bg-gray-100 rounded-lg mb-4 overflow-hidden">
                  <iframe
                    src={selectedMap.mapUrl}
                    className="w-full h-full border-0"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <a
                  href={selectedMap.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 w-full justify-center px-6 py-3 bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white rounded-full font-medium transition-colors"
                >
                  <MapPin className="w-5 h-5" />
                  Mở Google Maps
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
