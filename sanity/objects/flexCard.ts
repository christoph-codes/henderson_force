import { SchemaTypeDefinition, defineField, defineType } from "sanity";
import { EditIcon } from "@sanity/icons";
import { FaVrCardboard } from "react-icons/fa";

export const flexCard: SchemaTypeDefinition = defineType({
  name: "flexCard",
  title: "Flex Card",
  type: "object",
  icon: FaVrCardboard,
  fields: [
    defineField({
      name: "title",
      type: "array",
      validation: (rule) =>
        rule.required().error(`Required to generate a flex card`),
      of: [{ type: "block" }],
    }),
    defineField({
      name: "slug",
      type: "slug",
      validation: (rule) =>
        rule.required().error(`Required to generate a flex card`),
    }),
    defineField({
      name: "image",
      description: "Need a primary image for SEO",
      type: "image",
    }),
    defineField({
      name: "description",
      type: "string",
      initialValue: "This is an example description PLEASE REPLACE",
    }),
    defineField({
      name: "link",
      title: "Link",
      type: "string",
    }),
    // need to add order be able to order the featured posts
    defineField({
      name: "order",
      type: "number",
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "description",
      media: "image",
    },
    prepare({ title, subtitle, date, image }) {
      const nameFormatted = title[0].children[0].text || "Untitled post";

      return {
        title: nameFormatted,
        subtitle: subtitle,
        media: image || EditIcon,
      };
    },
  },
});
