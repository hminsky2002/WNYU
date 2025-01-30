import { PODCAST_QUERYResult } from '@/sanity.types';
import Podcast from './Podcast';

export default async function ShowDetailPanel({
  podcast,
}: {
  podcast: PODCAST_QUERYResult;
}) {
  return (
    <div className="flex h-[calc(100dvh-4rem)] flex-col md:overflow-y-scroll">
      <Podcast podcast={podcast} />
    </div>
  );
}
