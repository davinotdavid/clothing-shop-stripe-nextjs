import type { AppProps } from "next/app";
import Image from "next/image";
import { globalStyles } from "@/styles/global";
import { Container, Header } from "@/styles/pages/app";
import logoSVG from "@/assets/logo.svg";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Image src={logoSVG} alt="" />
      </Header>
      <Component {...pageProps} />
    </Container>
  );
}
