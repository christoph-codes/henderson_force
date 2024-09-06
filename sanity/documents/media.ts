import { EditIcon, PlayIcon } from "@sanity/icons";
import { SchemaTypeDefinition, defineField, defineType } from "sanity";

export const media: SchemaTypeDefinition = defineType({
  name: "media",
  title: "Media",
  type: "document",
  icon: PlayIcon,
  groups: [
    { name: "metadata", title: "Metadata" },
    { name: "content", title: "File" },
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
      name: "media",
      type: "file",
      group: "content",
    }),
    defineField({
      name: "description",
      type: "string",
      placeholder: "Description of uploaded media goes here",
      group: "metadata",
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "description",
      media: "media",
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
