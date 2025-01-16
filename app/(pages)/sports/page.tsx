import { sanityFetch } from '@/sanity/lib/client';
import {
  ARTICLE_TYPES,
  ARTICLES_BY_TYPE_QUERY,
  PODCAST_DEPARTMENTS,
  PODCASTS_BY_DEPARTMENT_QUERY,
} from '@/sanity/lib/queries';
import { ARTICLES_QUERYResult, PODCASTS_QUERYResult } from '@/sanity.types';
import { getShows } from '@/app/server-api';
import { filterShowByCategory } from '@/app/utils';
import ArticlesGroup from '@/app/components/ArticlesGroup';
import ShowsSidePanel from '@/app/components/ShowsSidePanel';

export default async function Page() {
  const sportsArticles = await sanityFetch<ARTICLES_QUERYResult>({
    query: ARTICLES_BY_TYPE_QUERY(ARTICLE_TYPES.SPORTS),
    tags: ['article'],
  });

  const sportsPodcasts = await sanityFetch<PODCASTS_QUERYResult>({
    query: PODCASTS_BY_DEPARTMENT_QUERY(PODCAST_DEPARTMENTS.SPORTS),
    tags: ['podcasts'],
  });

  const shows = await getShows();

  const sportsShows = filterShowByCategory(shows, 'Sports');

  return (
    <div className="static h-screen">
      <div className="container mx-auto px-4 pt-10">
        <div className="hidden flex-col md:flex md:flex-row">
          <div className="w-full pr-4 pt-20 md:w-2/3">
            <ArticlesGroup articles={sportsArticles} />
          </div>

          <div className="min-h-[100vh] w-full border-l-2 border-black pl-4 pt-4 md:w-1/3">
            <ShowsSidePanel shows={sportsShows} podcasts={sportsPodcasts} />
          </div>
        </div>
        <div className="flex flex-col gap-8 md:hidden">
          <div className="w-full pr-4 pt-20 md:w-2/3">
            <ArticlesGroup articles={sportsArticles} />
          </div>
          <h1 className="text-center text-6xl font-extrabold">Programs</h1>
          <div className="w-full pl-4 pt-4 md:w-1/3">
            <ShowsSidePanel shows={sportsShows} podcasts={sportsPodcasts} />
          </div>
        </div>
      </div>
    </div>
  );
}
