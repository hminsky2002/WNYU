'use client';

import { useState, useEffect } from 'react';
import ListItem from './ListItem';
import ScheduleSearchBar, { daysOfWeek } from './ScheduleSearchBar';
import type { Show } from '@wnyu/spinitron-sdk';

interface ScheduleListProps {
  shows: Show[];
}

export default function ScheduleList({ shows }: ScheduleListProps) {
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
        (a, b) => new Date(a.start).getHours() - new Date(b.start).getHours(),
      );
    setFilteredShows(filtered);
  }, [dayFilter, nameFilter, shows]);

  return (
    <div className="">
      <ScheduleSearchBar
        dayFilter={dayFilter}
        nameFilter={nameFilter}
        setDayFilter={setDayFilter}
        setNameFilter={setNameFilter}
      />
      <div className="mt-4 flex flex-col gap-4 md:w-2/3">
        {filteredShows.map((show) => (
          <ListItem
            url={`/schedule/${show.id}`}
            host={show.personas?.[0]?.name ?? 'unhosted'}
            title={show.title}
            start={new Date(show.start).toLocaleTimeString('en-US', {
              hour: 'numeric',
              minute: 'numeric',
              hour12: true,
            })}
            end={new Date(show.end).toLocaleTimeString('en-US', {
              hour: 'numeric',
              minute: 'numeric',
              hour12: true,
            })}
            key={show.id}
          />
        ))}
      </div>
    </div>
  );
}
