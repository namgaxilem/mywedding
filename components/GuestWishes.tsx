"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Heart, Loader2, MessageCircle } from "lucide-react";
import { collection, addDoc, query, orderBy, onSnapshot, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { ANIMATION_VARIANTS } from "@/lib/theme";

interface Wish {
  id: string;
  name: string;
  message: string;
  createdAt: Date | null;
}

export default function GuestWishes() {
  const [wishes, setWishes] = useState<Wish[]>([]);
  const [formData, setFormData] = useState({ name: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  // Fetch wishes from Firebase
  useEffect(() => {
    const wishesRef = collection(db, "wishes");
    const q = query(wishesRef, orderBy("createdAt", "desc"));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const wishesData: Wish[] = [];
      snapshot.forEach((doc) => {
        const data = doc.data();
        wishesData.push({
          id: doc.id,
          name: data.name,
          message: data.message,
          createdAt: data.createdAt?.toDate() || null,
        });
      });
      setWishes(wishesData);
    }, (error) => {
      console.error("Error fetching wishes:", error);
    });

    return () => unsubscribe();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.message.trim()) {
      setStatus("error");
      setErrorMessage("Vui lòng nhập đầy đủ tên và lời chúc");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      await addDoc(collection(db, "wishes"), {
        name: formData.name.trim(),
        message: formData.message.trim(),
        createdAt: serverTimestamp(),
      });

      setStatus("success");
      setFormData({ name: "", message: "" });
      
      // Reset success status after 3 seconds
      setTimeout(() => setStatus("idle"), 3000);
    } catch (error) {
      console.error("Error adding wish:", error);
      setStatus("error");
      setErrorMessage("Không thể gửi lời chúc. Vui lòng thử lại.");
    }
  };

  const formatDate = (date: Date | null) => {
    if (!date) return "";
    return date.toLocaleDateString("vi-VN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <section id="guest-wishes" className="py-20 md:py-32 bg-gradient-to-b from-[var(--color-bg-secondary)] to-[var(--color-bg-primary)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={ANIMATION_VARIANTS.fadeInUp}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="font-script text-4xl md:text-5xl text-[var(--color-primary)] mb-4">
            Sổ Lưu Bút
          </h2>
          <p className="text-[var(--color-text-secondary)] text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Hãy để lại những lời chúc tốt đẹp nhất cho cặp đôi trong ngày trọng đại
          </p>
          <div className="w-24 h-0.5 bg-[var(--color-primary-light)] mx-auto mt-6" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Form Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={ANIMATION_VARIANTS.fadeInLeft}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-[var(--color-border-light)]">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-[var(--color-primary-lighter)] flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-[var(--color-primary)]" />
                </div>
                <h3 className="font-serif text-xl text-[var(--color-text-primary)]">
                  Gửi Lời Chúc
                </h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="wish-name"
                    className="block text-sm font-medium text-[var(--color-text-primary)] mb-2"
                  >
                    Họ và Tên <span className="text-[var(--color-primary)]">*</span>
                  </label>
                  <input
                    type="text"
                    id="wish-name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Nhập tên của bạn"
                    className="w-full px-4 py-3 rounded-xl border border-[var(--color-border)] bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-light)] focus:border-transparent transition-all text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)]"
                    disabled={status === "loading"}
                  />
                </div>

                <div>
                  <label
                    htmlFor="wish-message"
                    className="block text-sm font-medium text-[var(--color-text-primary)] mb-2"
                  >
                    Lời Chúc <span className="text-[var(--color-primary)]">*</span>
                  </label>
                  <textarea
                    id="wish-message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Viết lời chúc của bạn..."
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-[var(--color-border)] bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-light)] focus:border-transparent transition-all text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] resize-none"
                    disabled={status === "loading"}
                  />
                </div>

                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 text-green-600 bg-green-50 px-4 py-3 rounded-xl"
                  >
                    <Heart className="w-5 h-5 fill-current" />
                    <span>Cảm ơn bạn đã gửi lời chúc!</span>
                  </motion.div>
                )}

                {status === "error" && errorMessage && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-600 bg-red-50 px-4 py-3 rounded-xl text-sm"
                  >
                    {errorMessage}
                  </motion.div>
                )}

                <motion.button
                  type="submit"
                  disabled={status === "loading"}
                  whileHover={{ scale: status === "loading" ? 1 : 1.02 }}
                  whileTap={{ scale: status === "loading" ? 1 : 0.98 }}
                  className="w-full py-3 px-6 bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white rounded-xl font-medium transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Đang gửi...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Gửi Lời Chúc
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Wishes Display Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={ANIMATION_VARIANTS.fadeInRight}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-serif text-xl text-[var(--color-text-primary)]">
                Lời Chúc Từ Khách Mời
              </h3>
              {wishes.length > 0 && (
                <span className="text-sm text-[var(--color-text-muted)]">
                  {wishes.length} lời chúc
                </span>
              )}
            </div>

            <div className="max-h-[500px] overflow-y-auto space-y-4 pr-2 scrollbar-thin">
              <AnimatePresence mode="popLayout">
                {wishes.length === 0 ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center py-12 text-[var(--color-text-muted)]"
                  >
                    <Heart className="w-12 h-12 mx-auto mb-4 opacity-30" />
                    <p>Hãy là người đầu tiên gửi lời chúc!</p>
                  </motion.div>
                ) : (
                  wishes.map((wish, index) => (
                    <motion.div
                      key={wish.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ delay: index * 0.05 }}
                      className="bg-white rounded-xl p-4 shadow-sm border border-[var(--color-border-light)]"
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-full bg-[var(--color-primary-lighter)] flex items-center justify-center flex-shrink-0">
                          <span className="text-[var(--color-primary)] font-medium text-sm">
                            {wish.name.charAt(0).toUpperCase()}
                          </span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-2 mb-1">
                            <h4 className="font-medium text-[var(--color-text-primary)] truncate">
                              {wish.name}
                            </h4>
                            {wish.createdAt && (
                              <span className="text-xs text-[var(--color-text-muted)] flex-shrink-0">
                                {formatDate(wish.createdAt)}
                              </span>
                            )}
                          </div>
                          <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
                            {wish.message}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
