import { EditIcon, PlayIcon } from "@sanity/icons";
import { SchemaTypeDefinition, defineField, defineType } from "sanity";

// Create a game schema type with the following fields: opponent name, date, score, game link, description, opponent logo, and at/vs.
export const game: SchemaTypeDefinition = defineType({
	name: "game",
	title: "Game",
	type: "document",
	icon: PlayIcon,
	groups: [
		{ name: "metadata", title: "Metadata" },
		{ name: "content", title: "Content" },
		{ name: "results", title: "Results" },
	],
	fields: [
		defineField({
			name: "opponent_name",
			type: "string",
			validation: (rule) =>
				rule.required().error(`Required to generate a page on the website`),
			group: ["metadata", "content"],
		}),
		defineField({
			name: "opponent_logo",
			type: "image",
			group: "content",
		}),
		defineField({
			name: "slug",
			type: "slug",
			hidden: ({ document }) => !document?.opponent_name,
			validation: (rule) =>
				rule.required().error(`Required to generate a page on the website`),
			options: {
				source: "opponent_name",
				slugify: (input) =>
					input
						.toLowerCase()
						.replace(/\s+/g, "-")
						.slice(0, 200)
						.concat("-" + new Date().getFullYear().toString())
						.concat("-" + new Date().getMonth().toString())
						.concat("-" + new Date().getUTCDay().toString()),
			},
			group: "metadata",
		}),
		defineField({
			name: "date",
			type: "datetime",
			validation: (rule) =>
				rule.required().error(`Date and time of the game is required`),
			group: "content",
		}),
		defineField({
			name: "at_vs",
			title: "Location",
			type: "string",
			options: {
				list: ["at", "vs"],
				layout: "radio",
			},
			group: "content",
		}),
		defineField({
			name: "opponent_score",
			type: "number",
			group: "results",
		}),
		defineField({
			name: "team_score",
			type: "number",
			group: "results",
		}),
		defineField({
			name: "game_link",
			type: "url",
			group: "results",
		}),
	],
	preview: {
		select: {
			title: "opponent_name",
			media: "opponent_logo",
			date: "date",
			atvs: "at_vs",
		},
		prepare({ title, date, media, atvs }) {
			const nameFormatted = `${atvs} ${title}`;
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
				subtitle: dateFormatted,
				media: media || EditIcon,
				date: dateFormatted,
			};
		},
	},
});
