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
          .catch(() => {});
      }
    }
  };

  return (
    <div>
      {isPlaying ? (
        <PauseIcon
          className="size-10 cursor-pointer md:size-7"
          onClick={handleClick}
        />
      ) : (
        <PlayIcon
          className="size-10 cursor-pointer md:size-7"
          onClick={handleClick}
        />
      )}
      <audio
        ref={audioRef}
        src={process.env.NEXT_PUBLIC_STREAM_URL as string}
      />
    </div>
  );
}
