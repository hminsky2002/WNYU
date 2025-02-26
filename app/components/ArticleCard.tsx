import Image from 'next/image';
import Link from 'next/link';
import { urlFor } from '@/sanity/lib/image';
import { ARTICLE_QUERYResult } from '../../sanity.types';

export function ArticleCard({ article }: { article: ARTICLE_QUERYResult }) {
  const { name, author, date, picture, slug } = article || {};

  const articleUrl = slug ? `/articles/${slug.current}` : '/';

  return (
    <Link href={articleUrl} passHref>
      <div className="cursor-pointer">
        {picture?.asset?._ref ? (
          <Image
            className=""
            src={
              urlFor(picture?.asset?._ref).width(600).height(300).url() ??
              '/placeholder.png'
            }
            width={600}
            height={300}
            alt={name ?? ''}
          />
        ) : null}
        <div className="flex flex-col gap-2 py-2">
          <h2 className="text-4xl font-bold md:text-6xl">{name}</h2>
          <p className="text-2xl text-gray-500">by {author}</p>
          <p className="text-2xl font-thin text-gray-500">{date}</p>
        </div>
      </div>
    </Link>
  );
}
