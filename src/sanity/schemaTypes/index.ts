import { type SchemaTypeDefinition } from "sanity";

import { blogSchemaTypes } from "./blog";
import { businessSchemaTypes } from "./business";
import { ratingType } from "./business/rating/ratingType";
import { eventType } from "./eventType";
import { homeType } from "./pages/home";
import { ourStoryType } from "./pages/our-story";
import { podcastSchemaTypes } from "./podcast";
import siteSettings from "./site-settings";
import { authorType } from "./authorType";
import { podcastPageType } from "./pages/podcast";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    eventType,
    siteSettings,
    ...businessSchemaTypes,
    ...blogSchemaTypes,
    ...podcastSchemaTypes,
    ratingType,
    authorType,

    // Page types
    homeType,
    ourStoryType,
    podcastPageType,
  ],
};
