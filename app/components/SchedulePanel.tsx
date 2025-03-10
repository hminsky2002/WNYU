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
      {/* mobile */}
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
      {/* desktop */}
      <div className="hidden flex-row justify-between md:flex">
        <div className="h-[calc(100dvh-4rem)] w-3/5 overflow-y-scroll p-6">
          <ScheduleList shows={shows} />
        </div>

        {activeShow && (
          <div className="w-2/5 overflow-y-scroll">
            <ShowDetailPanel show={activeShow} playlists={playlists} />
          </div>
        )}
      </div>
    </>
  );
}
