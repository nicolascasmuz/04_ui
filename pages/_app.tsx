import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

let theme = false;

const darkTheme = {
  red: "#ac1a22",
  dark: "#080808",
};

const lightTheme = {
  red: "#ac1a22",
  dark: "#f0efda",
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme ? lightTheme : darkTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
