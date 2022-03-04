import { useState, createContext, useContext, FC } from "react";

const CartContext = createContext<any>({});

export const CartProvider: FC = ({ children }) => {
  const [isDirty, setIsDirty] = useState(false);
  const [selectedVariant, setSelectedVariant] = useState<any>();

  const updateVariant = (variant: any) => setSelectedVariant(variant);

  const value = { isDirty, setIsDirty, selectedVariant, updateVariant };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  return useContext(CartContext);
};
