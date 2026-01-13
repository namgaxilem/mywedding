"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Play, Pause, Volume2, VolumeX, Music } from "lucide-react";

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio("/music/wedding-song.mp3");
    audio.loop = true;
    audio.volume = 0.5;
    audioRef.current = audio;

    const handleLoadedMetadata = () => {
      setDuration(audio.duration);
      setIsLoaded(true);
    };

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
    };

    const handleCanPlay = () => {
      // Auto play when loaded
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

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };

  const formatTime = (time: number) => {
    if (isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-[var(--color-border)] shadow-lg"
    >
      <div className="max-w-4xl mx-auto px-4 py-3">
        <div className="flex items-center gap-4">
          {/* Music Icon */}
          <div className="flex-shrink-0">
            <motion.div
              animate={isPlaying ? { rotate: 360 } : { rotate: 0 }}
              transition={{ duration: 3, repeat: isPlaying ? Infinity : 0, ease: "linear" }}
              className="w-10 h-10 rounded-full bg-[var(--color-primary-lighter)] flex items-center justify-center"
            >
              <Music className="w-5 h-5 text-[var(--color-primary)]" />
            </motion.div>
          </div>

          {/* Song Info */}
          <div className="hidden sm:block flex-shrink-0 min-w-0">
            <p className="text-sm font-medium text-[var(--color-text-primary)] truncate">
              Wedding Song
            </p>
            <p className="text-xs text-[var(--color-text-muted)]">
              Nam & Hiền
            </p>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={togglePlay}
              className="w-10 h-10 rounded-full bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              {isPlaying ? (
                <Pause className="w-5 h-5" />
              ) : (
                <Play className="w-5 h-5 ml-0.5" />
              )}
            </button>
          </div>

          {/* Progress Bar */}
          <div className="flex-1 flex items-center gap-2">
            <span className="text-xs text-[var(--color-text-muted)] w-10 text-right">
              {formatTime(currentTime)}
            </span>
            <div className="flex-1 relative h-2 group">
              <div className="absolute inset-0 bg-[var(--color-bg-tertiary)] rounded-full" />
              <div
                className="absolute inset-y-0 left-0 bg-[var(--color-primary)] rounded-full transition-all"
                style={{ width: `${progress}%` }}
              />
              <input
                type="range"
                min="0"
                max={duration || 100}
                value={currentTime}
                onChange={handleSeek}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
              <div
                className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-[var(--color-primary)] rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ left: `calc(${progress}% - 6px)` }}
              />
            </div>
            <span className="text-xs text-[var(--color-text-muted)] w-10">
              {formatTime(duration)}
            </span>
          </div>

          {/* Volume */}
          <button
            onClick={toggleMute}
            className="flex-shrink-0 w-8 h-8 rounded-full hover:bg-[var(--color-bg-tertiary)] flex items-center justify-center transition-colors cursor-pointer"
          >
            {isMuted ? (
              <VolumeX className="w-5 h-5 text-[var(--color-text-muted)]" />
            ) : (
              <Volume2 className="w-5 h-5 text-[var(--color-text-secondary)]" />
            )}
          </button>
        </div>
      </div>
    </motion.div>
  );
}
