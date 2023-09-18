import { useRouter } from "next/router";
import Image from "next/image";
import { GetStaticPaths, GetStaticProps } from "next";
import Stripe from "stripe";
import { stripe } from "@/lib/stripe";
import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from "@/styles/pages/product";

interface ProductProps {
  product: {
    id: string;
    name: string;
    imageUrl: string;
    price: string;
    description: string;
  };
}

export default function Product({ product }: ProductProps) {
  const { isFallback } = useRouter();

  if (isFallback) {
    return <p>Loading...</p>;
  }

  return (
    <ProductContainer>
      <ImageContainer>
        <Image src={product.imageUrl} width={520} height={480} alt="" />
      </ImageContainer>

      <ProductDetails>
        <h1>{product.name}</h1>
        <span>CAD {product.price}</span>

        <p>{product.description}</p>

        <button>Buy now</button>
      </ProductDetails>
    </ProductContainer>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      { params: { id: "prod_Of5etpsszAy6up" } },
      { params: { id: "prod_Of5eQHjmoMZC8T" } },
      { params: { id: "prod_Of5dAjW95d2JCL" } },
      { params: { id: "prod_Of5cAKpsMqg0v0" } },
    ],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({
  params,
}) => {
  if (!params) {
    return {
      props: {},
    };
  }

  const productId = params.id;

  const product = await stripe.products.retrieve(productId, {
    expand: ["default_price"],
  });

  const price = product.default_price as Stripe.Price;

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: price.unit_amount
          ? new Intl.NumberFormat("en-CA", {
              style: "currency",
              currency: "CAD",
            }).format(price.unit_amount / 100)
          : null,
        description: product.description,
      },
    },
    revalidate: 60 * 60 * 1, // 1 hour
  };
};
