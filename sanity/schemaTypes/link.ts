import { LinkIcon } from "@sanity/icons";
import { SchemaTypeDefinition, defineField, defineType } from "sanity";

export const link: SchemaTypeDefinition = defineType({
	name: "link",
	title: "Links",
	type: "document",
	icon: LinkIcon,
	groups: [
		{ name: "metadata", title: "Metadata" },
		{ name: "content", title: "Link" },
	],
	fields: [
		defineField({
			name: "name",
			type: "string",
			validation: (rule) =>
				rule.required().error(`Required to generate a page on the website`),
			group: "metadata",
		}),
		defineField({
			name: "slug",
			type: "slug",
			hidden: ({ document }) => !document?.name,
			validation: (rule) =>
				rule.required().error(`Required to generate a page on the website`),
			options: {
				source: "name",
				slugify: (input) =>
					input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
			},
			group: "metadata",
		}),
		defineField({
			name: "link",
			type: "string",
			group: "content",
		}),
		defineField({
			name: "category",
			type: "array",
			of: [
				{
					type: "string",
				},
			],
			options: {
				list: ["social", "header", "footer"],
			},
			group: "content",
		}),
		defineField({
			name: "description",
			type: "string",
			placeholder: "Description of the link goes here",
			group: "metadata",
		}),
	],
	preview: {
		select: {
			title: "name",
			subtitle: "description",
		},
	},
});
