'use client';

import Link from 'next/link';
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
    <>
      <div
        className={`mx-3 block cursor-pointer p-5 ${activeShowId === show.id ? 'text-gray-400' : ''} transition-colors hover:text-gray-400 md:hidden`}
        key={show.id}
      >
        <Link href={`shows/${show.id}`}>
          <div className="text-4xl font-extrabold">{show.title}</div>
          <div className="text-lg">hosted by {show.personas?.[0]?.name}</div>
          <div className="text-lg">
            {new Date(show.start).toLocaleTimeString()} {' - '}
            {new Date(show.end).toLocaleTimeString()}
          </div>
        </Link>
      </div>
      <div
        className={`mx-3 hidden cursor-pointer p-5 ${activeShowId === show.id ? 'text-gray-400' : ''} transition-colors hover:text-gray-400 md:block`}
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
    </>
  );
}
