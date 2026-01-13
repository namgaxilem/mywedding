"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { WEDDING_CONFIG } from "@/lib/constants";
import { ANIMATION_VARIANTS } from "@/lib/theme";

export default function StorySection() {
  return (
    <section id="story" className="py-20 md:py-32 bg-[var(--color-bg-primary)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={ANIMATION_VARIANTS.fadeInUp}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-script text-4xl md:text-5xl text-[var(--color-primary)] mb-4">
            {WEDDING_CONFIG.story.title}
          </h2>
          <p className="text-[var(--color-text-muted)] text-sm tracking-widest uppercase">
            {WEDDING_CONFIG.story.subtitle}
          </p>
          <div className="w-24 h-0.5 bg-[var(--color-primary-light)] mx-auto mt-6" />
        </motion.div>

        {/* Story Items */}
        <div className="space-y-16 md:space-y-24">
          {WEDDING_CONFIG.story.items.map((item, index) => (
            <motion.div
              key={item.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={item.position === "left" ? ANIMATION_VARIANTS.fadeInLeft : ANIMATION_VARIANTS.fadeInRight}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`flex flex-col ${
                item.position === "right" ? "md:flex-row-reverse" : "md:flex-row"
              } items-center gap-8 md:gap-12`}
            >
              {/* Image */}
              <motion.div 
                className="w-full md:w-1/2"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-[var(--color-bg-tertiary)] to-[var(--color-primary-lighter)]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  {/* Placeholder overlay for missing images */}
                  <div className="absolute inset-0 flex items-center justify-center bg-[var(--color-bg-tertiary)]/80">
                    <span className="text-[var(--color-text-muted)] text-sm">Hình ảnh</span>
                  </div>
                </div>
              </motion.div>

              {/* Content */}
              <div
                className={`w-full md:w-1/2 text-center ${
                  item.position === "right" ? "md:text-right" : "md:text-left"
                }`}
              >
                <span className="inline-block px-4 py-1 bg-[var(--color-primary-lighter)] text-[var(--color-primary)] text-xs rounded-full mb-4">
                  {item.date}
                </span>
                <h3 className="font-script text-2xl md:text-3xl text-[var(--color-text-primary)] mb-4">
                  {item.title}
                </h3>
                <p className="text-[var(--color-text-secondary)] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
