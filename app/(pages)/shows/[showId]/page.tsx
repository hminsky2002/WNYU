import Link from 'next/link';
import Image from 'next/image';
import { trimSpinitronDescriptionString } from '@/app/utils';
import type { Persona, PlaylistsResponse, Show } from '@wnyu/spinitron-sdk';

export default async function Page({ params }: { params: { showId: string } }) {
  const show = (await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/shows/${params.showId}`,
    {
      cache: 'force-cache',
    },
  ).then((res) => res.json())) as Show;
  const persona: Persona = (await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/personas/${show.personas?.[0].id}?expand=personas`,
    {
      cache: 'force-cache',
    },
  ).then((res) => res.json())) as Persona;
  const playlists: PlaylistsResponse = (await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/playlists?show_id=${params.showId}`,
    {
      cache: 'force-cache',
    },
  ).then((res) => res.json())) as PlaylistsResponse;
  return (
    <>
      <div className="mx-auto max-w-[800px]">
        <div className="mx-auto max-w-[85%]">
          <Image
            src={show.image || ''}
            alt={` cover image`}
            priority
            width={500}
            height={400}
          />
          <div className="text-4xl font-extrabold">{show.title}</div>
          <div className="text-xl">{`hosted by ${persona.name}`}</div>
          <div className="text-xl">
            {new Date(show.start).toLocaleTimeString()} {' - '}
            {new Date(show.end).toLocaleTimeString()}
          </div>
          <div className="mt-4 text-lg">
            {trimSpinitronDescriptionString(show.description)}
          </div>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-4">
          {playlists.items &&
            playlists.items.map((playlist) => (
              <div
                className="mx-auto w-[175px] cursor-pointer border-4 border-black p-4 text-center text-sm font-bold transition-all hover:opacity-50"
                key={playlist.id}
              >
                <Link href={`/playlists/${playlist.id}`}>
                  {new Date(playlist.start).toDateString()}
                </Link>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
