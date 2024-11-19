import { createClient } from "@/utils/supabase/server";

import { SearchBar } from "./search-bar";
import { SearchResults } from "./search-results";

export default async function DirectoryPage() {
  const supabase = await createClient();
  const { data: businesses } = await supabase
    .from("businesses")
    .select()
    .order("confidence_rating", { ascending: true })
    .order("sample_images", { ascending: true });

  return (
    <>
      <SearchBar />
      <SearchResults businesses={businesses ?? []} />
    </>
  );
}
