import { CalendarIcon, EditIcon } from "@sanity/icons";
import { SchemaTypeDefinition, defineType } from "sanity";

export const event: SchemaTypeDefinition = defineType({
	name: "event",
	title: "Events",
	type: "document",
	icon: CalendarIcon,
	groups: [
		{ name: "metadata", title: "Metadata" },
		{ name: "content", title: "Content" },
	],
	fields: [
		{
			name: "name",
			title: "Event Name",
			type: "string",
			validation: (rule) =>
				rule.required().error(`Required to generate a page on the website`),
			group: "metadata",
		},
		{
			name: "date",
			type: "datetime",
			validation: (rule) =>
				rule.required().error(`Date and time of the event is required`),
			group: "content",
		},
		{
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
						.concat("-" + new Date().getFullYear().toString())
						.concat("-" + new Date().getMonth().toString())
						.concat("-" + new Date().getUTCDay().toString()),
			},
			group: "metadata",
		},
		{
			name: "description",
			type: "string",
			placeholder: "A short description about the event",
			group: ["content", "metadata"],
		},
		{
			name: "details",
			type: "text",
			placeholder: "Additional details about the event",
			group: "content",
		},
		{
			name: "location",
			type: "string",
			placeholder: "The location of the event",
			group: "content",
		},
		{
			name: "link",
			type: "url",
			placeholder: "https://www.example.com",
			group: "content",
		},
	],
	preview: {
		select: {
			title: "name",
			date: "date",
		},
		prepare({ title, date }) {
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
				title,
				subtitle: dateFormatted,
				media: EditIcon,
			};
		},
	},
});
