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

export default async function Page() {
  const shows = await getData();
  return (
    <>
      <h1>Schedule</h1>
      {shows.items.map((show) => (
        <ul className="mx-3 border-2 border-neutral-950 p-5" key={show.id}>
          <li>{show.title}</li>
          <li>{show.personas?.[0].name}</li>
        </ul>
      ))}
    </>
  );
}
