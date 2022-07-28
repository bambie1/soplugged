import useAlgolia from "@/hooks/useAlgolia";
import { createURL } from "../algolia-old/AlgoliaSearch";

export function CategoryHit({ hit, components }: any) {
  const { handleCategoryClick } = useAlgolia();

  const onClick = () => {
    handleCategoryClick(hit.name);
  };

  return (
    <button onClick={onClick} className="aa-ItemLink">
      <div className="aa-ItemContent">
        <div className="aa-ItemTitle">
          <components.Highlight hit={hit} attribute="name" />
        </div>
      </div>
    </button>
  );
}
