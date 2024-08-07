import { groq } from 'next-sanity';

export const MANAGEMENT_CARDS_QUERY = groq`*[_type=="managementCard"]{'id':_id,name,role,email,picture}`;

export const MANAGEMENT_CARD_QUERY = groq`*[_type=="managementCard"][0]{'id':_id,name,role,email,picture}`;

export const ABOUT_TEXT_QUERY = groq`*[_type=="textBlock" && name=="About"][0]{content}`;

export const ANNOUNCEMENTS_QUERY = groq`*[_type=="announcement"]|order(_createdAt desc){title,subtitle,announcementImage}`;

export const ANNOUNCEMENT_QUERY = groq`*[_type=="announcement"][0]{title,subtitle,announcementImage}`;
