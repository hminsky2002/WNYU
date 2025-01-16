import { sanityFetch } from '@/sanity/lib/client';
import { PODCAST_BY_SLUG_QUERY } from '@/sanity/lib/queries';
import { PODCAST_QUERYResult } from '@/sanity.types';
import { Podcast } from '@/app/components/Podcast';

type PodcastParams = Promise<{ slug: string }>;

export default async function PodcastPage({
  params,
}: {
  params: PodcastParams;
}) {
  const { slug } = await params;

  const podcast = await sanityFetch<PODCAST_QUERYResult>({
    query: PODCAST_BY_SLUG_QUERY(slug),
    tags: ['podcast'],
  });

  return (
    <div className="mx-4 pt-20">
      <Podcast podcast={podcast} />
    </div>
  );
}
