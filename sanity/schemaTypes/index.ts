import { post } from "./post";
import { page } from "./page";
import { media } from "./media";
import { link } from "./link";
import { partner_logos } from "./partner_logos";
import { coach } from "./coach";
import { game } from "./game";
import { event } from "./event";
import { player } from "./player";
import { SchemaTypeDefinition } from "sanity";
export const schemaTypes: SchemaTypeDefinition[] = [
	page,
	post,
	media,
	link,
	coach,
	partner_logos,
	game,
	event,
	player,
];
