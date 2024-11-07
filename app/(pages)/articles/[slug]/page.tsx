import { sanityFetch } from '@/sanity/lib/client';
import { ARTICLE_BY_SLUG_QUERY } from '@/sanity/lib/queries';
import { ARTICLE_QUERYResult } from '@/sanity.types';
import { Article } from '@/app/components/Article';

export default async function ArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  const article = await sanityFetch<ARTICLE_QUERYResult>({
    query: ARTICLE_BY_SLUG_QUERY(params.slug),
    tags: ['article'],
  });

  return (
    <div className="mx-4 pt-20">
      <Article article={article} />
    </div>
  );
}
