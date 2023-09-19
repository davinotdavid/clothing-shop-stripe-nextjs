import Link from "next/link";
import { GetServerSideProps } from "next";
import {
  ImagesContainer,
  ImageContainer,
  SuccessContainer,
} from "@/styles/pages/success";
import { stripe } from "@/lib/stripe";
import Stripe from "stripe";
import Image from "next/image";
import Head from "next/head";

interface SuccessProps {
  customerName: string;
  products: {
    name: string;
    imageUrl: string;
  }[];
}

export default function Success({ customerName, products }: SuccessProps) {
  console.log(products);

  return (
    <>
      <Head>
        <title>Order successful | Ignite Shop</title>
        <meta name="robots" content="noindex" />
      </Head>

      <SuccessContainer>
        <h1>Order successful!</h1>
        <ImagesContainer>
          {products.map((product) => (
            <ImageContainer key={product.name}>
              <Image src={product.imageUrl} width={120} height={110} alt="" />
            </ImageContainer>
          ))}
        </ImagesContainer>

        <p>
          Woohoo <strong>{customerName}</strong>, your order of{" "}
          {products.length} t-shirt{products.length > 1 && "s"}
          {products.length > 1
            ? " are on their way to you"
            : " is on its way to you"}
          !
        </p>

        <Link href="/">Back to catalog</Link>
      </SuccessContainer>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.session_id) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  const sessionId = String(query.session_id);

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ["line_items", "line_items.data.price.product"],
  });

  const customerName = session.customer_details?.name;

  const products = session.line_items?.data.map((p) => {
    const product = p.price?.product as Stripe.Product;
    return {
      name: product.name,
      imageUrl: product.images[0],
    };
  });

  return {
    props: {
      customerName,
      products,
    },
  };
};
