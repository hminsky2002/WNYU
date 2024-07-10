'use client';

import type { Show } from '@wnyu/spinitron-sdk';
import type { Dispatch, SetStateAction } from 'react';

interface ScheduleItemProps {
  show: Show;
  setActiveShowId: Dispatch<SetStateAction<number | undefined>>;
}
export default function ScheduleItem({
  show,
  setActiveShowId,
}: ScheduleItemProps) {
  const handleClick = () => {
    setActiveShowId(show.id);
  };
  return (
    <div
      className="mx-3 border-2 border-neutral-950 p-5"
      key={show.id}
      onClick={handleClick}
    >
      <p>{show.title}</p>
      <p>{show.personas?.[0]?.name}</p>
      <div>
        {new Date(show.start).toLocaleTimeString()} {' - '}
        {new Date(show.end).toLocaleTimeString()}
      </div>
    </div>
  );
}
