import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import { urlFor } from '@/sanity/lib/image';
import { PODCAST_QUERYResult } from '../../sanity.types';
import SpotifyEmbedList from './SpotifyEmbedList';

export function Podcast({ podcast }: { podcast: PODCAST_QUERYResult }) {
  const { name, host, picture, description, spotifyEpisodeURLs } =
    podcast || {};
  return (
    <div className="mx-auto flex max-w-[1200px] flex-col gap-8 space-y-6 p-4">
      <div className="">
        {picture?.asset?._ref && host && name ? (
          <div className="mb-4 flex flex-col gap-4 md:flex-row">
            <Image
              className="h-1/2 w-full object-cover drop-shadow-2xl md:w-1/4"
              src={urlFor(picture?.asset?._ref).width(400).height(400).url()}
              width={400}
              height={400}
              alt={name || ''}
            />
            <div className="flex-grow">
              <div className="text-6xl font-extrabold md:text-8xl">{name}</div>
              <div className="text-4xl font-thin md:text-6xl">with {host}</div>
            </div>
          </div>
        ) : null}

        {description ? (
          <div className="prose max-w-none text-xl font-light md:mx-2 md:text-3xl">
            <PortableText value={description} />
          </div>
        ) : null}
      </div>
      {spotifyEpisodeURLs ? (
        <div className="">
          <SpotifyEmbedList spotifyEpisodeURLs={spotifyEpisodeURLs} />{' '}
        </div>
      ) : null}
    </div>
  );
}
