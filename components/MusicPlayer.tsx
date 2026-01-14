import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX, Play } from 'lucide-react';

export const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio('https://cdn.pixabay.com/download/audio/2022/10/05/audio_68636ba247.mp3?filename=cinematic-atmosphere-score-1-118556.mp3');
    audioRef.current.loop = true;
    audioRef.current.volume = 0.4;
    
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(e => console.log("Interaction needed", e));
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <button
      onClick={togglePlay}
      className="fixed bottom-8 right-8 z-50 group flex items-center gap-3"
    >
      <div className={`p-4 rounded-full border border-gold-400/30 backdrop-blur-md transition-all duration-300 ${isPlaying ? 'bg-gold-500/20 text-gold-300' : 'bg-midnight-800/50 text-slate-400'}`}>
        {isPlaying ? <Volume2 size={24} /> : <Play size={24} className="ml-1" />}
      </div>
    </button>
  );
};