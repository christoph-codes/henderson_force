import { type SchemaTypeDefinition } from "sanity";
import { page, post } from "./schemaTypes";

export const schema: { types: SchemaTypeDefinition[] } = {
	types: [page, post],
};
