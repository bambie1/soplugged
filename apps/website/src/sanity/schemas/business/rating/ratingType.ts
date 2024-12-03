import { defineType } from "sanity";

import { RatingInput } from "./RatingInput";

export const ratingType = defineType({
  name: "rating",
  title: "Rating",
  type: "number",
  validation: (rule) => rule.min(1).max(5),
  components: { input: RatingInput },
});
