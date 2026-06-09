"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { WEDDING_CONFIG } from "@/lib/constants";
import { ANIMATION_VARIANTS } from "@/lib/theme";

export default function StorySection() {
  const { story } = WEDDING_CONFIG;
  const images = story.collageImages;

  return (
    <section id="story" className="py-20 md:py-32 bg-[var(--color-bg-primary)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-start">
          {/* Left: Decorative icon + Title + Narrative */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={ANIMATION_VARIANTS.fadeInLeft}
            transition={{ duration: 0.8 }}
          >
            {/* Decorative icon */}
            <div className="flex justify-center md:justify-start mb-4">
              <Image
                src="/images/deco.webp"
                alt="Decoration"
                width={60}
                height={30}
                className="object-contain opacity-70"
              />
            </div>

            {/* Title */}
            <h2 className="font-script text-3xl md:text-4xl text-[var(--color-primary)] mb-6 text-center md:text-left">
              {story.title}
            </h2>

            {/* Narrative */}
            <p className="text-[var(--color-text-secondary)] leading-[1.9] text-sm md:text-base text-justify">
              {story.narrative}
            </p>
          </motion.div>

          {/* Right: Photo Collage */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={ANIMATION_VARIANTS.fadeInRight}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-3">
              {/* Top-right large image */}
              <div className="col-span-2 relative aspect-[16/10] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={images[0]}
                  alt="Story photo 1"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Bottom-left image */}
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={images[1]}
                  alt="Story photo 2"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>

              {/* Bottom-right image */}
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={images[2]}
                  alt="Story photo 3"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
