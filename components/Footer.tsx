"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { WEDDING_CONFIG } from "@/lib/constants";
import { ANIMATION_VARIANTS } from "@/lib/theme";

export default function Footer() {
  return (
    <footer className="relative bg-[var(--color-primary)] text-white overflow-hidden">
      {/* Background prewedding image */}
      <div className="absolute inset-0">
        <Image
          src={WEDDING_CONFIG.footer.image}
          alt="Prewedding"
          fill
          className="object-cover opacity-20"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[var(--color-primary)]/80" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={ANIMATION_VARIANTS.fadeInUp}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Couple Names */}
          <h2 className="font-script text-3xl md:text-5xl mb-4">
            {WEDDING_CONFIG.groom.shortName} & {WEDDING_CONFIG.bride.shortName}
          </h2>

          {/* Message */}
          <p className="text-white/80 mb-6 text-sm md:text-base">
            {WEDDING_CONFIG.footer.message}
          </p>

          {/* Hashtag */}
          <p className="text-lg md:text-xl font-medium">
            {WEDDING_CONFIG.footer.hashtag}
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
