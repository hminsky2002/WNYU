import Link from 'next/link';
import { PODCASTS_QUERYResult } from '@/sanity.types';
import ListItem from './ListItem';
import type { Show } from '@wnyu/spinitron-sdk';

const ShowsSidePanel = ({
  shows,
  podcasts = undefined,
}: {
  shows: Show[];
  podcasts?: PODCASTS_QUERYResult;
}) => (
  <div className="flex flex-col gap-4">
    <div className="flex h-1/2 flex-col gap-8">
      <div className="mt-4 hidden text-8xl font-extrabold md:block">
        RADIO SHOWS
      </div>
      <div>
        {shows.map((show) => (
          <ListItem
            url={`/schedule/${show.id}`}
            host={show.personas?.[0]?.name ?? 'unhosted'}
            title={show.title}
            start={new Date(show.start).toLocaleTimeString()}
            end={new Date(show.end).toLocaleTimeString()}
            key={show.id}
          />
        ))}
      </div>
    </div>
    {podcasts && (
      <div className="flex h-1/2 flex-col gap-8 text-red-600">
        <div className="mt-4 hidden text-8xl font-extrabold md:block">
          PODCASTS
        </div>
        <div>
          {podcasts.map((podcast) => (
            <div
              className={`cursor-pointer transition-colors hover:text-gray-400`}
              key={podcast.id}
            >
              <Link href={`/podcasts/${podcast.slug?.current}`}>
                <div className="text-6xl font-extrabold">{podcast.name}</div>
                <div className="text-2xl">with {podcast.host}</div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    )}
  </div>
);

export default ShowsSidePanel;
