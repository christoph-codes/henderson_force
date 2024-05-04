import { SchemaTypeDefinition, defineField, defineType } from "sanity";
import { EditIcon, SunIcon } from "@sanity/icons";

export const page: SchemaTypeDefinition = defineType({
	name: "page",
	title: "Pages",
	type: "document",
	icon: SunIcon,
	groups: [
		{ name: "metadata", title: "Metadata" },
		{ name: "content", title: "Page Content" },
	],
	fields: [
		defineField({
			name: "home_page",
			title: "Home Page?",
			type: "boolean",
			group: "metadata",
		}),
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
			name: "image",
			description:
				"This field is important for SEO and should be edited everytime",
			type: "image",
			group: "content",
		}),
		defineField({
			name: "test_field",
			type: "string",
			options: {
				list: ["in-person", "virtual"],
				layout: "radio",
			},
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
			of: [
				{
					type: "block",
					marks: {
						decorators: [],
						annotations: [
							{
								title: "Inline Icon",
								name: "inlineicon",
								type: "image",
							},
						],
					},
				},
			],
			group: "content",
		}),
	],
	preview: {
		select: {
			title: "name",
			subtitle: "description",
			media: "image",
			date: "date",
		},
		prepare({ title, subtitle, date, image }) {
			const nameFormatted = title || "Untitled event";
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
