import Image from "next/image";
import { useRouter } from "next/router";
import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from "@/styles/pages/product";

export default function Product() {
  const { query } = useRouter();

  return (
    <ProductContainer>
      <ImageContainer></ImageContainer>

      <ProductDetails>
        <h1>T-Shirt X</h1>
        <span>CAD 79.90</span>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus ex
          ratione rerum repellat esse porro hic aliquid exercitationem nemo quas
          excepturi, tempore at labore accusantium minima nam blanditiis maiores
          iste?
        </p>

        <button>Buy now</button>
      </ProductDetails>
    </ProductContainer>
  );
}
