import useAlgolia from "@/hooks/useAlgolia";

export function CategoryHit({ hit, components }: any) {
  const { handleCategoryClick } = useAlgolia();

  const onClick = () => {
    handleCategoryClick(hit.name);
  };

  return (
    <button onClick={onClick} className="aa-ItemLink">
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
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <div className="aa-ItemContent">
          <div className="flex flex-col">
            <div className="aa-ItemTitle">
              <components.Highlight hit={hit} attribute="name" />
            </div>
          </div>
        </div>
      </div>
    </button>
  );
}
