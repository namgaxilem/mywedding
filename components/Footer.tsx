"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { WEDDING_CONFIG } from "@/lib/constants";
import { ANIMATION_VARIANTS } from "@/lib/theme";

export default function Footer() {
  return (
    <footer className="py-12 bg-[var(--color-primary)] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={ANIMATION_VARIANTS.fadeInUp}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Couple Names */}
          <h2 className="font-script text-3xl md:text-4xl mb-4">
            {WEDDING_CONFIG.groom.shortName} & {WEDDING_CONFIG.bride.shortName}
          </h2>

          {/* Message */}
          <p className="text-white/80 mb-6">{WEDDING_CONFIG.footer.message}</p>

          {/* Hashtag */}
          <p className="text-lg font-medium mb-8">
            {WEDDING_CONFIG.footer.hashtag}
          </p>

          {/* Divider */}
          <div className="w-24 h-0.5 bg-white/30 mx-auto mb-8" />

          {/* Copyright */}
          <div className="flex items-center justify-center gap-2 text-white/70 text-sm">
            <span>Made with</span>
            <Heart className="w-4 h-4 fill-current text-red-300" />
            <span>for our special day</span>
          </div>

          <p className="text-white/50 text-xs mt-4">
            © {new Date().getFullYear()} {WEDDING_CONFIG.groom.shortName} &{" "}
            {WEDDING_CONFIG.bride.shortName}. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
