import { EditIcon } from "@sanity/icons";
import { MdOutlineSportsHockey } from "react-icons/md";
import { defineField, defineType, SchemaTypeDefinition } from "sanity";

export const team: SchemaTypeDefinition = defineType({
  name: "team",
  title: "Team",
  type: "document",
  icon: MdOutlineSportsHockey,
  groups: [
    { name: "metadata", title: "Metadata" },
    { name: "content", title: "Content" },
  ],
  fields: [
    defineField({
      name: "name",
      type: "string",
      validation: (rule) =>
        rule.required().error(`Every team should have a name`),
      group: "metadata",
    }),
    defineField({
      name: "slug",
      type: "slug",
      hidden: ({ document }) => !document?.name,
      validation: (rule) =>
        rule.required().error(`Every team should have a name`),
      options: {
        source: "name",
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
      },
      group: "metadata",
    }),
    defineField({
      name: "logo",
      title: "Team Logo",
      description: "A good quality logo for the team",
      type: "image",
      group: "content",
    }),
    defineField({
      name: "venue",
      type: "string",
      title: "Team Venue",
      group: "content",
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "location",
      media: "logo",
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
