import Image from "next/image";
import { HomeContainer, Product } from "@/styles/pages/home";

export default function Home() {
  return (
    <HomeContainer>
      <Product>
        <Image
          src="http://placekitten.com/g/520/480"
          alt=""
          width={520}
          height={480}
        />

        <footer>
          <strong>Cat T-Shirt</strong>
          <span>CAD 35.00</span>
        </footer>
      </Product>

      <Product>
        <Image
          src="http://placekitten.com/g/520/480"
          alt=""
          width={520}
          height={480}
        />

        <footer>
          <strong>Cat T-Shirt</strong>
          <span>CAD 35.00</span>
        </footer>
      </Product>
    </HomeContainer>
  );
}
