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
			name: "alumni",
			title: "Alumni?",
			type: "boolean",
			group: "content",
		}),
		defineField({
			name: "position",
			title: "Position",
			type: "string",
			options: {
				list: ["Goalie", "Defense", "Forward"],
				layout: "dropdown",
			},
			group: "content",
		}),
		defineField({
			name: "elite_prospects",
			title: "Elite Prospects Link",
			placeholder:
				"https://www.eliteprospects.com/player/32872/jonathan-marchessault",
			type: "url",
			group: "content",
		}),
		defineField({
			name: "usphl",
			title: "USPHL Link",
			description: "Link to the player's USPHL profile",
			placeholder: "https://www.usphl.com/player?playerId=123456",
			type: "url",
			group: "content",
		}),
		defineField({
			name: "height",
			title: "Height",
			type: "string",
			group: "content",
		}),
		defineField({
			name: "weight",
			title: "Weight",
			type: "string",
			group: "content",
		}),
		defineField({
			name: "hometown",
			title: "Home Town",
			type: "string",
			group: "content",
		}),
		defineField({
			name: "shooting_side",
			title: "Shooting Side",
			type: "string",
			options: {
				list: ["Right", "Left"],
				layout: "dropdown",
			},
			group: "content",
		}),
		defineField({
			name: "catching_side",
			title: "Catching Side",
			type: "string",
			options: {
				list: ["Right", "Left"],
				layout: "dropdown",
			},
			group: "content",
		}),
		defineField({
			name: "bio",
			type: "array",
			of: [{ type: "block" }],
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
