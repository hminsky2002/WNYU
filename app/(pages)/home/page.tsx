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
    <div className="container static flex flex-col-reverse justify-between gap-8 pt-6 md:mx-auto md:flex-row md:gap-0">
      <div className="mb-10 flex flex-col gap-16 md:w-2/3">
        <div className="hidden h-[500px] md:block">
          <AnnouncementsCarousel announcements={announcements} />
        </div>
        <p className="mt-6 text-center text-4xl font-bold md:mt-auto">
          the latest videos from wnyu
        </p>
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
      <div className="h-[250px] w-full md:hidden">
        <AnnouncementsCarousel announcements={announcements} />
      </div>
    </div>
  );
}
