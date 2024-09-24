import Link from 'next/link';
import ShowDetail from './ShowDetail';
import type { Show, Playlist } from '@wnyu/spinitron-sdk';

interface ShowDetailPanelProps {
  show: Show;
  playlists?: Playlist[];
}

export default async function ShowDetailPanel({
  show,
  playlists,
}: ShowDetailPanelProps) {
  return (
    <div className="flex h-screen flex-col md:overflow-y-scroll pb-24">
      <div className="bg-white">
        <ShowDetail show={show} />
      </div>
      <div className="grid grid-cols-2 gap-4">
        {playlists &&
          playlists.map((playlist) => (
            <Link href={`/playlists/${playlist.id}`} key={playlist.id}>
              <div className="mx-auto w-[10rem] cursor-pointer border-4 border-black p-4 text-center text-sm font-bold transition-all hover:opacity-50">
                {new Date(playlist.start).toDateString()}
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}
