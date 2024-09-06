import { post } from "./post";
import { page } from "./page";
import { media } from "./media";
import { link } from "./link";
import { partner_logos } from "./partner_logos";
import { staff } from "./staff";
import { game } from "./game";
import { event } from "./event";
import { player } from "./player";
import { SchemaTypeDefinition } from "sanity";
import { siteConfig } from "./siteConfig";
import { team } from "./team";
export const documents: SchemaTypeDefinition[] = [
  siteConfig,
  page,
  post,
  media,
  link,
  staff,
  partner_logos,
  game,
  event,
  player,
  team,
];
