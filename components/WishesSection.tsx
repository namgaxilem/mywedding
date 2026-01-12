"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { WEDDING_CONFIG } from "@/lib/constants";

export default function WishesSection() {
  return (
    <section id="wishes" className="py-20 md:py-32 bg-gradient-to-b from-pink-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-script text-4xl md:text-5xl text-pink-600 mb-4">
            {WEDDING_CONFIG.wishes.title}
          </h2>
          <p className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            {WEDDING_CONFIG.wishes.subtitle}
          </p>
          <div className="w-24 h-0.5 bg-pink-300 mx-auto mt-6" />
        </motion.div>

        {/* Bank Accounts Grid */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {WEDDING_CONFIG.wishes.bankAccounts.map((account, index) => (
            <motion.div
              key={account.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-pink-100 text-center"
            >
              <h3 className="font-script text-xl md:text-2xl text-gray-800 mb-6">
                {account.title}
              </h3>

              {/* QR Code Placeholder */}
              <div className="relative w-48 h-48 mx-auto mb-6 bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl overflow-hidden">
                <Image
                  src={account.qrCode}
                  alt={`QR Code - ${account.title}`}
                  fill
                  className="object-contain p-4"
                />
                {/* Placeholder for missing QR */}
                <div className="absolute inset-0 flex items-center justify-center bg-pink-50">
                  <div className="text-center">
                    <div className="w-32 h-32 border-2 border-dashed border-pink-300 rounded-lg flex items-center justify-center mx-auto">
                      <span className="text-pink-400 text-xs">QR Code</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-2 text-gray-600">
                <p className="font-medium text-pink-600">{account.bankName}</p>
                <p className="text-lg font-semibold tracking-wider">
                  {account.accountNumber}
                </p>
                <p className="text-sm text-gray-500">{account.accountHolder}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Message */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-500 text-sm italic">
            "Tình yêu không làm cho thế giới quay tròn. Tình yêu là những gì làm cho chuyến đi đáng giá."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
