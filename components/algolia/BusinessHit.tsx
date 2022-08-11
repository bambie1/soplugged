export function BusinessHit({ hit, components }: any) {
  return (
    <a href={`/business/${hit.slug}`} className="aa-ItemLink">
      <div className="flex items-center gap-4 text-left">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        </svg>
        <div className="aa-ItemContent">
          <div className="flex flex-col">
            <div className="aa-ItemTitle uppercase">
              <components.Highlight hit={hit} attribute="business_name" />
            </div>
            <div className="text-sm text-gray-500">
              <components.Highlight hit={hit} attribute="category" />
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}
