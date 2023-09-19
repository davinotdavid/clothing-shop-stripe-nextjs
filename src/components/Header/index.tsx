import { useContext } from "react";
import { CartContext } from "@/contexts/CartContext";
import { Handbag } from "phosphor-react";
import Image from "next/image";
import logoSVG from "@/assets/logo.svg";
import { StyledHeader } from "./styles";

export function Header() {
  const { toggleCartOpen } = useContext(CartContext);

  function handleCartButtonClicked() {
    toggleCartOpen();
  }

  return (
    <StyledHeader>
      <Image src={logoSVG} alt="" />

      <button onClick={handleCartButtonClicked}>
        <Handbag size={24} weight="bold" />
        <span>1</span>
      </button>
    </StyledHeader>
  );
}
