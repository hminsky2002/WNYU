import { defineField, defineType } from 'sanity';

export const footerType = defineType({
  name: 'footer',
  title: 'Footer',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'blockText',
      title: 'Block Text',
      type: 'array',
      of: [{ type: 'block' }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'footerImage',
      title: 'Footer Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'socials',
      title: 'Social Media Icon List',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'socialLink',
          title: 'Social Link',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
              description: 'Name of site',
            }),
            defineField({
              name: 'link',
              title: 'Link',
              type: 'url',
              description: 'URL for the social media link',
            }),
            defineField({
              name: 'icon',
              title: 'Icon',
              type: 'image',
              options: {
                hotspot: true,
              },
              description: 'Relevant icon for social media link',
            }),
          ],
          preview: {
            select: {
              title: 'title',
            },
          },
        },
      ],
    }),
  ],
});
