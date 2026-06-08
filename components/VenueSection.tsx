"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { MapPin, X, ExternalLink } from "lucide-react";
import { WEDDING_CONFIG } from "@/lib/constants";
import { ANIMATION_VARIANTS } from "@/lib/theme";

export default function VenueSection() {
  const { venue } = WEDDING_CONFIG;
  const [selectedVenue, setSelectedVenue] = useState<typeof venue.brideFamily | null>(null);

  const MapModal = ({ venue, onClose }: { venue: typeof WEDDING_CONFIG.venue.brideFamily; onClose: () => void }) => {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl mx-4 max-h-[90vh] overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-[var(--color-border-light)]">
            <div>
              <h3 className="text-xl font-semibold text-[var(--color-text-primary)]">{venue.title}</h3>
              <p className="text-[var(--color-text-secondary)]">{venue.address}</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-[var(--color-bg-tertiary)] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5 text-[var(--color-text-muted)]" />
            </button>
          </div>

          {/* Map Embed */}
          <div className="relative h-96 md:h-[500px] bg-[var(--color-bg-tertiary)]">
            <iframe
              src={`https://maps.google.com/maps?q=${encodeURIComponent(venue.address)}&t=m&z=15&output=embed`}
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            
            <div className="absolute bottom-4 right-4">
              <a
                href={venue.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <ExternalLink className="w-4 h-4" />
                <span className="text-sm font-medium">Mở trong Google Maps</span>
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    );
  };

  return (
    <section id="venue" className="py-16 md:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 囍 Logo */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={ANIMATION_VARIANTS.fadeInUp}
          className="text-center mb-10"
        >
          {/* Red circle 囍 */}
          <div className="flex justify-center mb-0">
            <div className="w-16 h-16 rounded-full border-[3px] border-red-600 flex items-center justify-center">
              <span className="text-red-600 text-2xl font-bold leading-none">囍</span>
            </div>
          </div>

          {/* Decorative image */}
          <div className="flex justify-center mb-6">
            <Image
              src="/images/deco.webp"
              alt="Decoration"
              width={120}
              height={60}
              className="object-contain"
            />
          </div>
        </motion.div>

        {/* Two columns: NHÀ TRAI and NHÀ GÁI */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={ANIMATION_VARIANTS.staggerContainer}
          className="grid grid-cols-2 gap-8 md:gap-16"
        >
          {/* Nhà Trai */}
          <motion.div variants={ANIMATION_VARIANTS.fadeInLeft} className="text-center">
            <h3 className="text-sm md:text-base font-semibold text-[var(--color-text-muted)] tracking-widest uppercase mb-3">
              {venue.groomFamily.title}
            </h3>
            <p className="text-sm md:text-base font-bold text-[var(--color-text-primary)] uppercase">
              {venue.groomFamily.fatherName}
            </p>
            <p className="text-sm md:text-base font-bold text-[var(--color-text-primary)] uppercase">
              {venue.groomFamily.motherName}
            </p>
            <p className="text-xs md:text-sm text-[var(--color-text-muted)] mt-2">
              {venue.groomFamily.address}
            </p>
            <button
              onClick={() => setSelectedVenue(venue.groomFamily)}
              className="mt-3 inline-flex items-center gap-1 text-xs text-[var(--color-primary)] hover:underline cursor-pointer"
            >
              <MapPin className="w-3 h-3" />
              Xem bản đồ
            </button>
          </motion.div>

          {/* Nhà Gái */}
          <motion.div variants={ANIMATION_VARIANTS.fadeInRight} className="text-center">
            <h3 className="text-sm md:text-base font-semibold text-[var(--color-text-muted)] tracking-widest uppercase mb-3">
              {venue.brideFamily.title}
            </h3>
            <p className="text-sm md:text-base font-bold text-[var(--color-text-primary)] uppercase">
              {venue.brideFamily.fatherName}
            </p>
            <p className="text-sm md:text-base font-bold text-[var(--color-text-primary)] uppercase">
              {venue.brideFamily.motherName}
            </p>
            <p className="text-xs md:text-sm text-[var(--color-text-muted)] mt-2">
              {venue.brideFamily.address}
            </p>
            <button
              onClick={() => setSelectedVenue(venue.brideFamily)}
              className="mt-3 inline-flex items-center gap-1 text-xs text-[var(--color-primary)] hover:underline cursor-pointer"
            >
              <MapPin className="w-3 h-3" />
              Xem bản đồ
            </button>
          </motion.div>
        </motion.div>

      </div>

      {/* Map Modal */}
      {selectedVenue && (
        <MapModal
          venue={selectedVenue}
          onClose={() => setSelectedVenue(null)}
        />
      )}
    </section>
  );
}
