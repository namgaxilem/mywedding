"use client";

import { motion } from "framer-motion";
import { WEDDING_CONFIG } from "@/lib/constants";
import { ANIMATION_VARIANTS } from "@/lib/theme";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image Placeholder */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary-lighter)] via-white to-[var(--color-bg-tertiary)]">
        <div className="absolute inset-0 bg-[url('/images/hero-couple.jpg')] bg-cover bg-center opacity-60" />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <motion.p
          initial="hidden"
          animate="visible"
          variants={ANIMATION_VARIANTS.fadeInDown}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-white/90 text-sm md:text-base tracking-widest uppercase mb-4"
        >
          {WEDDING_CONFIG.hero.subtitle}
        </motion.p>

        <motion.h1
          initial="hidden"
          animate="visible"
          variants={ANIMATION_VARIANTS.scaleIn}
          transition={{ delay: 0.4, duration: 1 }}
          className="font-script text-5xl md:text-7xl lg:text-8xl text-white mb-6"
        >
          {WEDDING_CONFIG.groom.shortName}{" "}
          <span className="text-[var(--color-accent-light)]">&</span>{" "}
          {WEDDING_CONFIG.bride.shortName}
        </motion.h1>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={ANIMATION_VARIANTS.fadeInUp}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-col items-center gap-2"
        >
          <p className="text-white/90 text-lg md:text-xl font-light">
            {WEDDING_CONFIG.weddingDateDisplay}
          </p>
          <p className="text-white/80 text-sm md:text-base">
            {WEDDING_CONFIG.hero.location}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-10"
        >
          <a
            href="#calendar"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors"
          >
            <span className="text-sm tracking-wider">Khám phá câu chuyện</span>
            <motion.span
              animate={{ y: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              ↓
            </motion.span>
          </a>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--color-bg-secondary)] to-transparent" />
    </section>
  );
}
