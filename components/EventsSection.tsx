"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Clock, Calendar } from "lucide-react";
import { WEDDING_CONFIG } from "@/lib/constants";
import { ANIMATION_VARIANTS } from "@/lib/theme";

type EventType = "ceremony" | "reception";

export default function EventsSection() {
  const [selectedEvent, setSelectedEvent] = useState<EventType>("ceremony");
  const { ceremony, reception } = WEDDING_CONFIG.events;

  const getMapEmbedUrl = (address: string) => {
    // Free embed version - không cần API key
    return `https://maps.google.com/maps?q=${encodeURIComponent(address)}&t=m&z=15&output=embed`;
  };

  const selectedAddress = selectedEvent === "ceremony" ? ceremony.address : reception.address;

  return (
    <section id="events" className="py-20 md:py-32 bg-[var(--color-bg-primary)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={ANIMATION_VARIANTS.fadeInDown}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-script text-4xl md:text-5xl text-[var(--color-primary)] mb-4">
            {WEDDING_CONFIG.events.title}
          </h2>
          <p className="text-[var(--color-text-muted)] text-sm tracking-widest uppercase">
            {WEDDING_CONFIG.events.subtitle}
          </p>
          <div className="w-24 h-0.5 bg-[var(--color-primary-light)] mx-auto mt-6" />
        </motion.div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Ceremony Card */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={ANIMATION_VARIANTS.fadeInLeft}
            transition={{ duration: 0.8 }}
            onClick={() => setSelectedEvent("ceremony")}
            className={`bg-gradient-to-br from-[var(--color-bg-secondary)] to-white rounded-2xl p-8 shadow-lg border-2 cursor-pointer transition-all ${
              selectedEvent === "ceremony"
                ? "border-[var(--color-primary)] ring-2 ring-[var(--color-primary-light)]"
                : "border-[var(--color-border-light)] hover:border-[var(--color-primary-light)]"
            }`}
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-[var(--color-primary-lighter)] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">💒</span>
              </div>
              <h3 className="font-script text-2xl md:text-3xl text-[var(--color-text-primary)] mb-6">
                {ceremony.title}
              </h3>

              <div className="space-y-4 text-[var(--color-text-secondary)]">
                <div className="flex items-center justify-center gap-3">
                  <Calendar className="w-5 h-5 text-[var(--color-primary)]" />
                  <span>{ceremony.date}</span>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <Clock className="w-5 h-5 text-[var(--color-primary)]" />
                  <span>{ceremony.time}</span>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <MapPin className="w-5 h-5 text-[var(--color-primary)]" />
                  <span>{ceremony.venue}</span>
                </div>
                <p className="text-sm text-[var(--color-text-muted)]">{ceremony.address}</p>
              </div>

              {selectedEvent === "ceremony" && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="mt-6 inline-flex items-center gap-2 text-[var(--color-primary)] text-sm font-medium"
                >
                  <MapPin className="w-4 h-4" />
                  Đang xem bản đồ
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Reception Card */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={ANIMATION_VARIANTS.fadeInRight}
            transition={{ duration: 0.8, delay: 0.1 }}
            onClick={() => setSelectedEvent("reception")}
            className={`bg-gradient-to-br from-[var(--color-bg-secondary)] to-white rounded-2xl p-8 shadow-lg border-2 cursor-pointer transition-all ${
              selectedEvent === "reception"
                ? "border-[var(--color-primary)] ring-2 ring-[var(--color-primary-light)]"
                : "border-[var(--color-border-light)] hover:border-[var(--color-primary-light)]"
            }`}
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-[var(--color-primary-lighter)] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🎉</span>
              </div>
              <h3 className="font-script text-2xl md:text-3xl text-[var(--color-text-primary)] mb-6">
                {reception.title}
              </h3>

              <div className="space-y-4 text-[var(--color-text-secondary)]">
                <div className="flex items-center justify-center gap-3">
                  <Calendar className="w-5 h-5 text-[var(--color-primary)]" />
                  <span>{reception.date}</span>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <Clock className="w-5 h-5 text-[var(--color-primary)]" />
                  <span>{reception.time}</span>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <MapPin className="w-5 h-5 text-[var(--color-primary)]" />
                  <span>{reception.venue}</span>
                </div>
                <p className="text-sm text-[var(--color-text-muted)]">{reception.address}</p>
              </div>

              {selectedEvent === "reception" && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="mt-6 inline-flex items-center gap-2 text-[var(--color-primary)] text-sm font-medium"
                >
                  <MapPin className="w-4 h-4" />
                  Đang xem bản đồ
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>

        {/* Google Maps Embed */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={ANIMATION_VARIANTS.fadeInUp}
          transition={{ duration: 0.8 }}
          className="mt-12"
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
              <div className="bg-[var(--color-bg-secondary)] px-6 py-4 flex items-center gap-3">
                <MapPin className="w-5 h-5 text-[var(--color-primary)]" />
                <span className="text-[var(--color-text-primary)] font-medium">
                  {selectedEvent === "ceremony" ? ceremony.venue : reception.venue}
                </span>
                <span className="text-[var(--color-text-muted)] text-sm">
                  - {selectedAddress}
                </span>
              </div>
              <iframe
                src={getMapEmbedUrl(selectedAddress)}
                width="100%"
                height="400"
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
          className="mt-16 flex justify-center"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-[var(--color-border)] shadow-xl">
            <img
              src={WEDDING_CONFIG.events.coupleImage}
              alt="Cặp đôi"
              className="w-full h-full object-cover"
              onError={(e) => {
                // Fallback if image doesn't exist
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                target.parentElement!.innerHTML = `
                  <div class="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[var(--color-bg-tertiary)] to-[var(--color-primary-lighter)]">
                    <span class="text-[var(--color-text-muted)] text-sm">Hình cặp đôi</span>
                  </div>
                `;
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
