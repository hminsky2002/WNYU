import { defineField, defineType } from 'sanity';

export const podcastType = defineType({
  name: 'podcast',
  title: 'Podcast',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'host',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'picture',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      type: 'array',
      of: [{ type: 'block' }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'department',
      title: 'Department',
      type: 'string',
      options: {
        list: [
          { title: 'News', value: 'news' },
          { title: 'Sports', value: 'sports' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'spotifyEpisodeURLs',
      title: 'Spotify Episode URLs',
      type: 'array',
      of: [{ type: 'url' }],
      validation: (Rule) => Rule.required(),
    }),
  ],
});
