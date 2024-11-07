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
    <div className="flex h-screen flex-col md:overflow-y-scroll">
      <div className="bg-white">
        <ShowDetail show={show} />
      </div>
      <div className="grid grid-cols-2 gap-4 pb-6 pt-6">
        {playlists &&
          playlists.map((playlist) => (
            <Link href={`/playlists/${playlist.id}`} key={playlist.id}>
              <div className="mx-auto w-[10rem] cursor-pointer bg-black p-4 text-center text-sm font-bold text-white transition-all hover:opacity-50">
                {/* get rid of day of week? */}
                {new Date(playlist.start).toDateString()}
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}
