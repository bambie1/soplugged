import { type SchemaTypeDefinition } from "sanity";

import { blogSchemaTypes } from "./blog";
import { businessSchemaTypes } from "./business";
import { ratingType } from "./business/rating/ratingType";
import { eventType } from "./eventType";
import { homeType } from "./pages/home";
import { ourStoryType } from "./pages/our-story";
import { podcastSchemaTypes } from "./podcast";
import siteSettings from "./site-settings";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    eventType,
    siteSettings,
    ...businessSchemaTypes,
    ...blogSchemaTypes,
    ...podcastSchemaTypes,
    homeType,
    ourStoryType,
    ratingType,
  ],
};
