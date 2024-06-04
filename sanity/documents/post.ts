import { SchemaTypeDefinition, defineField, defineType } from "sanity";
import { BookIcon, EditIcon } from "@sanity/icons";

export const post: SchemaTypeDefinition = defineType({
	name: "post",
	title: "Posts",
	type: "document",
	icon: BookIcon,
	groups: [
		{ name: "metadata", title: "Metadata" },
		{ name: "content", title: "Page Content" },
	],
	fields: [
		defineField({
			name: "featured",
			title: "Featured?",
			type: "boolean",
			group: "metadata",
		}),
		defineField({
			name: "title",
			type: "string",
			validation: (rule) =>
				rule.required().error(`Required to generate a page on the website`),
			group: "content",
		}),
		defineField({
			name: "slug",
			type: "slug",
			hidden: ({ document }) => !document?.title,
			validation: (rule) =>
				rule.required().error(`Required to generate a page on the website`),
			options: {
				source: "title",
				slugify: (input) =>
					input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
			},
			group: "metadata",
		}),
		defineField({
			name: "image",
			description: "Need a primary image for SEO",
			type: "image",
			group: "content",
		}),
		defineField({
			name: "description",
			type: "string",
			initialValue: "This is an example description PLEASE REPLACE",
			group: "metadata",
		}),
		defineField({
			name: "date",
			type: "datetime",
			group: "metadata",
		}),
		defineField({
			name: "page_content",
			type: "array",
			of: [{ type: "block" }],
			group: "content",
		}),
		defineField({
			name: "link",
			title: "Link",
			type: "string",
			group: "content",
		}),
	],
	preview: {
		select: {
			title: "title",
			subtitle: "description",
			media: "image",
			date: "date",
		},
		prepare({ title, subtitle, date, image }) {
			const nameFormatted = title || "Untitled post";
			const dateFormatted = date
				? new Date(date).toLocaleDateString(undefined, {
						month: "short",
						day: "numeric",
						year: "numeric",
						hour: "numeric",
						minute: "numeric",
					})
				: "No date";

			return {
				title: nameFormatted,
				subtitle: subtitle || dateFormatted,
				media: image || EditIcon,
				date: dateFormatted,
			};
		},
	},
});
