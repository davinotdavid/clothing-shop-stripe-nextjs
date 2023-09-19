import type { AppProps } from "next/app";
import Image from "next/image";
import { globalStyles } from "@/styles/global";
import { Container, Header } from "@/styles/pages/app";
import logoSVG from "@/assets/logo.svg";
import { Handbag } from "phosphor-react";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Image src={logoSVG} alt="" />

        <button>
          <Handbag size={24} weight="bold" />
          <span>1</span>
        </button>
      </Header>
      <Component {...pageProps} />
    </Container>
  );
}
