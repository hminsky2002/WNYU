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
  });
  const aboutText = await sanityFetch<ABOUT_TEXT_QUERYResult>({
    query: ABOUT_TEXT_QUERY,
  });
  return (
    <>
      {aboutText?.content ? (
        <div className="prose prose-lg">
          <PortableText value={aboutText.content} />
        </div>
      ) : null}
      {cards ? <ManagementCardList cards={cards} /> : null}
    </>
  );
}
