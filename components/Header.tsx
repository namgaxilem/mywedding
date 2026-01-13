"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { WEDDING_CONFIG } from "@/lib/constants";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-sm shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#"
            className={`font-script text-xl md:text-2xl transition-colors cursor-pointer ${
              isScrolled ? "text-[var(--color-primary)]" : "text-white"
            }`}
          >
            {WEDDING_CONFIG.groom.shortName} & {WEDDING_CONFIG.bride.shortName}
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {WEDDING_CONFIG.navigation.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-colors hover:text-[var(--color-primary)] cursor-pointer ${
                  isScrolled ? "text-[var(--color-text-primary)]" : "text-white"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* RSVP Button */}
          <button 
            onClick={() => scrollToSection('rsvp')}
            className="hidden md:block bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white px-6 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer"
          >
            Xác Nhận Tham Dự
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 transition-colors cursor-pointer ${
              isScrolled ? "text-[var(--color-text-primary)]" : "text-white"
            }`}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-white shadow-lg"
        >
          <nav className="flex flex-col py-4">
            {WEDDING_CONFIG.navigation.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="px-6 py-3 text-[var(--color-text-primary)] hover:bg-[var(--color-bg-tertiary)] hover:text-[var(--color-primary)] text-left cursor-pointer"
              >
                {item.label}
              </button>
            ))}
            <div className="px-6 py-3">
              <button 
                onClick={() => scrollToSection('rsvp')}
                className="w-full bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white px-6 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer"
              >
                Xác Nhận Tham Dự
              </button>
            </div>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
}
