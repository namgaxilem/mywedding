"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { WEDDING_CONFIG } from "@/lib/constants";

export default function GallerySection() {
  return (
    <section id="gallery" className="py-20 md:py-32 bg-gradient-to-b from-white to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-script text-4xl md:text-5xl text-pink-600 mb-4">
            {WEDDING_CONFIG.gallery.title}
          </h2>
          <p className="text-gray-500 text-sm tracking-widest uppercase">
            {WEDDING_CONFIG.gallery.subtitle}
          </p>
          <div className="w-24 h-0.5 bg-pink-300 mx-auto mt-6" />
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {WEDDING_CONFIG.gallery.images.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className={`relative overflow-hidden rounded-xl shadow-lg cursor-pointer ${
                index === 0 || index === 5 ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              <div
                className={`relative ${
                  index === 0 || index === 5
                    ? "aspect-square md:aspect-[4/3]"
                    : "aspect-square"
                } bg-gradient-to-br from-pink-100 to-pink-200`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                {/* Placeholder overlay for missing images */}
                <div className="absolute inset-0 flex items-center justify-center bg-pink-100/80">
                  <span className="text-pink-400 text-sm">{image.alt}</span>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
