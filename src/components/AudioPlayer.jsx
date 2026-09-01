import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  // Royalty-free Indian classical Shehnai/Sitar traditional music stream
  const audioSrc = "https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=indian-instrumental-flute-traditional-112348.mp3";

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((err) => {
        console.log("Audio play blocked by browser policy:", err);
      });
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <audio ref={audioRef} src={audioSrc} loop preload="auto" />
      <button
        onClick={togglePlay}
        title={isPlaying ? "Mute Background Music" : "Play Wedding Music"}
        className={`flex items-center gap-2 px-4 py-3 rounded-full shadow-2xl transition-all duration-300 border ${
          isPlaying
            ? 'bg-amber-900/90 text-amber-200 border-amber-500/50 shadow-amber-900/30'
            : 'bg-white/90 text-amber-800 border-amber-300 shadow-amber-950/10'
        } backdrop-blur-md hover:scale-105`}
        style={{
          boxShadow: isPlaying ? '0 0 20px rgba(212, 175, 55, 0.4)' : '0 4px 15px rgba(0,0,0,0.1)'
        }}
      >
        <div className={`relative ${isPlaying ? 'animate-spin' : ''}`} style={{ animationDuration: '6s' }}>
          <Music className="w-5 h-5 text-amber-500" />
        </div>
        <span className="text-xs font-semibold tracking-wider font-royal">
          {isPlaying ? 'MUSIC ON' : 'PLAY MUSIC'}
        </span>
        {isPlaying ? (
          <Volume2 className="w-4 h-4 text-amber-300 animate-pulse" />
        ) : (
          <VolumeX className="w-4 h-4 text-amber-600" />
        )}
      </button>
    </div>
  );
}
