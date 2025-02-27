import { PODCASTS_QUERYResult, PODCAST_QUERYResult } from '@/sanity.types';
import PodcastsDetailPanel from './PodcastDetailPanel';
import PodcastList from './PodcastsList';

interface PodcastsPanelProps {
  podcasts: PODCASTS_QUERYResult;
  activePodcast?: PODCAST_QUERYResult;
}

export default function PodcastsPanel({
  podcasts,
  activePodcast,
}: PodcastsPanelProps) {
  return (
    <>
      {/* mobile */}
      <div className="mx-4 flex flex-col md:hidden">
        {!activePodcast && (
          <div className="w-full pt-4">
            <PodcastList podcasts={podcasts} />
          </div>
        )}

        {activePodcast && (
          <div className="h-full">
            <PodcastsDetailPanel podcast={activePodcast} />
          </div>
        )}
      </div>
      {/* desktop */}
      <div className="hidden flex-row justify-between md:flex">
        <div className="h-[calc(100dvh-4rem)] w-3/5 overflow-y-scroll p-6">
          <PodcastList podcasts={podcasts} />
        </div>

        {activePodcast && (
          <div className="w-2/5 overflow-y-scroll">
            <PodcastsDetailPanel podcast={activePodcast} />
          </div>
        )}
      </div>
    </>
  );
}
