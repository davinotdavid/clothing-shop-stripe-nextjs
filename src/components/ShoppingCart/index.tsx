import { useContext } from "react";
import { X } from "phosphor-react";
import { CartContext } from "@/contexts/CartContext";
import {
  CartContainer,
  CartItemImageContainer,
  CartItemTextContainer,
  CloseButtonContainer,
  PriceRow,
  SummaryContainer,
} from "./styles";

export function ShoppingCart() {
  const { isOpen, toggleCartOpen } = useContext(CartContext);

  function handleOnCloseClicked() {
    toggleCartOpen();
  }

  return (
    <CartContainer isOpen={isOpen ? "open" : "closed"}>
      <CloseButtonContainer>
        <button onClick={handleOnCloseClicked}>
          <X size={24} />
        </button>
      </CloseButtonContainer>
      <h2>Shopping cart</h2>

      <ul>
        <li>
          <CartItemImageContainer>
            <img src="" alt="" />
          </CartItemImageContainer>

          <CartItemTextContainer>
            <span>T-Shirt Beyond the Limits</span>
            <span>
              <strong>CAD 79,90</strong>
            </span>
            <button>Remove</button>
          </CartItemTextContainer>
        </li>
      </ul>

      <SummaryContainer>
        <div>
          <span>Quantity</span>
          <span>3 items</span>
        </div>

        <PriceRow>
          <span>Total value</span>
          <span>CAD 270,00</span>
        </PriceRow>

        <button>Complete order</button>
      </SummaryContainer>
    </CartContainer>
  );
}
