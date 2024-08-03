'use client';

import { createContext, useEffect, useState } from 'react';
import { useCurrent } from '@/app/api';
import { CurrentData } from '../types';

const CurrentDataContext = createContext<CurrentData>({});

const REFRESH_PLAYLIST_INTERVAL = 1 * 60 * 1000;

function CurrentDataProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [currentResponse, refreshCurrentResponse] = useCurrent();
  const [current, setCurrent] = useState<CurrentData>();
  useEffect(() => {
    if (currentResponse) {
      setCurrent(currentResponse);
    }
    const intervalId = setInterval(() => {
      refreshCurrentResponse();
    }, REFRESH_PLAYLIST_INTERVAL);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentResponse, refreshCurrentResponse]);

  return (
    <CurrentDataContext.Provider value={current || {}}>
      {children}
    </CurrentDataContext.Provider>
  );
}

export { CurrentDataProvider, CurrentDataContext };
