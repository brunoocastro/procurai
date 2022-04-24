import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";
import { FaCheck, FaCross } from "react-icons/fa";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Procurai</title>
        <meta
          name="description"
          content="Aquele rastreio muito fácil!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
      <Toaster
        position="bottom-right"
        reverseOrder={false}
        toastOptions={{
          className: "",
          duration: 7000,
          style: {
            background: "#FFFFFF",
            color: "#131313",
          },
          success: {
            icon: <FaCheck />,
          },
          error: {
            icon: <FaCross />,
          },
        }}
      />
    </>
  );
}

export default MyApp;
