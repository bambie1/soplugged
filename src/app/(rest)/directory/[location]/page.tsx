import { Header } from "@/components/Header";
import { SubscribeBanner } from "@/components/shared/SubscribeBanner";

import { SearchBar } from "../search-bar";
import { SearchResults } from "../search-results";

export default async function LocationDirectoryPage() {
  return (
    <div className="relative z-10">
      <Header />

      <div className="absolute left-0 top-0 -z-10 h-80 w-full bg-gradient-to-b from-[#F2EDE3] to-white"></div>

      <div className="mx-auto flex max-w-3xl flex-col items-center pb-16 pt-28 text-center text-primary lg:pt-48">
        <h1 className="mb-4">Find Black-owned businesses near you</h1>
        <p className="lg:text-lg">
          From hair salons to event planning teams across Canada, our directory
          helps you #buyblack
        </p>
      </div>

      <div className="mb-20">
        <SearchBar />
        <SearchResults />
      </div>

      <SubscribeBanner />
    </div>
  );
}
