'use client';

import { useState, useEffect } from 'react';
import ScheduleItem from './ScheduleItem';
import ScheduleSearchBar, { daysOfWeek } from './ScheduleSearchBar';
import type { Show } from '@wnyu/spinitron-sdk';
import type { Dispatch, SetStateAction } from 'react';

interface ScheduleListProps {
  shows: Show[];
  activeShowId?: number;
  setActiveShowId: Dispatch<SetStateAction<number | undefined>>;
}

export default function ScheduleList({
  shows,
  activeShowId,
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
    <div className="w-full">
      <ScheduleSearchBar
        dayFilter={dayFilter}
        nameFilter={nameFilter}
        setDayFilter={setDayFilter}
        setNameFilter={setNameFilter}
      />
      <div className={`max-h-[800px] overflow-y-auto`}>
        {filteredShows.map((show) => (
          <ScheduleItem
            show={show}
            key={show.id}
            setActiveShowId={setActiveShowId}
            activeShowId={activeShowId}
          />
        ))}
      </div>
    </div>
  );
}
