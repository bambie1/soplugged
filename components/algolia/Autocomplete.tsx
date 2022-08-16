import { autocomplete } from "@algolia/autocomplete-js";
import { createElement, Fragment, useEffect, useRef } from "react";
import { render } from "react-dom";

export function Autocomplete(props: any) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) {
      return undefined;
    }

    const search = autocomplete({
      container: containerRef.current,
      renderer: { createElement, Fragment, render },
      placeholder: "Find a black-owned business",
      ...props,
    });

    return () => {
      search.destroy();
    };
  }, [props]);

  return <div ref={containerRef} className="w-full" />;
}
