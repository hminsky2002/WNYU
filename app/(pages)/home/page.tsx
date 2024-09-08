import { AnnouncementsCarousel } from '@/app/components/AnnouncementsCarousel';
import CurrentShowPanel from '@/app/components/CurrentShowPanel';
import { sanityFetch } from '@/sanity/lib/client';
import { ANNOUNCEMENTS_QUERY } from '@/sanity/lib/queries';
import type { ANNOUNCEMENTS_QUERYResult } from '@/sanity.types';

export default async function Home() {
  const announcements = await sanityFetch<ANNOUNCEMENTS_QUERYResult>({
    query: ANNOUNCEMENTS_QUERY,
    tags: ['announcement'],
  });
  return (
    <div>
      <div className="mx-7 flex-col space-y-10 md:mx-auto md:grid md:grid-cols-3 md:grid-rows-6 md:space-x-12 md:space-y-0">
        <div className="h-[200px] md:col-span-2 md:row-span-5 md:ml-8 md:h-auto">
          <AnnouncementsCarousel announcements={announcements} />
        </div>
        <div className="sticky md:col-span-1 md:row-span-6">
          <CurrentShowPanel />
        </div>
      </div>
    </div>
  );
}
