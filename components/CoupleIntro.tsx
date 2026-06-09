"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { WEDDING_CONFIG } from "@/lib/constants";
import { ANIMATION_VARIANTS } from "@/lib/theme";

export default function CoupleIntro() {
  const { groom, bride } = WEDDING_CONFIG;

  return (
    <section className="py-16 md:py-24 bg-[var(--color-bg-primary)]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Groom - text left, image right */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={ANIMATION_VARIANTS.fadeInUp}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-12 mb-16 md:mb-24"
        >
          {/* Groom Image */}
          <div className="w-full md:w-2/5 flex-shrink-0">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={groom.image}
                alt={groom.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>
          </div>

          {/* Groom Info */}
          <div className="w-full md:w-3/5 text-center md:text-right">
            <p className="text-sm text-[var(--color-text-muted)] tracking-widest uppercase italic mb-2">
              {groom.role}
            </p>
            <h3 className="font-script text-3xl md:text-4xl text-[var(--color-text-primary)] mb-4">
              {groom.name}
            </h3>
            <p className="text-[var(--color-text-secondary)] leading-relaxed text-sm md:text-base">
              {groom.description}
            </p>
          </div>
        </motion.div>

        {/* Decorative divider */}
        <div className="flex items-center justify-center gap-3 mb-16 md:mb-24">
          <div className="h-px w-16 bg-[var(--color-border)]" />
          <div className="w-2 h-2 rounded-full bg-[var(--color-secondary)]" />
          <div className="h-px w-16 bg-[var(--color-border)]" />
        </div>

        {/* Bride - image left, text right */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={ANIMATION_VARIANTS.fadeInUp}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row items-center gap-8 md:gap-12"
        >
          {/* Bride Image */}
          <div className="w-full md:w-2/5 flex-shrink-0">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={bride.image}
                alt={bride.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>
          </div>

          {/* Bride Info */}
          <div className="w-full md:w-3/5 text-center md:text-left">
            <p className="text-sm text-[var(--color-text-muted)] tracking-widest uppercase italic mb-2">
              {bride.role}
            </p>
            <h3 className="font-script text-3xl md:text-4xl text-[var(--color-text-primary)] mb-4">
              {bride.name}
            </h3>
            <p className="text-[var(--color-text-secondary)] leading-relaxed text-sm md:text-base">
              {bride.description}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
