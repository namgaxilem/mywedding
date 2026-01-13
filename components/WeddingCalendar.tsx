"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { WEDDING_CONFIG } from "@/lib/constants";
import { ANIMATION_VARIANTS } from "@/lib/theme";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function WeddingCalendar() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date());

  const weddingDate = new Date(WEDDING_CONFIG.weddingDate);

  useEffect(() => {
    setCurrentMonth(new Date(weddingDate.getFullYear(), weddingDate.getMonth(), 1));
    
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = weddingDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date: Date) => {
    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    return firstDay === 0 ? 6 : firstDay - 1;
  };

  const monthNames = [
    "THÁNG 1", "THÁNG 2", "THÁNG 3", "THÁNG 4", "THÁNG 5", "THÁNG 6",
    "THÁNG 7", "THÁNG 8", "THÁNG 9", "THÁNG 10", "THÁNG 11", "THÁNG 12"
  ];

  const dayNames = ["Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7", "CN"];

  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(currentMonth);
    const firstDay = getFirstDayOfMonth(currentMonth);
    const days = [];

    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="p-2"></div>);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const isWeddingDay =
        day === weddingDate.getDate() &&
        currentMonth.getMonth() === weddingDate.getMonth() &&
        currentMonth.getFullYear() === weddingDate.getFullYear();

      days.push(
        <div
          key={day}
          className={`p-2 text-center text-sm transition-all ${
            isWeddingDay
              ? "bg-[var(--color-primary)] text-white rounded-full font-bold scale-110"
              : "text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-tertiary)] rounded-full"
          }`}
        >
          {day}
        </div>
      );
    }

    return days;
  };

  const countdownItems = [
    { value: timeLeft.days, label: "Ngày" },
    { value: timeLeft.hours, label: "Giờ" },
    { value: timeLeft.minutes, label: "Phút" },
    { value: timeLeft.seconds, label: "Giây", hasHeart: true },
  ];

  return (
    <section id="calendar" className="py-20 md:py-32 bg-[var(--color-bg-secondary)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={ANIMATION_VARIANTS.staggerContainer}
          className="bg-white rounded-3xl shadow-xl overflow-hidden"
        >
          {/* Calendar Header */}
          <motion.div
            variants={ANIMATION_VARIANTS.fadeInDown}
            className="bg-[var(--color-bg-tertiary)] p-6 text-center border-b border-[var(--color-border-light)]"
          >
            <h2 className="text-[var(--color-text-secondary)] text-lg tracking-widest">
              {monthNames[currentMonth.getMonth()]} / {currentMonth.getFullYear()}
            </h2>
          </motion.div>

          {/* Calendar Grid */}
          <motion.div variants={ANIMATION_VARIANTS.fadeIn} className="p-6">
            {/* Day Names */}
            <div className="grid grid-cols-7 gap-1 mb-4">
              {dayNames.map((day) => (
                <div
                  key={day}
                  className="p-2 text-center text-xs font-medium text-[var(--color-text-muted)] uppercase tracking-wider"
                >
                  {day}
                </div>
              ))}
            </div>

            {/* Calendar Days */}
            <div className="grid grid-cols-7 gap-1">{renderCalendar()}</div>
          </motion.div>

          {/* Countdown Section */}
          <motion.div
            variants={ANIMATION_VARIANTS.slideInUp}
            className="bg-[var(--color-bg-tertiary)] p-8 border-t border-[var(--color-border-light)]"
          >
            <div className="grid grid-cols-4 gap-4">
              {countdownItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  variants={ANIMATION_VARIANTS.bounceIn}
                  className="text-center relative"
                >
                  <div className="text-4xl md:text-5xl font-light text-[var(--color-text-primary)] mb-1">
                    {String(item.value).padStart(2, "0")}
                  </div>
                  <div className="text-xs md:text-sm text-[var(--color-text-muted)] uppercase tracking-wider">
                    {item.label}
                  </div>
                  {item.hasHeart && (
                    <Heart
                      className="absolute -top-2 -right-2 w-5 h-5 text-red-400 fill-red-400"
                      style={{ animation: "pulse 1.5s ease-in-out infinite" }}
                    />
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.2); }
        }
      `}</style>
    </section>
  );
}
