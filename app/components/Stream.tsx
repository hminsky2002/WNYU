'use client';

import { useState, useEffect } from 'react';
import { MetaData } from '../types';

export default function Stream() {
  const [currentSong, setCurrentSong] = useState('');
  useEffect(() => {
    const eventSource = new EventSource(
      `${process.env.NEXT_PUBLIC_STREAM_URL as string}/metadata`,
    );
    eventSource.onmessage = (event) => {
      const metadata = JSON.parse(event.data as string) as MetaData;
      const artistTitle = metadata.metadata;
      setCurrentSong(artistTitle);
    };
    return () => eventSource.close();
  }, []);

  return (
    <div>
      <audio controls src={process.env.NEXT_PUBLIC_STREAM_URL as string} />
      <p>{currentSong}</p>
      <p></p>
    </div>
  );
}
