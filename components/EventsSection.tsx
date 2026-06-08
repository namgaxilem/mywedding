"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Clock, Calendar, Heart } from "lucide-react";
import Image from "next/image";
import { WEDDING_CONFIG } from "@/lib/constants";
import { ANIMATION_VARIANTS } from "@/lib/theme";

type EventType = "ceremony" | "reception";

export default function EventsSection() {
  const [selectedEvent, setSelectedEvent] = useState<EventType>("ceremony");
  const { ceremony, reception } = WEDDING_CONFIG.events;

  // Parse Vietnamese date string
  const parseVietnameseDate = (dateStr: string) => {
    const months: { [key: string]: number } = {
      "Tháng 1": 0, "Tháng 2": 1, "Tháng 3": 2, "Tháng 4": 3,
      "Tháng 5": 4, "Tháng 6": 5, "Tháng 7": 6, "Tháng 8": 7,
      "Tháng 9": 8, "Tháng 10": 9, "Tháng 11": 10, "Tháng 12": 11
    };
    const match = dateStr.match(/(\d+)\s+(Tháng \d+),\s*(\d+)/);
    if (!match) return new Date();
    return new Date(parseInt(match[3]), months[match[2]], parseInt(match[1]));
  };

  const ceremonyDate = parseVietnameseDate(ceremony.date);
  const receptionDate = parseVietnameseDate(reception.date);
  const activeDate = selectedEvent === "ceremony" ? ceremonyDate : receptionDate;

  // Countdown
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calc = () => {
      const diff = activeDate.getTime() - Date.now();
      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / 1000 / 60) % 60),
          seconds: Math.floor((diff / 1000) % 60),
        });
      }
    };
    calc();
    const timer = setInterval(calc, 1000);
    return () => clearInterval(timer);
  }, [selectedEvent]);

  // Mini calendar
  const calendarMonth = new Date(activeDate.getFullYear(), activeDate.getMonth(), 1);
  const daysInMonth = new Date(activeDate.getFullYear(), activeDate.getMonth() + 1, 0).getDate();
  const firstDayOfWeek = (() => {
    const d = calendarMonth.getDay();
    return d === 0 ? 6 : d - 1; // Mon=0
  })();

  const monthNames = [
    "Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6",
    "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"
  ];
  const dayNames = ["T2", "T3", "T4", "T5", "T6", "T7", "CN"];

  const getMapEmbedUrl = (address: string) => {
    return `https://maps.google.com/maps?q=${encodeURIComponent(address)}&t=m&z=15&output=embed`;
  };

  const selectedAddress = selectedEvent === "ceremony" ? ceremony.address : reception.address;

  return (
    <section id="events" className="pt-20 pb-6 md:pt-32 md:pb-10 bg-[var(--color-bg-primary)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={ANIMATION_VARIANTS.fadeInDown}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="font-script text-4xl md:text-5xl text-[var(--color-primary)] mb-4">
            {WEDDING_CONFIG.events.title}
          </h2>
          <p className="text-[var(--color-text-muted)] text-sm tracking-widest uppercase">
            {WEDDING_CONFIG.events.subtitle}
          </p>
          <div className="w-24 h-0.5 bg-[var(--color-primary-light)] mx-auto mt-6" />
        </motion.div>

        {/* Event Toggle Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex rounded-full bg-[var(--color-bg-tertiary)] p-1">
            <button
              onClick={() => setSelectedEvent("ceremony")}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all cursor-pointer ${
                selectedEvent === "ceremony"
                  ? "bg-[var(--color-primary)] text-white shadow-md"
                  : "text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
              }`}
            >
              {ceremony.title}
            </button>
            <button
              onClick={() => setSelectedEvent("reception")}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all cursor-pointer ${
                selectedEvent === "reception"
                  ? "bg-[var(--color-primary)] text-white shadow-md"
                  : "text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
              }`}
            >
              {reception.title}
            </button>
          </div>
        </div>

        {/* Main content: Mini Calendar + Event Details */}
        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          {/* Mini Calendar */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={ANIMATION_VARIANTS.fadeInLeft}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden border border-[var(--color-border-light)]"
          >
            {/* Calendar header */}
            <div className="bg-[var(--color-bg-tertiary)] px-5 py-3 text-center border-b border-[var(--color-border-light)]">
              <p className="text-sm font-medium text-[var(--color-text-secondary)] tracking-widest uppercase">
                {monthNames[calendarMonth.getMonth()]} {calendarMonth.getFullYear()}
              </p>
            </div>

            {/* Calendar grid */}
            <div className="p-4">
              <div className="grid grid-cols-7 gap-0.5 mb-2">
                {dayNames.map((d) => (
                  <div key={d} className="text-center text-[10px] font-medium text-[var(--color-text-muted)] uppercase py-1">
                    {d}
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-7 gap-0.5">
                {Array.from({ length: firstDayOfWeek }).map((_, i) => (
                  <div key={`e-${i}`} className="p-1.5" />
                ))}
                {Array.from({ length: daysInMonth }).map((_, i) => {
                  const day = i + 1;
                  const isHighlighted = day === activeDate.getDate();
                  return (
                    <div
                      key={day}
                      className={`p-1.5 text-center text-xs rounded-full transition-all ${
                        isHighlighted
                          ? "bg-[var(--color-primary)] text-white font-bold scale-110"
                          : "text-[var(--color-text-secondary)]"
                      }`}
                    >
                      {day}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Countdown */}
            <div className="bg-[var(--color-bg-tertiary)] px-4 py-4 border-t border-[var(--color-border-light)]">
              <div className="grid grid-cols-4 gap-2">
                {[
                  { value: timeLeft.days, label: "Ngày" },
                  { value: timeLeft.hours, label: "Giờ" },
                  { value: timeLeft.minutes, label: "Phút" },
                  { value: timeLeft.seconds, label: "Giây" },
                ].map((item) => (
                  <div key={item.label} className="text-center">
                    <div className="text-xl md:text-2xl font-light text-[var(--color-text-primary)]">
                      {String(item.value).padStart(2, "0")}
                    </div>
                    <div className="text-[10px] text-[var(--color-text-muted)] uppercase tracking-wider">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Event Details Card */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={ANIMATION_VARIANTS.fadeInRight}
            transition={{ duration: 0.6 }}
            className="flex"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedEvent}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-[var(--color-border-light)] flex flex-col justify-center w-full"
              >
                <div className="text-center">
                  <div className="w-14 h-14 rounded-full overflow-hidden mx-auto mb-5 border-2 border-[var(--color-primary-lighter)] shadow-sm">
                    <Image
                      src={selectedEvent === "ceremony" ? WEDDING_CONFIG.bride.image : WEDDING_CONFIG.groom.image}
                      alt={selectedEvent === "ceremony" ? WEDDING_CONFIG.bride.name : WEDDING_CONFIG.groom.name}
                      width={56}
                      height={56}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-script text-2xl text-[var(--color-text-primary)] mb-6">
                    {selectedEvent === "ceremony" ? ceremony.title : reception.title}
                  </h3>

                  <div className="space-y-4 text-[var(--color-text-secondary)]">
                    <div className="flex items-center justify-center gap-3">
                      <Calendar className="w-4 h-4 text-[var(--color-primary)]" />
                      <span className="text-sm">{selectedEvent === "ceremony" ? ceremony.date : reception.date}</span>
                    </div>
                    <div className="flex items-center justify-center gap-3">
                      <Clock className="w-4 h-4 text-[var(--color-primary)]" />
                      <span className="text-sm">{selectedEvent === "ceremony" ? ceremony.time : reception.time}</span>
                    </div>
                    <div className="flex items-center justify-center gap-3">
                      <MapPin className="w-4 h-4 text-[var(--color-primary)]" />
                      <span className="text-sm">{selectedEvent === "ceremony" ? ceremony.venue : reception.venue}</span>
                    </div>
                    <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">
                      {selectedEvent === "ceremony" ? ceremony.address : reception.address}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Google Maps Embed */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={ANIMATION_VARIANTS.fadeInUp}
          transition={{ duration: 0.8 }}
          className="mt-10"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedEvent}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="rounded-2xl overflow-hidden shadow-lg border border-[var(--color-border-light)]"
            >
              <div className="bg-[var(--color-bg-secondary)] px-5 py-3 flex items-center gap-3">
                <MapPin className="w-4 h-4 text-[var(--color-primary)]" />
                <span className="text-sm text-[var(--color-text-primary)] font-medium">
                  {selectedEvent === "ceremony" ? ceremony.venue : reception.venue}
                </span>
              </div>
              <iframe
                src={getMapEmbedUrl(selectedAddress)}
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              />
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Couple Image */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={ANIMATION_VARIANTS.scaleIn}
          transition={{ duration: 0.8 }}
          className="mt-30 flex justify-center"
        >
          <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-[var(--color-border)] shadow-xl">
            <Image
              src={WEDDING_CONFIG.events.coupleImage}
              alt="Cặp đôi"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 192px, 256px"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
