import { EditIcon, PlayIcon } from "@sanity/icons";
import { SchemaTypeDefinition, defineField, defineType } from "sanity";

// Create a game schema type with the following fields: opponent name, date, score, game link, description, opponent logo, and at/vs.
export const game: SchemaTypeDefinition = defineType({
  name: "game",
  title: "Game",
  type: "document",
  icon: PlayIcon,
  groups: [
    { name: "details", title: "Details" },
    { name: "results", title: "Results" },
  ],
  fields: [
    defineField({
      name: "opponent",
      type: "reference",
      to: [{ type: "team" }],
      group: "details",
    }),
    defineField({
      name: "date",
      type: "datetime",
      validation: (rule) =>
        rule.required().error(`Date and time of the game is required`),
      group: "details",
    }),
    defineField({
      name: "at_vs",
      title: "Location",
      type: "string",
      options: {
        list: ["at", "vs"],
        layout: "radio",
      },
      group: "details",
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
      group: "details",
    }),
  ],
  preview: {
    select: {
      title: "opponent.name",
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
