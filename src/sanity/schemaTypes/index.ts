import { type SchemaTypeDefinition } from "sanity";

import { businessSchemaTypes } from "./business";
import { eventType } from "./eventType";
import { pageSchemaTypes } from "./page-builder";
import siteSettings from "./site-settings";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [eventType, siteSettings, ...businessSchemaTypes, ...pageSchemaTypes],
};
