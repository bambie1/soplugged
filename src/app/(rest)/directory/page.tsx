import { SearchBar } from "./search-bar";
import { SearchResults } from "./search-results";

export default async function DirectoryPage() {
  return (
    <>
      <SearchBar />
      <SearchResults />
    </>
  );
}
