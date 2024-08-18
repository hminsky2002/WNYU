'use client';

import type { Show } from '@wnyu/spinitron-sdk';
import type { Dispatch, SetStateAction } from 'react';

interface ScheduleItemProps {
  show: Show;
  activeShowId?: number;
  setActiveShowId: Dispatch<SetStateAction<number | undefined>>;
}
export default function ScheduleItem({
  show,
  activeShowId,
  setActiveShowId,
}: ScheduleItemProps) {
  const handleClick = () => {
    setActiveShowId(show.id);
  };

  return (
    <div
      className={`mx-3 cursor-pointer p-5 ${activeShowId === show.id ? 'text-gray-400' : ''} transition-colors hover:text-gray-400`}
      key={show.id}
      onClick={handleClick}
    >
      <div className="text-4xl font-extrabold">{show.title}</div>
      <div className="text-lg">hosted by {show.personas?.[0]?.name}</div>
      <div className="text-lg">
        {new Date(show.start).toLocaleTimeString()} {' - '}
        {new Date(show.end).toLocaleTimeString()}
      </div>
    </div>
  );
}
