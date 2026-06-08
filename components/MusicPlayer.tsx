"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Music } from "lucide-react";

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio("/music/wedding-song.mp3");
    audio.loop = true;
    audio.volume = 0.5;
    audioRef.current = audio;

    const handleLoadedMetadata = () => {
      setDuration(audio.duration);
    };

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
    };

    const handleCanPlay = () => {
      audio.play().then(() => {
        setIsPlaying(true);
      }).catch(() => {
        console.log("Auto-play blocked, user interaction required");
      });
    };

    audio.addEventListener("loadedmetadata", handleLoadedMetadata);
    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("canplay", handleCanPlay);

    return () => {
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("canplay", handleCanPlay);
      audio.pause();
    };
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(() => {
          console.log("Playback requires user interaction");
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  // SVG progress ring
  const radius = 26;
  const circumference = 2 * Math.PI * radius;
  const progress = duration > 0 ? currentTime / duration : 0;
  const strokeDashoffset = circumference * (1 - progress);

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <button
        onClick={togglePlay}
        className="relative w-14 h-14 rounded-full cursor-pointer focus:outline-none group"
        aria-label={isPlaying ? "Pause music" : "Play music"}
      >
        {/* Progress ring */}
        <svg className="absolute inset-0 w-14 h-14 -rotate-90" viewBox="0 0 56 56">
          <circle
            cx="28"
            cy="28"
            r={radius}
            fill="none"
            stroke="var(--color-border-light)"
            strokeWidth="3"
          />
          <circle
            cx="28"
            cy="28"
            r={radius}
            fill="none"
            stroke="var(--color-secondary)"
            strokeWidth="3"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="transition-[stroke-dashoffset] duration-300"
          />
        </svg>

        {/* Inner circle with icon */}
        <motion.div
          animate={{ rotate: isPlaying ? 360 : 0 }}
          transition={
            isPlaying
              ? { repeat: Infinity, duration: 4, ease: "linear" }
              : { duration: 0 }
          }
          className="absolute inset-[5px] rounded-full bg-[var(--color-primary)] shadow-lg flex items-center justify-center group-hover:bg-[var(--color-primary-dark)] transition-colors"
        >
          <Music className="w-5 h-5 text-white" />
        </motion.div>
      </button>
    </motion.div>
  );
}
