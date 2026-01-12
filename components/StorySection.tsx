"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { WEDDING_CONFIG } from "@/lib/constants";

export default function StorySection() {
  return (
    <section id="story" className="py-20 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-script text-4xl md:text-5xl text-pink-600 mb-4">
            {WEDDING_CONFIG.story.title}
          </h2>
          <p className="text-gray-500 text-sm tracking-widest uppercase">
            {WEDDING_CONFIG.story.subtitle}
          </p>
          <div className="w-24 h-0.5 bg-pink-300 mx-auto mt-6" />
        </motion.div>

        {/* Story Items */}
        <div className="space-y-16 md:space-y-24">
          {WEDDING_CONFIG.story.items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`flex flex-col ${
                item.position === "right" ? "md:flex-row-reverse" : "md:flex-row"
              } items-center gap-8 md:gap-12`}
            >
              {/* Image */}
              <div className="w-full md:w-1/2">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-pink-100 to-pink-200">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  {/* Placeholder overlay for missing images */}
                  <div className="absolute inset-0 flex items-center justify-center bg-pink-100/80">
                    <span className="text-pink-400 text-sm">Hình ảnh</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div
                className={`w-full md:w-1/2 text-center ${
                  item.position === "right" ? "md:text-right" : "md:text-left"
                }`}
              >
                <span className="inline-block px-4 py-1 bg-pink-100 text-pink-600 text-xs rounded-full mb-4">
                  {item.date}
                </span>
                <h3 className="font-script text-2xl md:text-3xl text-gray-800 mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
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
