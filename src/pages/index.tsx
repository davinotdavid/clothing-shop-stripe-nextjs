import { GetStaticProps } from "next";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Stripe from "stripe";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { HomeContainer, Product } from "@/styles/pages/home";
import { stripe } from "@/lib/stripe";
import { Handbag } from "phosphor-react";
import { useContext } from "react";
import { CartContext } from "@/contexts/CartContext";

interface Product {
  id: string;
  name: string;
  imageUrl: string;
  price: string;
  defaultPriceId: string;
  description: string;
}

interface HomeProps {
  products: Product[];
}

export default function Home({ products }: HomeProps) {
  const { addItemToCart } = useContext(CartContext);
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  });

  const handleOnAddToCartClicked =
    (product: Product) =>
    (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      event.preventDefault();

      addItemToCart(product);
    };

  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>

      <HomeContainer ref={sliderRef} className="keen-slider">
        {products.map((product) => (
          <Link
            key={product.id}
            href={`/product/${product.id}`}
            prefetch={false}
          >
            <Product className="keen-slider__slide">
              <Image src={product.imageUrl} alt="" width={520} height={480} />

              <footer>
                <div>
                  <strong>{product.name}</strong>
                  <span>CAD {product.price}</span>
                </div>

                <button onClick={handleOnAddToCartClicked(product)}>
                  <Handbag size={32} weight="bold" />
                </button>
              </footer>
            </Product>
          </Link>
        ))}
      </HomeContainer>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ["data.default_price"],
  });

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price;

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: price.unit_amount
        ? new Intl.NumberFormat("en-CA", {
            style: "currency",
            currency: "CAD",
          }).format(price.unit_amount / 100)
        : null,
      defaultPriceId: price.id,
      description: product.description,
    };
  });

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2, // hours
  };
};
