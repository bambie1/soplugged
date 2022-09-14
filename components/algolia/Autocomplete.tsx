import { autocomplete } from "@algolia/autocomplete-js";
import { createElement, Fragment, useEffect, useRef, useState } from "react";
import { render } from "react-dom";

const placeholderArray = [
  "a hair stylist",
  "an event planner",
  "a caterer",
  "a make-up artist",
  "a photographer",
  "a business",
];

export function Autocomplete({ ...props }: any) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) {
      return undefined;
    }

    const search = autocomplete({
      container: containerRef.current,
      renderer: { createElement, Fragment, render },
      placeholder: `Find a business near you...`,
      ...props,
    });

    return () => {
      search.destroy();
    };
  }, [props]);

  return <div ref={containerRef} className="w-full" />;
}
