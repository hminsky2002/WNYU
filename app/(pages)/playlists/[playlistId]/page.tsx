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
    <div className="h-[calc(100dvh-4rem)] md:flex md:items-start">
      <div className="md:w-1/2">
        <div className="mr-auto overflow-y-scroll p-6 pb-0 md:fixed md:w-[50%] md:pb-6">
          <Link
            href={`/schedule/${playlist.show_id}`}
            className="flex flex-row gap-x-2 pb-2"
          >
            <ChevronLeftIcon className="mr-6 w-6" />

            <p>{new Date(playlist.start).toDateString()}</p>
          </Link>
          <h1 className="relative -z-10 max-w-full break-words md:pb-4">
            {playlist.title}
          </h1>
          <p>{`hosted by ${persona.name}`}</p>
          <p className="pb-2">
            {new Date(playlist.start).toLocaleTimeString('en-US', {
              hour: 'numeric',
              minute: 'numeric',
              hour12: true,
            })}
            {' - '}
            {new Date(playlist.end).toLocaleTimeString('en-US', {
              hour: 'numeric',
              minute: 'numeric',
              hour12: true,
            })}
          </p>
          <p className="hidden max-h-[400px] max-w-[600px] md:block">
            {trimSpinitronDescriptionString(playlist.description)}
          </p>
        </div>
      </div>
      <div className="flex flex-col p-6 md:w-1/2">
        {spins.items &&
          spins.items.map((spin, index) => (
            <div className="mx-2 flex gap-x-2 pb-4" key={spin.id}>
              <p>{index + 1}.</p>
              <p>
                {`${spin.song} - 
                  ${spin.artist}, 
                  ${spin.release}
                  (${spin.label})
                  ${spin.released}
                  `}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
}
