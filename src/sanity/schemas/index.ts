import { type SchemaTypeDefinition } from "sanity";

import { authorType } from "./authorType";
import { blogSchemaTypes } from "./blog";
import { businessSchemaTypes } from "./business";
import { ratingType } from "./business/rating/ratingType";
import { eventType } from "./eventType";
import { blogPageType } from "./pages/blog";
import { directoryPageType } from "./pages/directory";
import { eventPageType } from "./pages/event";
import { homeType } from "./pages/home";
import { ourStoryType } from "./pages/our-story";
import { podcastPageType } from "./pages/podcast";
import { SEOType } from "./pages/seo";
import { podcastSchemaTypes } from "./podcast";
import siteSettings from "./site-settings";

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
    SEOType,
    homeType,
    ourStoryType,
    podcastPageType,
    blogPageType,
    eventPageType,
    directoryPageType,
  ],
};
