import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { HomeContainer, Product } from "@/styles/pages/home";

export default function Home() {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  });

  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      <Product className="keen-slider__slide">
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

      <Product className="keen-slider__slide">
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

      <Product className="keen-slider__slide">
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

      <Product className="keen-slider__slide">
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
