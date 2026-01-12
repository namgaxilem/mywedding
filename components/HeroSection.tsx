"use client";

import { motion } from "framer-motion";
import { WEDDING_CONFIG } from "@/lib/constants";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image Placeholder */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-200 via-pink-100 to-rose-200">
        <div className="absolute inset-0 bg-[url('/images/hero-couple.jpg')] bg-cover bg-center opacity-60" />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-white/90 text-sm md:text-base tracking-widest uppercase mb-4"
        >
          {WEDDING_CONFIG.hero.subtitle}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="font-script text-5xl md:text-7xl lg:text-8xl text-white mb-6"
        >
          {WEDDING_CONFIG.groom.shortName}{" "}
          <span className="text-pink-300">&</span>{" "}
          {WEDDING_CONFIG.bride.shortName}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
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
          transition={{ delay: 0.8 }}
          className="mt-10"
        >
          <a
            href="#story"
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
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
