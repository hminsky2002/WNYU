'use client';

import { Playlist, SpinitronMetadata } from '@wnyu/spinitron-sdk';
import Image from 'next/image';
import Link from 'next/link';
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
        <div className="text-left">
          {playlist?.image && (
            <Image
              src={playlist.image ?? '/placeholder.png'}
              width={400}
              height={400}
              alt={playlist.title || ''}
            />
          )}
          <div className="mt-8 text-4xl font-extrabold">
            {metadata?.playlist_title}
          </div>
          <div className="text-lg font-medium">
            {metadata?.dj
              ? `hosted by: ${metadata.dj.toUpperCase()}`
              : 'unhosted'}
          </div>
          {playlist?.start && playlist?.end && (
            <div className="text-lg font-medium">
              {new Date(playlist.start).toLocaleTimeString()} {' - '}
              {new Date(playlist.end).toLocaleTimeString()}
            </div>
          )}
          {playlist?.episode_description && (
            <div>
              {trimSpinitronDescriptionString(playlist.episode_description)}
            </div>
          )}
        </div>
      ) : (
        <>
          <div className="w-full text-left leading-8">
            <p>NOW PLAYING:</p>
            <div className="text-4xl font-extrabold">
              <Link
                href={metadata?.show_id ? `/schedule/${metadata.show_id}` : `/`}
              >
                {metadata?.playlist_title ?? 'WNYU JUKEBOX'}
              </Link>
            </div>
            <div className="text-l font-light">
              {metadata?.dj ? `Hosted By: ${metadata.dj}` : 'unhosted'}
            </div>
          </div>
          {playlist?.image && (
            <div className="group relative mt-4 h-full w-full bg-gray-500 text-white">
              <Image
                src={metadata?.cover_art_url ?? '/placeholder.png'}
                alt={`${metadata?.song_name} cover image`}
                width={400}
                height={400}
                className={`text-gray-500 opacity-50`}
              />
              <div className="absolute bottom-4 mx-4">
                <div className="text-ellipsis text-4xl font-extrabold">
                  {metadata?.song_name}
                </div>
                <div className="text-ellipsis text-xl">
                  {metadata?.artist_name}
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
}
