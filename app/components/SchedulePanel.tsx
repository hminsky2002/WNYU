import ScheduleList from './ScheduleList';
import ShowDetailPanel from './ShowDetailPanel';
import type { Playlist, Show } from '@wnyu/spinitron-sdk';

interface SchedulePanelProps {
  shows: Show[];
  playlists?: Playlist[];
  activeShow?: Show;
}

export default function SchedulePanel({
  shows,
  playlists,
  activeShow,
}: SchedulePanelProps) {
  return (
    <>
      <div className="mt-16 flex h-screen flex-col md:hidden">
        {!activeShow && (
          <div className="h-full w-full">
            <ScheduleList shows={shows} />
          </div>
        )}

        {activeShow && (
          <div className="h-full">
            <ShowDetailPanel show={activeShow} playlists={playlists} />
          </div>
        )}
      </div>
      <div className="mt-16 hidden h-screen flex-row md:flex">
        <div className="h-full w-2/3 border-r-2 border-black">
          <ScheduleList shows={shows} />
        </div>

        {activeShow && (
          <div className="sticky top-0 block h-full w-1/3 overflow-y-auto">
            <ShowDetailPanel show={activeShow} playlists={playlists} />
          </div>
        )}
      </div>
    </>
  );
}
