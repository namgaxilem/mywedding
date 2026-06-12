"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Music } from "lucide-react";

const SONG_NAME = "Ed Sheeran - Perfect";
const STORAGE_KEY = "wedding_music_playing";

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showTooltip, setShowTooltip] = useState(false);
  const [hasUserInteracted, setHasUserInteracted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio("/music/Ed Sheeran - Perfect.mp3");
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
      // Check localStorage for user's previous preference
      const storedPreference = localStorage.getItem(STORAGE_KEY);
      
      // First time visitor (no stored preference) -> auto play
      // Returning visitor -> respect their last choice
      const shouldPlay = storedPreference === null ? true : storedPreference === "true";
      
      if (shouldPlay) {
        audio.play().then(() => {
          setIsPlaying(true);
        }).catch(() => {
          console.log("Auto-play blocked, user interaction required");
        });
      }
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
      const newPlayingState = !isPlaying;
      
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(() => {
          console.log("Playback requires user interaction");
        });
      }
      
      setIsPlaying(newPlayingState);
      setHasUserInteracted(true);
      
      // Store user's preference in localStorage
      localStorage.setItem(STORAGE_KEY, String(newPlayingState));
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
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {/* Song name tooltip */}
      {showTooltip && (
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          className="absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap bg-white/95 backdrop-blur-sm text-[var(--color-text-primary)] text-xs font-medium px-3 py-1.5 rounded-full shadow-md border border-[var(--color-border-light)]"
        >
          {SONG_NAME}
        </motion.div>
      )}

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

        {/* Inner circle with icon - uses CSS animation so it preserves rotation on pause */}
        <div
          className="absolute inset-[5px] rounded-full bg-[var(--color-primary)] shadow-lg flex items-center justify-center group-hover:bg-[var(--color-primary-dark)] transition-colors"
          style={{
            animation: "spin 4s linear infinite",
            animationPlayState: isPlaying ? "running" : "paused",
          }}
        >
          <Music className="w-5 h-5 text-white" />
        </div>
      </button>

      <style jsx>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </motion.div>
  );
}
