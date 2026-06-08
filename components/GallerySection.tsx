"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { WEDDING_CONFIG, GALLERY_IMAGES } from "@/lib/constants";
import { ANIMATION_VARIANTS } from "@/lib/theme";

export default function GallerySection() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const slides = GALLERY_IMAGES.map((img) => ({
    src: img.src,
    alt: img.alt,
    width: img.width,
    height: img.height,
  }));

  return (
    <section id="gallery" className="py-20 md:py-32 bg-gradient-to-b from-[var(--color-bg-primary)] to-[var(--color-bg-secondary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            {WEDDING_CONFIG.gallery.title}
          </h2>
          <p className="text-[var(--color-text-muted)] text-sm tracking-widest uppercase">
            {WEDDING_CONFIG.gallery.subtitle}
          </p>
          <div className="w-24 h-0.5 bg-[var(--color-primary-light)] mx-auto mt-6" />
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {GALLERY_IMAGES.map((image, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-30px" }}
              variants={ANIMATION_VARIANTS.scaleIn}
              transition={{ duration: 0.4, delay: (index % 8) * 0.05 }}
              whileHover={{ scale: 1.03, y: -4 }}
              onClick={() => openLightbox(index)}
              className="relative overflow-hidden rounded-xl shadow-md cursor-pointer"
            >
              <div className="relative aspect-square bg-[var(--color-bg-tertiary)]">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        index={lightboxIndex}
        slides={slides}
      />
    </section>
  );
}
