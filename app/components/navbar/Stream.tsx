'use client';

import { SpinitronMetadata } from '@wnyu/spinitron-sdk';
import { useState, useEffect } from 'react';
import { useMetadata } from '@/app/api';

const REFRESH_STREAM_INTERVAL = 5000;

export default function Stream() {
  const [metadataResponse, refreshMetadata] = useMetadata();
  const [metadata, setMetadata] = useState<SpinitronMetadata>();
  useEffect(() => {
    if (metadataResponse) {
      setMetadata(metadataResponse);
    }
    const intervalId = setInterval(() => {
      refreshMetadata();
    }, REFRESH_STREAM_INTERVAL);

    return () => {
      clearInterval(intervalId);
    };
  }, [metadataResponse, refreshMetadata]);

  return (
    <div>
      <audio controls src={process.env.NEXT_PUBLIC_STREAM_URL as string} />
      <p>{metadata?.song_name}</p>
      <p>{metadata?.artist_name}</p>
      <p>{metadata?.dj}</p>
      <p>{metadata?.playlist_tile}</p>
      <p></p>
    </div>
  );
}
