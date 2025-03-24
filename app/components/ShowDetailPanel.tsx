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
            <div key={playlist.id}>
              <Link className="md:hidden" href={`/playlists/${playlist.id}`}>
                <div className="h4 flex h-full w-full cursor-pointer flex-col justify-around bg-black p-4 text-white transition-all hover:opacity-50 md:h-[100px] md:w-[10rem]">
                  {new Date(playlist.start).toLocaleString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </div>
              </Link>
              <Link
                className="hidden md:block"
                href={`/playlists/${playlist.id}`}
              >
                <div className="flex h-full w-full cursor-pointer flex-col justify-around bg-black p-4 text-white transition-all hover:opacity-50 md:h-[100px] md:w-[10rem]">
                  {new Date(playlist.start).toLocaleString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </div>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
}
