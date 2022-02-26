import { useState, createContext, useContext, FC } from "react";

const CartContext = createContext<any>({});

export const CartProvider: FC = ({ children }) => {
  const [isDirty, setIsDirty] = useState(false);

  const value = { isDirty, setIsDirty };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  return useContext(CartContext);
};
