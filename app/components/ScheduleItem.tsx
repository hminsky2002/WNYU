import Link from 'next/link';
import type { Show } from '@wnyu/spinitron-sdk';

interface ScheduleItemProps {
  show: Show;
}
export default function ScheduleItem({ show }: ScheduleItemProps) {
  return (
    <>
      <div
        className={`mx-3 cursor-pointer p-5 ${show.id === 4 ? 'text-gray-400' : ''} transition-colors hover:text-gray-400`}
        key={show.id}
      >
        <Link href={`/schedule/${show.id}`}>
          <div className="text-4xl font-extrabold">{show.title}</div>
          <div className="text-lg">hosted by {show.personas?.[0]?.name}</div>
          <div className="text-lg">
            {new Date(show.start).toLocaleTimeString()} {' - '}
            {new Date(show.end).toLocaleTimeString()}
          </div>
        </Link>
      </div>
    </>
  );
}
