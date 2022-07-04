import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useCallback, useEffect, useMemo, useState } from "react";
import { FaSearch } from "react-icons/fa";
import CodeHistory from "../components/codeHistory";
import Footer from "../components/footer";
import SearchAndSee from "../components/searchAndSee";

const Code: NextPage = () => {
  const router = useRouter();
  const code = useMemo(
    () => (router?.query?.slug && router?.query?.slug[0]) ?? "",
    [router.query]
  );

  return (
    <div className="flex relative items-start justify-center h-screen w-screen">
      <Head>
        <title>Procuraí</title>
        <meta
          name="description"
          content="Rastreie sua encomenda da forma mais fácil possível!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex justify-evenly w-full h-full">
        <SearchAndSee code={code?.toString() ?? ""} />
        <CodeHistory />
      </div>
      <Footer />
    </div>
  );
};

export default Code;
