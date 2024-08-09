'use client';

import { useState, type Dispatch, type SetStateAction } from 'react';
import {
  MagnifyingGlassIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from '@heroicons/react/24/solid';

interface ScheduleSearchBarProps {
  nameFilter: string;
  dayFilter: string;
  setNameFilter: Dispatch<SetStateAction<string>>;
  setDayFilter: Dispatch<SetStateAction<string>>;
}
export const daysOfWeek = [
  'sunday',
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday',
];

export default function ScheduleSearchBar({
  nameFilter,
  dayFilter,
  setNameFilter,
  setDayFilter,
}: ScheduleSearchBarProps) {
  const [dayOfWeek, setDayOfWeek] = useState(new Date().getDay());

  const handlePreviousDay = () => {
    if (dayOfWeek === 0) {
      setDayOfWeek(6);
    } else {
      setDayOfWeek(dayOfWeek - 1);
    }

    setDayFilter(daysOfWeek[dayOfWeek]);
  };
  const handleNextDay = () => {
    setDayOfWeek((dayOfWeek + 1) % 7);
    setDayFilter(daysOfWeek[dayOfWeek]);
  };
  return (
    <>
      <div className="flex items-center justify-center space-x-2 bg-white pb-4 align-text-top md:hidden">
        <ChevronLeftIcon className="size-12" onClick={handlePreviousDay} />
        <div className="w-2/3 text-center text-5xl font-extrabold">
          {daysOfWeek[dayOfWeek]}
        </div>
        <ChevronRightIcon className="size-12" onClick={handleNextDay} />
      </div>
      <div className="hidden overflow-x-scroll md:flex">
        <div className="flex">
          <MagnifyingGlassIcon className="size-6" />
          <input
            type="text"
            value={nameFilter}
            onChange={(e) => setNameFilter(e.target.value)}
          />
        </div>
        {daysOfWeek.map((day) => (
          <div
            key={day}
            className={`cursor-pointer px-3 py-1 text-lg font-bold ${dayFilter === day ? 'text-black' : 'text-gray-200'}`}
            onClick={() => setDayFilter(day)}
          >
            {day}
          </div>
        ))}
      </div>
    </>
  );
}
