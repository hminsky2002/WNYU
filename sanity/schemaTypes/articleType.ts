import { defineField, defineType } from 'sanity';

export const articleType = defineType({
  name: 'article',
  title: 'Article',
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
      name: 'author',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'date',
      type: 'date',
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
      name: 'content',
      type: 'array',
      of: [{ type: 'block' }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'articleType',
      title: 'Article Type',
      type: 'string',
      options: {
        list: [
          { title: 'Music', value: 'music' },
          { title: 'News', value: 'news' },
          { title: 'Sports', value: 'sports' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'priority',
      type: 'number',
    }),
  ],
});
