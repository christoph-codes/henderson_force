import { SchemaTypeDefinition, defineField, defineType } from 'sanity';
import { CalendarIcon, PackageIcon } from '@sanity/icons';

export const page: SchemaTypeDefinition = defineType({
  name: 'page',
  title: 'Page',
	type: 'document',
	icon: CalendarIcon,
	groups: [
		{ name: 'seo', title: 'SEO' },
		{ name: 'page_content', title: 'Page Content' },
	],
	fields: [
		defineField({
			name: 'home_page',
			title: 'Home Page?',
			type: 'boolean',
			group: 'seo'
		  }),
		defineField({
			name: 'name',
			type: 'string',
			validation: (rule) => rule
			.required()
				.error(`Required to generate a page on the website`),
			group: 'seo'
		  }),
    defineField({
      name: 'slug',
		type: 'slug',
		hidden: ({ document }) => !document?.name,
		validation: (rule) => rule
		.required()
		.error(`Required to generate a page on the website`),
		options: {
			source: 'name',
			slugify: input => input
				 .toLowerCase()
				 .replace(/\s+/g, '-')
				 .slice(0, 200)
		},
		group: 'seo'
		
    }),
    defineField({
		name: 'image',
		description: 'This field is important for SEO and should be edited everytime',
		type: 'image',
		group: 'page_content'
    }),
    defineField({
      name: 'test_field',
		type: 'string',
		options: {
			list: ['in-person', 'virtual'],
			layout: 'radio',
		},
		group: 'page_content'
    }),
    defineField({
      name: 'description',
		type: 'string',
		initialValue: 'This is an example description PLEASE REPLACE',
		group: 'seo'
    }),
    defineField({
      name: 'date',
		type: 'datetime',
		group: 'seo'
    }),
    defineField({
      name: 'page_content',
      type: 'array',
		of: [{ type: 'block' }],
		group: 'page_content'
    }),
	],
	preview: {
		select: {
		  title: "name",
		  subtitle: "description",
			media: "image",
		  date: 'date',
		},
		prepare({title, subtitle, date, image }) {
			const nameFormatted = title || 'Untitled event'
			const dateFormatted = date
			  ? new Date(date).toLocaleDateString(undefined, {
				  month: 'short',
				  day: 'numeric',
				  year: 'numeric',
				  hour: 'numeric',
				  minute: 'numeric',
				})
			  : 'No date'
		
			return {
				title: nameFormatted,
				subtitle: subtitle || dateFormatted,
				media: image || PackageIcon,
			  date: dateFormatted,
			}
		  },
	  },
})