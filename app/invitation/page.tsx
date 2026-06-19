"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { WEDDING_CONFIG, PREWEDDING_CONFIG, preweddingImg } from "@/lib/constants";
import { INVITATIONS } from "./_utils";

// Function to normalize Vietnamese characters for search
const normalizeVietnamese = (text: string) => {
  return text
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase();
};

export default function InvitationListPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredInvitations = INVITATIONS.filter((invitation) =>
    normalizeVietnamese(invitation.name).includes(normalizeVietnamese(searchQuery))
  );

  return (
    <div className="min-h-screen bg-cover bg-center bg-fixed" style={{ backgroundImage: `url(${preweddingImg(PREWEDDING_CONFIG.coverImage)})` }}>
      <div className="fixed inset-0 bg-black/40 z-0" />

      <div className="relative z-10 min-h-screen overflow-y-auto">
        <div className="max-w-4xl mx-auto py-12 px-4">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="font-['Playfair_Display'] text-4xl md:text-5xl text-white">
              Thiệp Mời
            </h1>
          </motion.div>

          {/* Search Input */}
          <div className="mb-8">
            <input
              type="text"
              placeholder="Tìm kiếm"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-6 py-4 rounded-xl border-2 border-white/30 bg-white/95 backdrop-blur-sm text-[var(--color-text-primary)] placeholder-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-primary)] transition-colors text-lg"
            />
          </div>

          {filteredInvitations.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-white text-lg">Không tìm thấy thiệp mời nào</p>
              <p className="text-white/70 text-sm mt-2">Vui lòng thử từ khóa khác</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {filteredInvitations.map((invitation, index) => (
                <motion.div
                  key={invitation.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ y: -5 }}
                  className="h-full"
                >
                  <Link
                    href={`/invitation/${invitation.id}`}
                    className="flex h-full min-h-[136px] flex-col justify-center bg-white/95 backdrop-blur-sm rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-white/30 hover:border-[var(--color-primary)]"
                  >
                    <div className="p-6 text-center">
                      <p className="text-sm text-[var(--color-text-muted)]">
                        {invitation.pronoun}
                      </p>
                      <h3 className="font-['Playfair_Display'] text-xl text-[var(--color-primary)] mb-2">
                        {invitation.name}
                      </h3>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Back Button - Bottom Right */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="fixed bottom-8 right-8 z-20"
      >
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-white/95 backdrop-blur-sm rounded-full text-[var(--color-text-primary)] hover:bg-white transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="font-medium">Quay về trang chủ</span>
        </Link>
      </motion.div>
    </div>
  );
}
