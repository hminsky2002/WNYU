import { defineField, defineType } from 'sanity';

export const managementCardType = defineType({
  name: 'managementCard',
  title: 'Management Card',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
    defineField({
      name: 'role',
      type: 'string',
    }),
    defineField({
      name: 'email',
      type: 'string',
    }),
    defineField({
      name: 'picture',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
});
