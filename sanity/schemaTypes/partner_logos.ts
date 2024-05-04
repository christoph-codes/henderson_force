import { SparklesIcon } from "@sanity/icons";
import { SchemaTypeDefinition, defineField, defineType } from "sanity";

// Create a sanity schema type for partner logos with the following fields: name, slug, link, logo_image, description, sponsor_level, and sponsor_type. The name field should be required and the slug field should be hidden if the name field is not present. The link field should be optional and should be a string. The logo_image field should be required and should be an image. The description field should be optional and should be a string. The sponsor_level field should be required and should be a string with options "gold", "silver", "bronze", and "partner". The sponsor_type field should be required and should be a string with options "company" and "individual". The schema type should have an icon of the TrophyIcon from @sanity/icons. The schema type should have two groups: metadata and content. The metadata group should include the fields name, slug, link, description, sponsor_level, and sponsor_type. The content group should include the field logo_image. The schema type should have a preview with the title as the name field, the subtitle as the description field, and the media as the logo_image field or the TrophyIcon if no logo_image is present.
export const partner_logos: SchemaTypeDefinition = defineType({
	name: "partner_logos",
	title: "Partner Logos",
	type: "document",
	icon: SparklesIcon,
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
			name: "link",
			type: "string",
			group: "content",
		}),
		defineField({
			name: "logo_image",
			type: "image",
			validation: (rule) => rule.required().error(`Required for partner logo`),
			group: "content",
		}),
		defineField({
			name: "description",
			type: "string",
			group: "metadata",
		}),
		defineField({
			name: "sponsor_level",
			type: "string",
			options: {
				list: ["gold", "silver", "bronze", "partner"],
				layout: "radio",
			},
			validation: (rule) => rule.required().error(`Required for partner logo`),
			group: "metadata",
			hidden: true,
		}),
	],
	preview: {
		select: {
			title: "name",
			subtitle: "description",
			media: "logo_image",
		},
	},
});
