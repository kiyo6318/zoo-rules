import type { AppProps } from "next/app";
import { Stage } from "@inlet/react-pixi";
import { Pixi } from "../components/Pixi";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Pixi>
      <Component {...pageProps} />
    </Pixi>
  );
}

export default MyApp;
