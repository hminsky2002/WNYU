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
    <div className="flex h-[calc(100dvh-4rem)] flex-col pt-4 md:overflow-y-scroll md:p-6">
      <div className="bg-white">
        <ShowDetail show={show} />
      </div>
      <div className="mx-auto flex flex-col flex-wrap gap-6 pb-6 md:flex-row md:justify-between">
        {playlists &&
          playlists.map((playlist) => (
            <Link href={`/playlists/${playlist.id}`} key={playlist.id}>
              <div className="flex h-20 w-full cursor-pointer flex-col justify-around bg-black p-4 text-center text-sm font-bold text-white transition-all hover:opacity-50 md:h-[100px] md:w-[10rem] lg:text-base">
                {/* get rid of day of week? */}
                {new Date(playlist.start).toLocaleString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric',
                })}
                {/* How can I add a style to the last one... (mr-auto so it aligns left) */}
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}
