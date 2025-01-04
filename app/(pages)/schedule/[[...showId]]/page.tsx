import { getShows } from '@/app/server-api';
import SchedulePanel from '../../../components/SchedulePanel';
import type { PlaylistsResponse } from '@wnyu/spinitron-sdk';

async function ScheduleProvider({ showId }: { showId: string | undefined }) {
  let playlists;
  let activeShow;
  const shows = await getShows();
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

type ScheduleParams = Promise<{ showId: string | undefined }>;

export default async function Page({ params }: { params: ScheduleParams }) {
  const { showId } = await params;

  return (
    <div className="mx-7 h-screen pt-4">
      <ScheduleProvider showId={showId} />
    </div>
  );
}
