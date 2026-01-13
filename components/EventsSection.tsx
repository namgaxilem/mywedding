"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, Calendar } from "lucide-react";
import { WEDDING_CONFIG } from "@/lib/constants";
import { ANIMATION_VARIANTS } from "@/lib/theme";

export default function EventsSection() {
  const { ceremony, reception } = WEDDING_CONFIG.events;

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
            whileHover={{ y: -5 }}
            className="bg-gradient-to-br from-[var(--color-bg-secondary)] to-white rounded-2xl p-8 shadow-lg border border-[var(--color-border-light)]"
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

              <a
                href={ceremony.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-8 bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white px-8 py-3 rounded-full text-sm font-medium transition-colors"
              >
                Xem bản đồ
              </a>
            </div>
          </motion.div>

          {/* Reception Card */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={ANIMATION_VARIANTS.fadeInRight}
            transition={{ duration: 0.8, delay: 0.1 }}
            whileHover={{ y: -5 }}
            className="bg-gradient-to-br from-[var(--color-bg-secondary)] to-white rounded-2xl p-8 shadow-lg border border-[var(--color-border-light)]"
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

              <a
                href={reception.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-8 bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white px-8 py-3 rounded-full text-sm font-medium transition-colors"
              >
                Xem bản đồ
              </a>
            </div>
          </motion.div>
        </div>

        {/* Couple Image */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={ANIMATION_VARIANTS.scaleIn}
          transition={{ duration: 0.8 }}
          className="mt-16 flex justify-center"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-[var(--color-border)] shadow-xl bg-gradient-to-br from-[var(--color-bg-tertiary)] to-[var(--color-primary-lighter)]">
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-[var(--color-text-muted)] text-sm">Hình cặp đôi</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
