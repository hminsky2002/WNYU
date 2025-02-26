import { ChevronLeftIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import { trimSpinitronDescriptionString } from '@/app/utils';
import type { Persona, Playlist, SpinsResponse } from '@wnyu/spinitron-sdk';

type PlaylistParams = Promise<{ playlistId: string }>;

export default async function Page({ params }: { params: PlaylistParams }) {
  const { playlistId } = await params;

  const playlist = (await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/playlists/${playlistId}`,
    {
      cache: 'force-cache',
    },
  ).then((res) => res.json())) as Playlist;
  const spins: SpinsResponse = (await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/spins?playlist_id=${playlistId}&count=100`,
    {
      cache: 'force-cache',
    },
  ).then((res) => res.json())) as SpinsResponse;
  const persona: Persona = (await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/personas/${playlist.persona_id}`,
    {
      cache: 'force-cache',
    },
  ).then((res) => res.json())) as Persona;

  return (
    <div className="mt-4 h-[calc(100dvh-4rem)] md:flex">
      <div className="md:w-1/2">
        <div className="px-8 md:fixed md:m-8 md:w-[50%]">
          <div className="mb-2 flex gap-x-2">
            <Link href={`/schedule/${playlist.show_id}`} className="md:block">
              <ChevronLeftIcon className="mr-6 size-6" />
            </Link>
            <div className="text-xl font-bold md:font-medium">
              {new Date(playlist.start).toDateString()}
            </div>
          </div>
          <div className="text-6xl font-extrabold md:pb-4 md:text-8xl">
            {playlist.title}
          </div>
          <div className="text-xl md:text-2xl">{`hosted by ${persona.name}`}</div>
          <div className="mb-2 text-xl font-thin md:text-2xl">
            {new Date(playlist.start).toLocaleTimeString('en-US', {
              hour: 'numeric',
              minute: 'numeric',
              hour12: true,
            })}{' '}
            {' - '}
            {new Date(playlist.end).toLocaleTimeString('en-US', {
              hour: 'numeric',
              minute: 'numeric',
              hour12: true,
            })}
          </div>
          <div className="hidden text-xl md:block">
            {trimSpinitronDescriptionString(playlist.description)}
          </div>
        </div>
      </div>
      <div className="flex flex-col px-4 pt-8 text-xl md:w-1/2 md:px-20">
        {spins.items &&
          spins.items.map((spin, index) => (
            <div className="mx-2 flex gap-x-2 pb-4" key={spin.id}>
              <div>{index + 1}.</div>
              <div>
                {`${spin.song} - 
                  ${spin.artist}, 
                  ${spin.release}
                  (${spin.label})
                  ${spin.released}
                  `}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
