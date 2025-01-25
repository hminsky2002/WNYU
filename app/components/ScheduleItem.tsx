import Link from 'next/link';
import type { Show } from '@wnyu/spinitron-sdk';

interface ScheduleItemProps {
  show: Show;
}
export default function ScheduleItem({ show }: ScheduleItemProps) {
  return (
    <>
      <div
        className={`cursor-pointer transition-colors hover:text-gray-400`}
        key={show.id}
      >
        <Link href={`/schedule/${show.id}`}>
          <div className="text-5xl font-extrabold">{show.title}</div>
          <div className="text-xl">hosted by {show.personas?.[0]?.name}</div>
          <div className="text-large font-thin">
            {new Date(show.start).toLocaleTimeString()} {' - '}
            {new Date(show.end).toLocaleTimeString()}
          </div>
        </Link>
      </div>
    </>
  );
}
