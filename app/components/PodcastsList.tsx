'use client';

import { useState, useEffect } from 'react';
import { type Dispatch, type SetStateAction, useRef } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { PODCAST_QUERYResult, PODCASTS_QUERYResult } from '@/sanity.types';
import ListItem from './ListItem';

interface PodcastsSearchBarProps {
  nameFilter: string;
  setNameFilter: Dispatch<SetStateAction<string>>;
}

function PodcastsSearchBar({
  nameFilter,
  setNameFilter,
}: PodcastsSearchBarProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [searchOpen, setSearchOpen] = useState(false);

  const onClick = () => {
    setSearchOpen(!searchOpen);
    if (inputRef.current && !searchOpen) {
      inputRef.current.focus();
    }
  };
  return (
    <>
      {/* mobile */}
      <div className="flex items-center justify-center space-x-2 bg-white pb-4 pt-2 align-text-top md:hidden">
        <div className="flex py-1">
          <MagnifyingGlassIcon className="mr-2 size-8" onClick={onClick} />
          <div className="py-1">
            <input
              className={`rounded bg-slate-300 transition-all ease-in-out ${
                searchOpen ? 'w-full' : 'w-0'
              }`}
              id="scheduleSearch"
              ref={inputRef}
              type="text"
              value={nameFilter}
              onChange={(e) => setNameFilter(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* desktop */}
      <div className="hidden overflow-x-scroll bg-white md:flex">
        <div className="flex py-1">
          <MagnifyingGlassIcon className="mr-2 size-8" onClick={onClick} />
          <div className="py-1">
            <input
              className={`rounded bg-slate-300 transition-all ease-in-out ${
                searchOpen ? 'w-full' : 'w-0'
              }`}
              id="scheduleSearch"
              ref={inputRef}
              type="text"
              value={nameFilter}
              onChange={(e) => setNameFilter(e.target.value)}
            />
          </div>
        </div>
      </div>
    </>
  );
}

interface ScheduleListProps {
  podcasts: PODCASTS_QUERYResult;
}

export default function PodcastList({ podcasts }: ScheduleListProps) {
  const [filteredPodcasts, setFilteredPodcasts] = useState<
    PODCAST_QUERYResult[]
  >([]);
  const [nameFilter, setNameFilter] = useState<string>('');

  useEffect(() => {
    const filtered = podcasts.filter((podcast) => {
      const nameMatch = nameFilter
        ? podcast.name?.toLowerCase().includes(nameFilter.toLowerCase())
        : true;
      return nameMatch;
    });
    setFilteredPodcasts(filtered);
  }, [nameFilter, podcasts]);

  return (
    <div className="">
      <PodcastsSearchBar
        nameFilter={nameFilter}
        setNameFilter={setNameFilter}
      />
      <div className="mt-4 flex flex-col gap-4 md:w-2/3">
        {filteredPodcasts.map((podcast) => (
          <ListItem
            url={`/podcasts/${podcast?.slug?.current}`}
            host={podcast?.host ?? 'unhosted'}
            title={podcast?.name ?? 'untitled'}
            key={podcast?.id}
          />
        ))}
      </div>
    </div>
  );
}
