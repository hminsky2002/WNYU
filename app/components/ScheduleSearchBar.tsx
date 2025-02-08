'use client';

import { useState, type Dispatch, type SetStateAction, useRef } from 'react';
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
  const inputRef = useRef<HTMLInputElement>(null);
  const [searchOpen, setSearchOpen] = useState(false);
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
  const onClick = () => {
    setSearchOpen(!searchOpen);
    if (inputRef.current && !searchOpen) {
      inputRef.current.focus();
    }
  };
  return (
    <>
      {/* mobile */}
      <div className="flex items-center justify-center space-x-2 bg-white pb-4 pt-2 align-text-top md:hidden">
        <ChevronLeftIcon className="size-12" onClick={handlePreviousDay} />
        <div className="w-2/3 text-center text-5xl font-extrabold">
          {daysOfWeek[dayOfWeek]}
        </div>
        <ChevronRightIcon className="size-12" onClick={handleNextDay} />
      </div>

      {/* desktop */}
      <div className="hidden bg-white md:flex">
        <div className="flex py-1">
          <MagnifyingGlassIcon className="mr-2 size-8" onClick={onClick} />
          <div className="py-1">
            <input
              className={`rounded bg-slate-300 transition-all ease-in-out ${
                searchOpen ? 'w-full' : 'w-0'
              }`}
              id="scheduleSearch"
              ref={inputRef}
              type="text"
              value={nameFilter}
              onChange={(e) => setNameFilter(e.target.value)}
            />
          </div>
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
