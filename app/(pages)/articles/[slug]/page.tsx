import { sanityFetch } from '@/sanity/lib/client';
import { ARTICLE_BY_SLUG_QUERY } from '@/sanity/lib/queries';
import { ARTICLE_QUERYResult } from '@/sanity.types';
import { Article } from '@/app/components/Article';

type ArticleParams = Promise<{ slug: string }>;

export default async function ArticlePage({
  params,
}: {
  params: ArticleParams;
}) {
  const { slug } = await params;

  const article = await sanityFetch<ARTICLE_QUERYResult>({
    query: ARTICLE_BY_SLUG_QUERY(slug),
    tags: ['article'],
  });

  return (
    <div className="m-4">
      <Article article={article} />
    </div>
  );
}
