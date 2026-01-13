"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { WEDDING_CONFIG } from "@/lib/constants";
import { ANIMATION_VARIANTS } from "@/lib/theme";

export default function WishesSection() {
  return (
    <section id="wishes" className="py-20 md:py-32 bg-gradient-to-b from-[var(--color-bg-secondary)] to-[var(--color-bg-primary)]">
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
            {WEDDING_CONFIG.wishes.title}
          </h2>
          <p className="text-[var(--color-text-secondary)] text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            {WEDDING_CONFIG.wishes.subtitle}
          </p>
          <div className="w-24 h-0.5 bg-[var(--color-primary-light)] mx-auto mt-6" />
        </motion.div>

        {/* Bank Accounts Grid */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {WEDDING_CONFIG.wishes.bankAccounts.map((account, index) => (
            <motion.div
              key={account.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={ANIMATION_VARIANTS.rotateIn}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-[var(--color-border-light)] text-center"
            >
              <h3 className="font-script text-xl md:text-2xl text-[var(--color-text-primary)] mb-6">
                {account.title}
              </h3>

              {/* QR Code Placeholder */}
              <div className="relative w-48 h-48 mx-auto mb-6 bg-gradient-to-br from-[var(--color-bg-secondary)] to-[var(--color-bg-tertiary)] rounded-xl overflow-hidden">
                <Image
                  src={account.qrCode}
                  alt={`QR Code - ${account.title}`}
                  fill
                  className="object-contain p-4"
                />
                {/* Placeholder for missing QR */}
                <div className="absolute inset-0 flex items-center justify-center bg-[var(--color-bg-secondary)]">
                  <div className="text-center">
                    <div className="w-32 h-32 border-2 border-dashed border-[var(--color-border)] rounded-lg flex items-center justify-center mx-auto">
                      <span className="text-[var(--color-text-muted)] text-xs">QR Code</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-2 text-[var(--color-text-secondary)]">
                <p className="font-medium text-[var(--color-primary)]">{account.bankName}</p>
                <p className="text-lg font-semibold tracking-wider">
                  {account.accountNumber}
                </p>
                <p className="text-sm text-[var(--color-text-muted)]">{account.accountHolder}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Message */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={ANIMATION_VARIANTS.fadeIn}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-[var(--color-text-muted)] text-sm italic">
            "Tình yêu không làm cho thế giới quay tròn. Tình yêu là những gì làm cho chuyến đi đáng giá."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
