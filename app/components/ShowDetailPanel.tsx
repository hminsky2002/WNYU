import ShowDetail from './ShowDetail';
import type { Show } from '@wnyu/spinitron-sdk';
import type { Dispatch, SetStateAction } from 'react';

interface ShowDetailPanelProps {
  show?: Show;
  toggleScheduleDisplay: boolean;
  setToggleScheduleDisplay: Dispatch<SetStateAction<boolean>>;
}

export default function ShowDetailPanel({
  show,
  toggleScheduleDisplay,
  setToggleScheduleDisplay,
}: ShowDetailPanelProps) {
  return (
    <div className="hidden md:flex">
      {show && (
        <div className="overflow-y-auto border-l-2 border-black bg-white">
          <ShowDetail
            show={show}
            toggleScheduleDisplay={toggleScheduleDisplay}
            setToggleScheduleDisplay={setToggleScheduleDisplay}
          />
        </div>
      )}
    </div>
  );
}
