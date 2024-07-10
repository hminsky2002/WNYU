import type { Show } from '@wnyu/spinitron-sdk';

export default function ScheduleItem({ show }: { show: Show }) {
  return (
    <div className="mx-3 border-2 border-neutral-950 p-5" key={show.id}>
      <p>{show.title}</p>
      <p>{show.personas?.[0]?.name}</p>
      <div>
        {new Date(show.start).toLocaleTimeString()} {' - '}
        {new Date(show.end).toLocaleTimeString()}
      </div>
    </div>
  );
}
