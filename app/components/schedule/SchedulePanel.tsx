'use client';

import { useState } from 'react';
import ScheduleList from './ScheduleList';
import ShowDetail from './ShowDetailPanel';
import type { Show } from '@wnyu/spinitron-sdk';

interface ScheduleListProps {
  shows: Show[];
}

export default function ScheduleGrid({ shows }: ScheduleListProps) {
  const [activeShowId, setActiveShowId] = useState<number>();

  return (
    <div className="flex flex-col lg:flex-row lg:space-x-4">
      <div className="w-full lg:w-2/3">
        <ScheduleList shows={shows} setActiveShowId={setActiveShowId} />
      </div>
      <div className="w-full lg:w-1/3">
        <ShowDetail show={shows.find((show) => show.id === activeShowId)} />
      </div>
    </div>
  );
}
