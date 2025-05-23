import { groq } from 'next-sanity';

export enum ARTICLE_TYPES {
  MUSIC = 'music',
  SPORTS = 'sports',
  NEWS = 'news',
}

export enum PODCAST_DEPARTMENTS {
  SPORTS = 'sports',
  NEWS = 'news',
}

export const MANAGEMENT_CARDS_QUERY = groq`*[_type=="managementCard"]|order(priority asc){'id':_id,name,role,email,picture}`;

export const MANAGEMENT_CARD_QUERY = groq`*[_type=="managementCard"][0]{'id':_id,name,role,email,picture}`;

export const ABOUT_TEXT_QUERY = groq`*[_type=="textBlock" && name=="About"][0]{content}`;

export const ANNOUNCEMENTS_QUERY = groq`*[_type=="announcement"]|order(_createdAt desc){title,subtitle,announcementImage,link}`;

export const ANNOUNCEMENT_QUERY = groq`*[_type=="announcement"][0]{title,subtitle,announcementImage,link}`;

export const VIDEO_CARDS_QUERY = groq`*[_type=="videoCard"]|order(_createdAt desc){name,videoLink}`;

export const VIDEO_CARD_QUERY = groq`*[_type=="videoCard"][0]{name,videoLink}`;

export const ARTICLES_QUERY = groq`
  *[_type == "article"]
  | order(_createdAt desc) | order(priority asc){
    'id': _id,
    name,
    slug,
    author,
    date,
    picture,
    content,
    articleType
  }
`;

export const ARTICLE_QUERY = groq`
  *[_type == "article"][0]{
    'id': _id,
    name,
    slug,
    author,
    date,
    picture,
    content,
    articleType
  }
`;

export const ARTICLES_BY_TYPE_QUERY = (type: ARTICLE_TYPES) => groq`
  *[_type == "article" && articleType == "${type}"]
  | order(_createdAt desc) | order(priority asc) {
    'id': _id,
    name,
    slug,
    author,
    date,
    picture,
    content,
    articleType
  }
`;

export const ARTICLE_BY_TYPE_QUERY = (type: ARTICLE_TYPES) => groq`
  *[_type == "article" && articleType == "${type}"][0]{
    'id': _id,
    name,
    slug,
    author,
    date,
    picture,
    content,
    articleType
  }
`;

export const ARTICLE_BY_SLUG_QUERY = (slug: string) => groq`
  *[_type == "article" && slug.current == "${slug}"][0]{
    'id': _id,
    name,
    slug,
    author,
    date,
    picture,
    content,
    articleType
  }
`;

export const PODCASTS_QUERY = groq`
  *[_type == "podcast"]| order(_createdAt desc){
    'id': _id,
    name,
    slug,
    host,
    picture,
    spotifyEpisodeURLs,
    department,
    description
  }
`;

export const PODCAST_QUERY = groq`
  *[_type == "podcast"][0]{
    'id': _id,
    name,
    slug,
    host,
    picture,
    spotifyEpisodeURLs,
    department,
    description
  }
`;

export const PODCASTS_BY_DEPARTMENT_QUERY = (
  department: PODCAST_DEPARTMENTS,
) => groq`
  *[_type == "podcast" && department == "${department}"]
  | order(_createdAt desc) {
     'id': _id,
    name,
    slug,
    host,
    picture,
    spotifyEpisodeURLs,
    department,
    description
  }
`;

export const PODCAST_BY_SLUG_QUERY = (slug: string) => groq`
  *[_type == "podcast" && slug.current == "${slug}"][0]{
     'id': _id,
    name,
    slug,
    host,
    picture,
    spotifyEpisodeURLs,
    department,
    description
  }
`;

export const FOOTER_QUERY = groq`
  *[_type == "footer"][0]{
    'id': _id,
    blockText,
    footerImage,
    socials
  }
`;
