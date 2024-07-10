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
    <>
      <ScheduleList shows={shows} setActiveShowId={setActiveShowId} />
      <ShowDetail show={shows.find((show) => show.id === activeShowId)} />
    </>
  );
}
