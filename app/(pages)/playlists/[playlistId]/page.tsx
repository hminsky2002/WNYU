import { ChevronLeftIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import { trimSpinitronDescriptionString } from '@/app/utils';
import type { Persona, Playlist, SpinsResponse } from '@wnyu/spinitron-sdk';

export default async function Page({
  params,
}: {
  params: { playlistId: string };
}) {
  const playlist = (await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/playlists/${params.playlistId}`,
    {
      cache: 'force-cache',
    },
  ).then((res) => res.json())) as Playlist;
  const spins: SpinsResponse = (await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/spins?playlist_id=${params.playlistId}`,
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
    <div className="md:grid md:grid-cols-6">
      <div className="md:col-span-3">
        <div className="mx-auto px-8 md:fixed md:m-8 md:w-[50%]">
          <div className="flex gap-x-2">
            <Link href="/schedule" className="hidden md:block">
              <ChevronLeftIcon className="mr-6 size-6" />
            </Link>
            <div className="text-xl font-bold md:font-medium">
              {new Date(playlist.start).toDateString()}
            </div>
          </div>
          <div className="text-4xl font-extrabold md:pb-4 md:text-8xl">
            {playlist.title}
          </div>
          <div className="text-xl md:text-2xl">{`hosted by ${persona.name}`}</div>
          <div className="text-xl md:text-2xl">
            {new Date(playlist.start).toLocaleTimeString()} {' - '}
            {new Date(playlist.end).toLocaleTimeString()}
          </div>
          <div className="hidden text-xl md:block">
            {trimSpinitronDescriptionString(playlist.description)}
          </div>
        </div>
      </div>
      <div className="mx-auto my-8 flex max-w-[80%] flex-col gap-y-4 text-xl md:col-span-3 md:h-screen md:w-full">
        {spins.items &&
          spins.items.map((spin, index) => (
            <div className="border-w mx-2 flex gap-2" key={spin.id}>
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
