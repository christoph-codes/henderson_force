import { BoltIcon, EditIcon } from "@sanity/icons";
import { SchemaTypeDefinition, defineField, defineType } from "sanity";

export const coach: SchemaTypeDefinition = defineType({
	name: "coach",
	title: "Coaches",
	type: "document",
	icon: BoltIcon,
	groups: [
		{ name: "metadata", title: "Metadata" },
		{ name: "content", title: "Content" },
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
			name: "headshot",
			title: "Headshot",
			description: "A good quality headshot of the coach.",
			type: "image",
			group: "content",
		}),
		defineField({
			name: "description",
			type: "string",
			placeholder: "A short description about the coach",
			group: ["content", "metadata"],
		}),
		defineField({
			name: "position",
			title: "Position",
			type: "string",
			placeholder: "Assistant coach",
			group: "content",
		}),
	],
	preview: {
		select: {
			title: "name",
			subtitle: "position",
			media: "image",
		},
		prepare({ title, subtitle, media }) {
			return {
				title,
				subtitle,
				media: media || EditIcon,
			};
		},
	},
});
