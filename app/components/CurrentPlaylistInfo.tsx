'use client';

import { Playlist, SpinitronMetadata } from '@wnyu/spinitron-sdk';
import Image from 'next/image';
import { trimSpinitronDescriptionString } from '../utils';

interface CurrentPlaylistInfoProps {
  playlist?: Playlist;
  metadata?: SpinitronMetadata;
  dropdown?: boolean;
}

export default function CurrentPlaylistInfo({
  playlist,
  metadata,
  dropdown = false,
}: CurrentPlaylistInfoProps) {
  return (
    <>
      {dropdown ? (
        <>
          {playlist?.image && (
            <Image
              src={playlist.image}
              width={400}
              height={400}
              alt={playlist.title || ''}
            />
          )}
          <div className="text-xl">{metadata?.playlist_title}</div>
          <div className="text-sm">
            {metadata?.dj
              ? `hosted by: ${metadata.dj.toUpperCase()}`
              : 'unhosted'}
          </div>
          {playlist?.start && playlist?.end && (
            <div>
              {new Date(playlist.start).toLocaleTimeString()} {' - '}
              {new Date(playlist.end).toLocaleTimeString()}
            </div>
          )}
          {playlist?.episode_description && (
            <div>
              {trimSpinitronDescriptionString(playlist.episode_description)}
            </div>
          )}
        </>
      ) : (
        <>
          <div className="w-full text-left">
            <p>NOW PLAYING:</p>
            <div className="text-4xl font-extrabold">
              {metadata?.playlist_title ?? 'WNYU JUKEBOX'}
            </div>
            <div className="text-l font-light">
              {metadata?.dj ? `Hosted By: ${metadata.dj}` : 'unhosted'}
            </div>
          </div>
          {playlist?.image && (
            <Image
              src={playlist.image}
              width={400}
              height={400}
              alt={playlist.title || ''}
            />
          )}
        </>
      )}
    </>
  );
}
