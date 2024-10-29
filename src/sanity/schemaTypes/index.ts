import { type SchemaTypeDefinition } from "sanity";

import { businessSchemaTypes } from "./business";
import { eventType } from "./eventType";
import home from "./pages/home";
import siteSettings from "./site-settings";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [eventType, siteSettings, ...businessSchemaTypes, home],
};
