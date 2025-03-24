import CurrentShowPanel from '@/app/components/CurrentShowPanel';
import VideoCard from '@/app/components/VideoCard';
import AnnouncementsCarousel from '@/app/components/AnnouncementsCarousel';
import { sanityFetch } from '@/sanity/lib/client';
import { ANNOUNCEMENTS_QUERY, VIDEO_CARDS_QUERY } from '@/sanity/lib/queries';
import {
  VIDEO_CARDS_QUERYResult,
  type ANNOUNCEMENTS_QUERYResult,
} from '@/sanity.types';

export default async function Home() {
  const announcements = await sanityFetch<ANNOUNCEMENTS_QUERYResult>({
    query: ANNOUNCEMENTS_QUERY,
    tags: ['announcement'],
  });
  const videos = await sanityFetch<VIDEO_CARDS_QUERYResult>({
    query: VIDEO_CARDS_QUERY,
    tags: ['videoCard'],
  });
  return (
    <div className="container static flex flex-col-reverse justify-between gap-4 px-4 py-4 pt-4 md:mx-auto md:flex-row md:gap-0 md:py-6">
      <div className="flex flex-col gap-16 md:w-2/3">
        <div className="hidden h-[500px] md:block">
          <AnnouncementsCarousel announcements={announcements} />
        </div>
        <h2 className="mt-6 text-center md:mt-auto">
          the latest videos from wnyu
        </h2>
        <div className="flex flex-col gap-8">
          {videos.map((video) => {
            if (video.videoLink !== null)
              return <VideoCard videoLink={video.videoLink} key={video.name} />;

            return undefined;
          })}
        </div>
      </div>
      <div className="md:sticky md:top-[5.5rem] md:h-[calc(100dvh-4rem)]">
        <CurrentShowPanel />
      </div>
      <div className="h-[450px] w-full md:hidden">
        <AnnouncementsCarousel announcements={announcements} />
      </div>
    </div>
  );
}
