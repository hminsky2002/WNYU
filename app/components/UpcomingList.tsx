'use client';

import { Show } from '@wnyu/spinitron-sdk';
import { useState, useEffect } from 'react';
import { useUpcoming } from '@/app/api';

const REFRESH_UPCOMING_INTERVAL = 5 * 60 * 1000;

export default function UpcomingList() {
  const [upcomingResponse, refreshUpcomingResponse] = useUpcoming();
  const [upcoming, setUpcoming] = useState<Show[]>();
  useEffect(() => {
    if (upcomingResponse) {
      setUpcoming(upcomingResponse);
    }
    const intervalId = setInterval(() => {
      refreshUpcomingResponse();
    }, REFRESH_UPCOMING_INTERVAL);

    return () => {
      clearInterval(intervalId);
    };
  }, [upcomingResponse, refreshUpcomingResponse]);

  return (
    <div className="w-full text-left">
      <div>UP NEXT:</div>
      {upcoming && upcoming[1] && (
        <div className="text-xl font-extrabold">{upcoming[1].title}</div>
      )}
    </div>
  );
}
