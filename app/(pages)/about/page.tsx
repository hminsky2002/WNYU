import { PortableText } from '@portabletext/react';
import { ManagementCardList } from '@/app/components/ManagementCardList';
import { sanityFetch } from '@/sanity/lib/client';
import { MANAGEMENT_CARDS_QUERY, ABOUT_TEXT_QUERY } from '@/sanity/lib/queries';
import type {
  MANAGEMENT_CARDS_QUERYResult,
  ABOUT_TEXT_QUERYResult,
} from '@/sanity.types';

export default async function About() {
  const cards = await sanityFetch<MANAGEMENT_CARDS_QUERYResult>({
    query: MANAGEMENT_CARDS_QUERY,
    tags: ['managementCard'],
  });
  const aboutText = await sanityFetch<ABOUT_TEXT_QUERYResult>({
    query: ABOUT_TEXT_QUERY,
    tags: ['about'],
  });
  return (
    <>
      <div className="pb-4 pt-8 md:container md:mx-auto md:flex md:justify-between">
        <div className="pr-1/4 prose mr-auto shrink-0 leading-5 md:w-1/2">
          {aboutText?.content ? (
            <PortableText value={aboutText.content} />
          ) : null}
        </div>
        <div>
          <p className="mb-2 text-2xl font-bold md:ml-14">Management:</p>
          {cards ? <ManagementCardList cards={cards} /> : null}
        </div>
      </div>
    </>
  );
}
