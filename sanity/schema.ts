import { type SchemaTypeDefinition } from "sanity";
import { documents } from "./documents";

export const schema: { types: SchemaTypeDefinition[] } = {
	types: documents,
};
