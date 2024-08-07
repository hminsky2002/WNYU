'use client';

import { useState } from 'react';
import ScheduleList from './ScheduleList';
import ShowDetail from './ShowDetailPanel';
import type { Show } from '@wnyu/spinitron-sdk';

interface ScheduleListProps {
  shows: Show[];
}

export default function SchedulePanel({ shows }: ScheduleListProps) {
  const [activeShowId, setActiveShowId] = useState<number>();
  const [toggleScheduleDisplay, setToggleScheduleDisplay] = useState(false);

  return (
    <div className="md:grid md:grid-cols-3">
      <div className="md:col-span-2">
        <ScheduleList
          shows={shows}
          setActiveShowId={setActiveShowId}
          activeShowId={activeShowId}
          toggleScheduleDisplay={toggleScheduleDisplay}
        />
      </div>
      <div className="md:col-start-3">
        {activeShowId && (
          <ShowDetail
            show={shows.find((show) => show.id === activeShowId)}
            toggleScheduleDisplay={toggleScheduleDisplay}
            setToggleScheduleDisplay={setToggleScheduleDisplay}
          />
        )}
      </div>
    </div>
  );
}
