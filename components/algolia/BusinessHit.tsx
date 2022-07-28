export function BusinessHit({ hit, components }: any) {
  return (
    <a href={`/business/${hit.slug}`} className="aa-ItemLink">
      <div className="aa-ItemContent">
        <div className="aa-ItemTitle">
          <components.Highlight hit={hit} attribute="business_name" />
        </div>
        <div className="text-sm text-gray-500">
          <components.Highlight hit={hit} attribute="business_location" />
        </div>
      </div>
    </a>
  );
}
