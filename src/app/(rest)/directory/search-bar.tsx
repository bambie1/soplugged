"use client";

import { ChevronDownIcon } from "@sanity/icons";
import { useState } from "react";

export const SearchBar = () => {
  const [location, setLocation] = useState("Canada-wide");
  const locations = ["Canada-wide", "Province 1", "Province 2", "City 1"];
  const popularSearches = ["Hair salons", "Event planners", "Photographers"];

  return (
    <div className="padded">
      <div className="mx-auto flex w-full max-w-xl items-stretch rounded-full border bg-white p-1 shadow-sm">
        {/* Search Input */}
        <input
          type="text"
          placeholder="What are you looking for?"
          className="flex-grow bg-transparent px-4 py-4 text-sm outline-none"
        />

        {/* Dropdown Button */}
        <div className="relative">
          <button
            className="flex h-full items-center gap-2 rounded-full bg-light px-4 py-2 text-sm focus:outline-none"
            onClick={(e) => e.stopPropagation()}
          >
            {location}
            <ChevronDownIcon className="h-4 w-4 text-gray-600" />
          </button>

          {/* Dropdown Menu */}
          <ul className="absolute right-0 mt-2 overflow-hidden rounded-md border bg-white text-sm shadow-lg">
            {/* {locations.map((loc) => (
              <li
                key={loc}
                className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                onClick={() => setLocation(loc)}
              >
                {loc}
              </li>
            ))} */}
          </ul>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-center gap-4">
        <p className="text-sm font-bold">Popular searches</p>
        <div className="flex flex-wrap items-center gap-2">
          {popularSearches.map((search) => (
            <button
              key={search}
              className="rounded-full bg-[#FCFAF8] px-4 py-2 text-sm"
            >
              {search}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
