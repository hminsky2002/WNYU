'use client';

import { useState, useRef } from 'react';
import { PlayIcon, PauseIcon } from '@heroicons/react/24/solid';

export default function Stream() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleClick = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.src = process.env.NEXT_PUBLIC_STREAM_URL as string;
        audioRef.current
          .play()
          .then(() => {
            setIsPlaying(true);
          })
          .catch((error) => {
            console.error('Error playing the audio stream:', error);
          });
      }
    }
  };

  return (
    <div className="size-20 md:size-6">
      {isPlaying ? (
        <PauseIcon className="cursor-pointer" onClick={handleClick} />
      ) : (
        <PlayIcon className="cursor-pointer" onClick={handleClick} />
      )}
      <audio
        ref={audioRef}
        src={process.env.NEXT_PUBLIC_STREAM_URL as string}
      />
    </div>
  );
}
