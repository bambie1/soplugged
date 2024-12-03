import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId } from "../env";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
});

export function getFileUrl(assetRef: string) {
  const [_, id, extension] = assetRef.split("-");
  return `https://cdn.sanity.io/files/${projectId}/production/${id}.${extension}`;
}
