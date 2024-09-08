import Link from 'next/link';
import ShowDetail from '@/app/components/ShowDetail';
import type { PlaylistsResponse, Show } from '@wnyu/spinitron-sdk';

export default async function Page({ params }: { params: { showId: string } }) {
  const show = (await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/shows/${params.showId}`,
    {
      cache: 'force-cache',
    },
  ).then((res) => res.json())) as Show;
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
          <ShowDetail show={show} />
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
