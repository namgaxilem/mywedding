"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Heart, Flower2, Sparkles, X, ExternalLink } from "lucide-react";
import { WEDDING_CONFIG } from "@/lib/constants";
import { ANIMATION_VARIANTS } from "@/lib/theme";

export default function VenueSection() {
  const { venue, groom, bride } = WEDDING_CONFIG;
  const [selectedVenue, setSelectedVenue] = useState<typeof WEDDING_CONFIG.venue.brideFamily | null>(null);

  const MapModal = ({ venue, onClose }: { venue: typeof WEDDING_CONFIG.venue.brideFamily; onClose: () => void }) => {
    // Convert Google Maps URL to embed URL
    const embedUrl = venue.mapUrl.replace(
      "https://maps.google.com/?q=",
      "https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q="
    );

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
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <div>
              <h3 className="text-xl font-semibold text-gray-900">{venue.title}</h3>
              <p className="text-gray-600">{venue.familyName}</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>

          {/* Address */}
          <div className="px-6 py-4 bg-gray-50">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-[var(--color-primary)] mt-0.5 flex-shrink-0" />
              <p className="text-gray-700">{venue.address}</p>
            </div>
          </div>

          {/* Map Embed */}
          <div className="relative h-96 md:h-[500px] bg-gray-100">
            <iframe
              src={`https://maps.google.com/maps?q=${encodeURIComponent(venue.address)}&t=m&z=15&output=embed`}
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            
            {/* Overlay with open in new tab button */}
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

  const venues = [
    {
      ...venue.brideFamily,
      icon: Flower2,
      gradient: "from-pink-50 to-rose-50",
      iconColor: "text-rose-500",
      borderColor: "border-rose-200",
    },
    {
      ...venue.groomFamily,
      icon: Sparkles,
      gradient: "from-blue-50 to-indigo-50",
      iconColor: "text-indigo-500",
      borderColor: "border-indigo-200",
    },
  ];

  return (
    <section id="venue" className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={ANIMATION_VARIANTS.staggerContainer}
          className="text-center mb-12"
        >
          <motion.div variants={ANIMATION_VARIANTS.fadeInDown} className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-[var(--color-primary)]"></div>
            <Heart className="w-5 h-5 text-[var(--color-primary)] fill-[var(--color-primary)]" />
            <div className="h-px w-12 bg-[var(--color-primary)]"></div>
          </motion.div>
          
          <motion.h2
            variants={ANIMATION_VARIANTS.fadeInDown}
            className="font-script text-4xl md:text-5xl text-[var(--color-primary)] mb-4"
          >
            {venue.title}
          </motion.h2>
          
          <motion.p
            variants={ANIMATION_VARIANTS.fadeIn}
            className="text-[var(--color-text-secondary)] text-lg max-w-2xl mx-auto"
          >
            {venue.subtitle}
          </motion.p>
        </motion.div>

        {/* Venue Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={ANIMATION_VARIANTS.staggerContainer}
          className="grid md:grid-cols-2 gap-8"
        >
          {venues.map((item, index) => (
            <motion.div
              key={item.title}
              variants={ANIMATION_VARIANTS.slideInUp}
              className={`relative bg-gradient-to-br ${item.gradient} rounded-2xl p-8 border ${item.borderColor} shadow-lg hover:shadow-xl transition-shadow duration-300`}
            >
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-full bg-white shadow-md mb-6 ${item.iconColor}`}>
                <item.icon className="w-7 h-7" />
              </div>

              {/* Title */}
              <h3 className="font-serif text-2xl font-semibold text-[var(--color-text-primary)] mb-1">
                {item.title}
              </h3>
              
              {/* Description */}
              {"description" in item && item.description && (
                <p className="text-sm text-[var(--color-text-muted)] italic mb-2">
                  {item.description}
                </p>
              )}
              
              {/* Family Name */}
              <p className="text-[var(--color-text-secondary)] font-medium mb-4">
                {item.familyName}
              </p>

              {/* Address */}
              <div className="flex items-start gap-3 mb-6">
                <MapPin className="w-5 h-5 text-[var(--color-primary)] mt-0.5 flex-shrink-0" />
                <p className="text-[var(--color-text-secondary)] leading-relaxed">
                  {item.address}
                </p>
              </div>

              {/* Map Button */}
              <button
                onClick={() => setSelectedVenue(item)}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white rounded-full text-[var(--color-primary)] font-medium shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                <MapPin className="w-4 h-4" />
                Xem bản đồ
              </button>

              {/* Decorative Element */}
              <div className="absolute top-4 right-4 opacity-10">
                <Heart className="w-20 h-20 text-[var(--color-primary)]" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Wedding Date Reminder */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={ANIMATION_VARIANTS.fadeIn}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-[var(--color-bg-tertiary)] rounded-full">
            <Heart className="w-4 h-4 text-[var(--color-primary)] fill-[var(--color-primary)]" />
            <span className="text-[var(--color-text-secondary)]">
              Ngày cưới: <strong className="text-[var(--color-primary)]">{WEDDING_CONFIG.weddingDateDisplay}</strong>
            </span>
            <Heart className="w-4 h-4 text-[var(--color-primary)] fill-[var(--color-primary)]" />
          </div>
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
