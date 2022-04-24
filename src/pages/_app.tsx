import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";
import { FaCheck, FaCross } from "react-icons/fa";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
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
