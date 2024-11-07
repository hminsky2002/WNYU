import SchedulePanel from '../../../components/SchedulePanel';
import type { ShowsResponse, PlaylistsResponse } from '@wnyu/spinitron-sdk';

async function getData(): Promise<ShowsResponse> {
  const url = new URL(`${process.env.NEXT_PUBLIC_API_URL}/shows`);
  const params = new URLSearchParams({
    expand: 'personas',
  });
  url.search = params.toString();
  const res = await fetch(url.toString());

  if (!res.ok) {
    throw new Error('Failed to fetch schedule');
  }
  const output = res.json() as Promise<ShowsResponse>;

  return output;
}

async function ScheduleProvider({ showId }: { showId: string | undefined }) {
  let playlists;
  let activeShow;
  const shows = await getData();
  if (showId) {
    playlists = (await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/playlists?show_id=${showId}`,
      {
        cache: 'force-cache',
      },
    ).then((res) => res.json())) as PlaylistsResponse;
    const intShowId = parseInt(showId, 10);
    activeShow = shows.items.find((show) => show.id === intShowId);
  }

  return (
    <SchedulePanel
      shows={shows.items}
      activeShow={activeShow}
      playlists={playlists?.items}
    />
  );
}

export default async function Page({ params }: { params: { showId: string } }) {
  return (
    <div className="mx-7 h-screen pt-4">
      <ScheduleProvider showId={params.showId} />
    </div>
  );
}
