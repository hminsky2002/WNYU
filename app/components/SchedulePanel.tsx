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
      <div className="mx-4 flex flex-col md:hidden">
        {!activeShow && (
          <div className="w-full pt-4">
            <ScheduleList shows={shows} />
          </div>
        )}

        {activeShow && (
          <div className="h-full">
            <ShowDetailPanel show={activeShow} playlists={playlists} />
          </div>
        )}
      </div>
      <div className="mx-4 hidden flex-row md:flex">
        <div className="h-[calc(100dvh-4rem)] w-2/3 overflow-y-scroll pb-5 pt-4">
          <ScheduleList shows={shows} />
        </div>

        {activeShow && (
          <div className="fixed right-0 w-1/3">
            <ShowDetailPanel show={activeShow} playlists={playlists} />
          </div>
        )}
      </div>
    </>
  );
}
