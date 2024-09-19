import { defineField, defineType } from 'sanity';

export const videoCardType = defineType({
  name: 'videoCard',
  title: 'Video Card',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'videoLink',
      type: 'url',
      validation: (Rule) => Rule.required(),
    }),
  ],
});
