import ScheduleGrid from '../../components/SchedulePanel';
import type { ShowsResponse } from '@wnyu/spinitron-sdk';

// We prefetch all shows to get the schedule, but by default the shows
// endpoint is paginated at 20. If there are ever more than 150 active
// shows in our schedule, we can increase the variable size

const SHOW_LIMIT = '150';

async function getData(): Promise<ShowsResponse> {
  const url = new URL(`${process.env.NEXT_PUBLIC_API_URL}/shows`);
  const params = new URLSearchParams({
    expand: 'personas',
    count: SHOW_LIMIT,
  });
  url.search = params.toString();
  const res = await fetch(url.toString());

  if (!res.ok) {
    throw new Error('Failed to fetch schedule');
  }
  const output = res.json() as Promise<ShowsResponse>;

  return output;
}

async function ScheduleProvider() {
  const shows = await getData();

  return <ScheduleGrid shows={shows.items} />;
}

export default async function Page() {
  return (
    <>
      <ScheduleProvider />
    </>
  );
}
