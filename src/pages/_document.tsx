import Document, { Html, Head, Main, NextScript } from "next/document";
import { Toaster } from "react-hot-toast";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=inter:wght@300;400;700&display=swap"
            rel="stylesheet"
          />

        </Head>

        <body className="bg-ui-black placeholder:text-ui-white text-14 text-ui-white leading-4 relative h-screen w-screen overflow-hidden">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
