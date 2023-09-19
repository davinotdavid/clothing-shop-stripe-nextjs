import { ReactNode, createContext, useState } from "react";

type Product = {
  id: string;
  name: string;
  imageUrl: string;
  price: string;
  defaultPriceId: string;
  description: string;
};

type CartContextType = {
  cartItems: Product[];
  isOpen: boolean;
  addItemToCart: (product: Product) => void;
  removeItemFromCart: () => void;
  toggleCartOpen: () => void;
};

type CartContextState = {
  cartItems: Product[];
  isOpen: boolean;
};

export const CartContext = createContext<CartContextType>(
  {} as CartContextType
);

interface CartContextProviderProps {
  children: ReactNode;
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [shoppingCart, setShoppingCart] = useState<CartContextState>({
    cartItems: [],
    isOpen: false,
  });

  function addItemToCart(product: Product) {
    setShoppingCart((prev) => {
      return {
        ...prev,
        cartItems: [...prev.cartItems, product],
      };
    });
  }

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
