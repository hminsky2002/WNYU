'use client';

import { useState, useEffect } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import ScheduleItem from './ScheduleItem';
import type { Show } from '@wnyu/spinitron-sdk';
import type { Dispatch, SetStateAction } from 'react';

interface ScheduleListProps {
  shows: Show[];
  setActiveShowId: Dispatch<SetStateAction<number | undefined>>;
}

const daysOfWeek = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

export default function ScheduleList({
  shows,
  setActiveShowId,
}: ScheduleListProps) {
  const [filteredShows, setFilteredShows] = useState<Show[]>([]);
  const [dayFilter, setDayFilter] = useState<string>(
    daysOfWeek[new Date().getDay()],
  );
  const [nameFilter, setNameFilter] = useState<string>('');

  useEffect(() => {
    const filtered = shows
      .filter((show) => {
        const showDate = new Date(show.start);
        const showDay = daysOfWeek[showDate.getDay()];
        const dayMatch = dayFilter ? showDay === dayFilter : true;
        const nameMatch = nameFilter
          ? show.title.toLowerCase().includes(nameFilter.toLowerCase())
          : true;
        return nameFilter ? nameMatch : dayMatch && nameMatch;
      })
      .sort(
        (a, b) => new Date(a.start).getTime() - new Date(b.start).getTime(),
      );
    setFilteredShows(filtered);
  }, [dayFilter, nameFilter, shows]);

  return (
    <>
      <h1>Schedule</h1>
      <div>
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
            className={`cursor-pointer px-3 py-1 ${dayFilter === day ? 'text-black' : 'text-gray-200'}`}
            onClick={() => setDayFilter(day)}
          >
            {day}
          </div>
        ))}
      </div>
      {filteredShows.map((show) => (
        <ScheduleItem
          show={show}
          key={show.id}
          setActiveShowId={setActiveShowId}
        />
      ))}
    </>
  );
}
