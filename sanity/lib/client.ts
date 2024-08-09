import { createClient, type QueryParams } from 'next-sanity';
import { apiVersion, dataset, projectId } from '../env';

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: process.env.NODE_ENV === 'development' ? true : false,
});

export async function sanityFetch<QueryResponse>({
  query,
  params = {},
  revalidate = 60,
  tags = [],
}: {
  query: string;
  params?: QueryParams;
  revalidate?: number | false;
  tags?: string[];
}) {
  return client.fetch<QueryResponse>(query, params, {
    cache: process.env.NODE_ENV === 'development' ? 'no-store' : 'force-cache',
    next: {
      tags,
    },
  });
}
