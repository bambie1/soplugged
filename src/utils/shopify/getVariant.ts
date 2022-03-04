export function getVariant(variants: any, opts: any) {
  const variant = variants.edges.find((variant: any) => {
    return Object.entries(opts).every(([key, value]: any) => {
      return variant.node.selectedOptions.find((option: any) => {
        // console.log({ key, option, value });
        if (key.toLowerCase() == option.name.toLowerCase()) {
          return option.value.toLowerCase() == value.toLowerCase();
        }
      });
    });
  });

  return variant;
}
