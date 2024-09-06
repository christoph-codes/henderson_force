import { SparklesIcon } from "@sanity/icons";
import { SchemaTypeDefinition, defineField, defineType } from "sanity";

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
      name: "featured",
      type: "boolean",
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
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "description",
      media: "logo_image",
    },
  },
});
