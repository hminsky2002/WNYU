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
    <div className="static h-screen">
      <div className="mx-7 flex flex-col-reverse gap-8 md:flex-row md:gap-0">
        <div className="flex flex-col gap-16 md:mx-7 md:w-2/3">
          <div className="hidden h-[500px] w-full md:block">
            <AnnouncementsCarousel announcements={announcements} />
          </div>
          <p className="text-center text-4xl font-bold md:hidden">
            the latest videos from wnyu
          </p>
          <div className="flex flex-col gap-8">
            {videos.map((video) => {
              if (video.videoLink !== null)
                return (
                  <VideoCard videoLink={video.videoLink} key={video.name} />
                );

              return undefined;
            })}
          </div>
        </div>
        <div className="md:sticky md:top-20 md:h-screen md:w-1/3">
          <CurrentShowPanel />
        </div>
        <div className="h-[250px] w-full md:hidden">
          <AnnouncementsCarousel announcements={announcements} />
        </div>
      </div>
    </div>
  );
}
