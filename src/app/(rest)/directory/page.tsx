import { createClient } from "@/utils/supabase/server";

import { SearchBar } from "./search-bar";
import { SearchResults } from "./search-results";

export default async function DirectoryPage() {
  const supabase = await createClient();
  const { data: businesses } = await supabase
    .from("businesses")
    .select()
    .order("confidence_rating", { ascending: false, nullsFirst: false })
    .order("sample_images", { ascending: false, nullsFirst: false });

  return (
    <>
      <SearchBar />
      <SearchResults businesses={businesses ?? []} />
    </>
  );
}
