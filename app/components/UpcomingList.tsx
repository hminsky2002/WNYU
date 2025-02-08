'use client';

import { Show } from '@wnyu/spinitron-sdk';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useUpcoming } from '@/app/client-api';

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
    <div className="mt-4 w-full text-left">
      <div>UP NEXT:</div>
      {upcoming && upcoming[1] ? (
        <div className="text-4xl font-extrabold">
          <Link href={upcoming[1]?.id ? `/schedule/${upcoming[1]?.id}` : '/'}>
            {upcoming[1].title}
          </Link>
        </div>
      ) : (
        <div className="text-4xl font-extrabold">WNYU JUKEBOX</div>
      )}
    </div>
  );
}
