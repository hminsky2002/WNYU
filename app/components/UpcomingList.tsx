'use client';

import { Show } from '@wnyu/spinitron-sdk';
import { useState, useEffect } from 'react';
import { useUpcoming } from '@/app/api';

const REFRESH_UPCOMING_INTERVAL = 5 * 60 * 1000;

export default function UpcomingList() {
  const [upcomingResponse, refreshUpcomingResponse] = useUpcoming();
  const [upcoming, setUpcoming] = useState<Show[]>();
  useEffect(() => {
    if (upcomingResponse?.items) {
      setUpcoming(upcomingResponse.items);
    }
    const intervalId = setInterval(() => {
      refreshUpcomingResponse();
    }, REFRESH_UPCOMING_INTERVAL);

    return () => {
      clearInterval(intervalId);
    };
  }, [upcomingResponse, refreshUpcomingResponse]);

  return (
    <div>
      <div>Coming Up Next:</div>
      <div>
        {upcoming?.map((show) => (
          <div className="py-2" key={show.id}>
            <p>{show.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
