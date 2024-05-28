import { EditIcon, UsersIcon } from "@sanity/icons";
import { SchemaTypeDefinition, defineField, defineType } from "sanity";

export const player: SchemaTypeDefinition = defineType({
	name: "player",
	title: "Players",
	type: "document",
	icon: UsersIcon,
	groups: [
		{
			name: "metadata",
			title: "Metadata",
		},
		{
			name: "content",
			title: "Content",
		},
	],
	fields: [
		defineField({
			name: "name",
			title: "Player Name",
			type: "string",
			group: "content",
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
					input
						.toLowerCase()
						.replace(/\s+/g, "-")
						.slice(0, 200)
						.concat(`-${Date.now()}`),
			},
			group: "metadata",
		}),
		defineField({
			name: "image",
			type: "image",
			group: "content",
		}),
		defineField({
			name: "number",
			title: "Jersey Number",
			type: "number",
			group: "content",
		}),
		defineField({
			name: "position",
			title: "Position",
			type: "string",
			options: {
				list: ["Goalkeeper", "Defender", "Midfielder", "Forward"],
				layout: "dropdown",
			},
			group: "content",
		}),
		defineField({
			name: "birthplace",
			title: "Birth Place",
			type: "string",
			options: {
				list: ["United States", "Canada"],
				layout: "dropdown",
			},
			group: "content",
		}),
		defineField({
			name: "bio",
			title: "Bio",
			type: "text",
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
