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
      <div className="mx-4 mt-16 flex h-screen flex-col md:hidden">
        {!activeShow && (
          <div className="h-full w-full pt-4">
            <ScheduleList shows={shows} />
          </div>
        )}

        {activeShow && (
          <div className="h-full">
            <ShowDetailPanel show={activeShow} playlists={playlists} />
          </div>
        )}
      </div>
      <div className="mx-4 mt-16 hidden h-screen flex-row md:flex">
        <div className="h-full w-2/3">
          <ScheduleList shows={shows} />
        </div>

        {activeShow && (
          <div className="fixed right-0 top-20 h-screen w-1/3">
            <ShowDetailPanel show={activeShow} playlists={playlists} />
          </div>
        )}
      </div>
    </>
  );
}
