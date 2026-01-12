"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, Calendar } from "lucide-react";
import { WEDDING_CONFIG } from "@/lib/constants";

export default function EventsSection() {
  const { ceremony, reception } = WEDDING_CONFIG.events;

  return (
    <section id="events" className="py-20 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-script text-4xl md:text-5xl text-pink-600 mb-4">
            {WEDDING_CONFIG.events.title}
          </h2>
          <p className="text-gray-500 text-sm tracking-widest uppercase">
            {WEDDING_CONFIG.events.subtitle}
          </p>
          <div className="w-24 h-0.5 bg-pink-300 mx-auto mt-6" />
        </motion.div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Ceremony Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-pink-50 to-white rounded-2xl p-8 shadow-lg border border-pink-100"
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">💒</span>
              </div>
              <h3 className="font-script text-2xl md:text-3xl text-gray-800 mb-6">
                {ceremony.title}
              </h3>

              <div className="space-y-4 text-gray-600">
                <div className="flex items-center justify-center gap-3">
                  <Calendar className="w-5 h-5 text-pink-500" />
                  <span>{ceremony.date}</span>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <Clock className="w-5 h-5 text-pink-500" />
                  <span>{ceremony.time}</span>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <MapPin className="w-5 h-5 text-pink-500" />
                  <span>{ceremony.venue}</span>
                </div>
                <p className="text-sm text-gray-500">{ceremony.address}</p>
              </div>

              <a
                href={ceremony.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-8 bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-full text-sm font-medium transition-colors"
              >
                Xem bản đồ
              </a>
            </div>
          </motion.div>

          {/* Reception Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-pink-50 to-white rounded-2xl p-8 shadow-lg border border-pink-100"
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🎉</span>
              </div>
              <h3 className="font-script text-2xl md:text-3xl text-gray-800 mb-6">
                {reception.title}
              </h3>

              <div className="space-y-4 text-gray-600">
                <div className="flex items-center justify-center gap-3">
                  <Calendar className="w-5 h-5 text-pink-500" />
                  <span>{reception.date}</span>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <Clock className="w-5 h-5 text-pink-500" />
                  <span>{reception.time}</span>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <MapPin className="w-5 h-5 text-pink-500" />
                  <span>{reception.venue}</span>
                </div>
                <p className="text-sm text-gray-500">{reception.address}</p>
              </div>

              <a
                href={reception.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-8 bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-full text-sm font-medium transition-colors"
              >
                Xem bản đồ
              </a>
            </div>
          </motion.div>
        </div>

        {/* Couple Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 flex justify-center"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-pink-200 shadow-xl bg-gradient-to-br from-pink-100 to-pink-200">
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-pink-400 text-sm">Hình cặp đôi</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
