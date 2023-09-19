import { useContext, useState } from "react";
import Image from "next/image";
import axios from "axios";
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
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
    useState(false);
  const { isOpen, toggleCartOpen, cartItems, removeItemFromCart } =
    useContext(CartContext);

  const totalCartValue = new Intl.NumberFormat("en-CA", {
    style: "currency",
    currency: "CAD",
  }).format(
    cartItems.reduce((acc, curr) => {
      const numberPrice = Number(curr.price.replace(/[^0-9.-]+/g, ""));
      return (acc += numberPrice);
    }, 0)
  );

  function handleOnCloseClicked() {
    toggleCartOpen();
  }

  function handleRemoveItemClicked(cartItemId: string) {
    return (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      event.preventDefault();
      removeItemFromCart(cartItemId);
    };
  }

  async function handleCompleteOrderClicked() {
    try {
      setIsCreatingCheckoutSession(true);

      const response = await axios.post("/api/checkout", {
        priceId: "", //product.defaultPriceId,
      });

      const { checkoutUrl } = response.data;

      window.location.href = checkoutUrl;
    } catch (err) {
      // TODO: Add Sentry / Datadog for capturing this error
      setIsCreatingCheckoutSession(false);
      alert("Error while redirecting to checkout!");
    }
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
        {cartItems.map((cartItem) => (
          <li key={cartItem.id}>
            <CartItemImageContainer>
              <Image src={cartItem.imageUrl} alt="" width={94} height={94} />
            </CartItemImageContainer>

            <CartItemTextContainer>
              <span>{cartItem.name}</span>
              <span>
                <strong>CAD {cartItem.price}</strong>
              </span>
              <button onClick={handleRemoveItemClicked(cartItem.id)}>
                Remove
              </button>
            </CartItemTextContainer>
          </li>
        ))}
      </ul>

      <SummaryContainer>
        <div>
          <span>Quantity</span>
          <span>
            {cartItems.length} item{cartItems.length !== 1 && "s"}
          </span>
        </div>

        <PriceRow>
          <span>Total value</span>
          <span>CAD {totalCartValue}</span>
        </PriceRow>

        <button
          onClick={handleCompleteOrderClicked}
          disabled={cartItems.length === 0 || isCreatingCheckoutSession}
        >
          Complete order
        </button>
      </SummaryContainer>
    </CartContainer>
  );
}
