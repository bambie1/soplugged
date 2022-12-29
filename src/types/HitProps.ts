import { AlgoliaHit } from "instantsearch.js/es/types";

export type CategoryHitProps = {
  hit: AlgoliaHit<{
    name: string;
  }>;
  components?: any;
};

export type BusinessHitProps = {
  hit: AlgoliaBusinessHit;
};

export type AlgoliaBusinessHit = AlgoliaHit<{
  business_name: string;
  category: string;
  business_description: string;
  business_location: string;
  sample_images?: string;
  logo_url?: string;
}>;
