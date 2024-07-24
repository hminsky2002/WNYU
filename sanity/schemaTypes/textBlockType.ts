import { defineField, defineType } from 'sanity';

export const textBlockType = defineType({
  name: 'textBlock',
  title: 'Text Block',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
    defineField({
      name: 'content',
      type: 'array',
      of: [{ type: 'block' }],
    }),
  ],
});
