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
    <div className="flex h-[calc(100dvh-4rem)] flex-col p-6 md:overflow-y-scroll">
      <div className="bg-white">
        <ShowDetail show={show} />
      </div>
      <div className="flex flex-wrap justify-between gap-6">
        {playlists &&
          playlists.map((playlist) => (
            <Link href={`/playlists/${playlist.id}`} key={playlist.id}>
              <div className="flex h-[100px] w-[10rem] cursor-pointer flex-col justify-around bg-black p-4 text-center text-sm font-bold text-white transition-all hover:opacity-50 lg:text-base">
                {/* get rid of day of week? */}
                {new Date(playlist.start).toDateString()}
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}
