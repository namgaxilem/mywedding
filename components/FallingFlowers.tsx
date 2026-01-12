"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Petal {
  id: number;
  x: number;
  delay: number;
  duration: number;
  size: number;
  rotation: number;
}

export default function FallingFlowers() {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    const generatePetals = () => {
      const newPetals: Petal[] = [];
      for (let i = 0; i < 30; i++) {
        newPetals.push({
          id: i,
          x: Math.random() * 100,
          delay: Math.random() * 10,
          duration: 8 + Math.random() * 8,
          size: 10 + Math.random() * 15,
          rotation: Math.random() * 360,
        });
      }
      setPetals(newPetals);
    };

    generatePetals();
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-50">
      {petals.map((petal) => (
        <motion.div
          key={petal.id}
          className="absolute"
          style={{
            left: `${petal.x}%`,
            top: -30,
          }}
          animate={{
            y: ["0vh", "110vh"],
            x: [0, Math.sin(petal.id) * 100],
            rotate: [petal.rotation, petal.rotation + 360],
          }}
          transition={{
            duration: petal.duration,
            delay: petal.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <svg
            width={petal.size}
            height={petal.size}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2C12 2 14 6 14 9C14 12 12 14 12 14C12 14 10 12 10 9C10 6 12 2 12 2Z"
              fill="#FFB6C1"
              opacity="0.7"
            />
            <path
              d="M12 14C12 14 16 12 19 12C22 12 24 14 24 14C24 14 22 16 19 16C16 16 12 14 12 14Z"
              fill="#FFC0CB"
              opacity="0.6"
            />
            <path
              d="M12 14C12 14 8 12 5 12C2 12 0 14 0 14C0 14 2 16 5 16C8 16 12 14 12 14Z"
              fill="#FFB6C1"
              opacity="0.6"
            />
            <path
              d="M12 14C12 14 14 18 14 21C14 24 12 26 12 26C12 26 10 24 10 21C10 18 12 14 12 14Z"
              fill="#FFC0CB"
              opacity="0.7"
            />
            <circle cx="12" cy="14" r="2" fill="#FFD700" opacity="0.8" />
          </svg>
        </motion.div>
      ))}
    </div>
  );
}
