import type { NextPage } from "next";
import { raw } from "next/dist/build/webpack/loaders/next-middleware-wasm-loader";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useCallback, useRef, useState } from "react";

const Home: NextPage = () => {
  const [code, setCode] = useState("");

  const router = useRouter();

  const handleSubmit = useCallback((rawCode: string) => {
    const cleanedCode = rawCode.trim()
    const encodedCode = encodeURIComponent(cleanedCode);
    console.log(rawCode, encodedCode)
    router.push(`/${encodedCode}`);
  }, [router]);

  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <Head>
        <title>Procurai</title>
        <meta name="description" content="Rastreie sua encomenda da forma mais fácil possível!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="absolute top-1/3 text-6xl font-extrabold mb-2">
        Procurai
      </h1>
      <form onSubmit={() => handleSubmit(code)}>
        <div className="flex flex-col gap-5 w-[28rem] justify-center items-center ">
            <div className="relative flex items-center justify-center w-[20rem] border-b-2 border-ui-primary">
              <input
                className="outline-none w-full text-center py-1 px-2 bg-transparent placeholder:text-white "
                placeholder="Digite um código de rastreio"
                value={code}
                onChange={(e) => setCode(e.target.value.toUpperCase())}
              />
            </div>
            <button type="submit" className="" onClick={() => handleSubmit(code)}>
              Procurar
            </button>
        </div>
      </form>
    </div>
  );
};

export default Home;
