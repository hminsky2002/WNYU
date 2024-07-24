'use client';

import { Playlist } from '@wnyu/spinitron-sdk';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useCurrentPlaylist } from '@/app/api';
import UpcomingList from './UpcomingList';

const REFRESH_PLAYLIST_INTERVAL = 5 * 60 * 1000;

export default function ActiveShowPanel() {
  const [playlistResponse, refreshPlaylistResponse] = useCurrentPlaylist();
  const [playlist, setPlaylist] = useState<Playlist>();
  useEffect(() => {
    if (playlistResponse?.items) {
      setPlaylist(playlistResponse.items[0]);
    }
    const intervalId = setInterval(() => {
      refreshPlaylistResponse();
    }, REFRESH_PLAYLIST_INTERVAL);

    return () => {
      clearInterval(intervalId);
    };
  }, [playlistResponse, refreshPlaylistResponse]);

  return (
    <div className="border-4">
      <div className="mx-4 my-4 py-4">
        <p>Now Playing:</p>
        {playlist?.title}
        {playlist?.image ? (
          <Image
            src={playlist?.image}
            width={400}
            height={400}
            alt={playlist?.title || ''}
          />
        ) : null}
      </div>
      <UpcomingList />
    </div>
  );
}
