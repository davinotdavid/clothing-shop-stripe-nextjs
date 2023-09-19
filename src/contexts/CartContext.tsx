import { ReactNode, createContext, useState } from "react";

type CartContextType = {
  cartItems: [];
  isOpen: boolean;
  addItemToCart: () => void;
  removeItemFromCart: () => void;
  toggleCartOpen: () => void;
};

export const CartContext = createContext<CartContextType>(
  {} as CartContextType
);

interface CartContextProviderProps {
  children: ReactNode;
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [shoppingCart, setShoppingCart] = useState<CartContextType>(
    {} as CartContextType
  );

  function addItemToCart() {}

  function removeItemFromCart() {}

  function toggleCartOpen() {
    setShoppingCart((prev) => {
      return { ...prev, isOpen: !prev.isOpen };
    });
  }

  return (
    <CartContext.Provider
      value={{
        addItemToCart,
        removeItemFromCart,
        toggleCartOpen,
        isOpen: shoppingCart.isOpen,
        cartItems: shoppingCart.cartItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
