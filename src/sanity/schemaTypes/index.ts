import { type SchemaTypeDefinition } from "sanity";

import { blogSchemaTypes } from "./blog";
import { businessSchemaTypes } from "./business";
import { eventType } from "./eventType";
import home from "./pages/home";
import { podcastSchemaTypes } from "./podcast";
import siteSettings from "./site-settings";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    eventType,
    siteSettings,
    ...businessSchemaTypes,
    ...blogSchemaTypes,
    ...podcastSchemaTypes,
    home,
  ],
};
