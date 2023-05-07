// pages/_app.js
import { ChakraProvider } from "@chakra-ui/react";
import type { ReactElement, ReactNode } from "react";

// 1. Import the extendTheme function
import { extendTheme } from "@chakra-ui/react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

export const theme = extendTheme({ colors });

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

// 3. Pass the `theme` prop to the `ChakraProvider`
function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
