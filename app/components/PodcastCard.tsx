import Link from 'next/link';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
import { PODCAST_QUERYResult } from '../../sanity.types';

export default function PodcastCard({
  podcast,
}: {
  podcast: PODCAST_QUERYResult;
}) {
  const { name, slug, host, picture } = podcast || {};

  const podcastUrl = slug ? `/podcasts/${slug.current}` : '/';

  return (
    <Link href={podcastUrl} passHref>
      <div className="group relative z-10 block h-[300px] w-[400px] border-2 border-black bg-gray-500 text-white md:hidden">
        {picture?.asset?._ref ? (
          <Image
            src={
              urlFor(picture?.asset?._ref).width(400).height(300).url() ??
              '/placeholder.png'
            }
            alt={`${name} cover image`}
            fill
            className={`object-cover transition-all ease-in-out group-hover:brightness-0`}
          />
        ) : null}
        <div className="absolute bottom-10 mx-4">
          <div className="text-4xl font-extrabold">{name}</div>
          <div className="text-lg">hosted by {host}</div>
        </div>
      </div>
    </Link>
  );
}
