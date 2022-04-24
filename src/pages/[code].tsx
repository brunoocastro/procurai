import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useCallback, useState } from "react";
import { FaSearch } from "react-icons/fa";

interface ITrackingState {
  time: string;
  from: string;
  to: string;
  status: "POSTED" | "ONTHEWAY" | "ARRIVED";
}

const TrackingState = ({ state }: { state: ITrackingState }) => {
  return <div className="w-10">State</div>;
};

const Code: NextPage = () => {
  const router = useRouter();
  const { code } = router.query;

  const [tracking, setTracking] = useState<ITrackingState[]>([
    {
      from: "Santa Maria",
      to: "Rosário do Sul",
      status: "ONTHEWAY",
      time: new Date().toISOString(),
    },
    {
      from: "Porto Alegre",
      to: "Santa Maria",
      status: "ONTHEWAY",
      time: new Date().toISOString(),
    },
  ]);

  const [localCode, setLocalCode] = useState("");

  const handleSubmit = useCallback(
    (rawCode: string) => {
      const cleanedCode = rawCode.trim();
      const encodedCode = encodeURIComponent(cleanedCode);
      console.log(rawCode, encodedCode);
      router.push(`/${encodedCode}`);
    },
    [router]
  );

  return (
    <div className="flex relative flex-col items-center justify-center h-screen w-screen">
      <Head>
        <title>Procuraí</title>
        <meta
          name="description"
          content="Rastreie sua encomenda da forma mais fácil possível!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="text-32 font-bold mb-[10px]">- Procuraí</h1>
      <h2 className="text-20 text-ui-blue">Rastreador de encomendas</h2>
      <form onSubmit={() => handleSubmit(localCode)}>
        <div className="relative flex items-center justify-center mt-16 w-[24.188rem] pb-[10px] border-b-2 border-ui-primary">
          <input
            className="outline-none w-full text-left bg-transparent placeholder:text-ui-grayLight "
            placeholder="Digite um código de rastreio"
            value={localCode}
            onChange={(e) => setLocalCode(e.target.value.toUpperCase())}
          />
          <FaSearch className="mx-2" onClick={() => handleSubmit(localCode)} />
        </div>
      </form>
      <p className="text-white">Rastreando o código: {code}</p>

      <div className="w-[60%]">
        {tracking.map((state, index) => (
          <TrackingState state={state} key={"state-" + index} />
        ))}
      </div>

      <div className="absolute bottom-14 text-12 text-center text-white font-light underline flex gap-6">
        <a href="https://github.com/brunoocastro/procurai" target={"_blank"} rel="noreferrer">Github @procurai</a>
        <a href="https://www.twitch.tv/tonelive" target={"_blank"} rel="noreferrer">Twitch @tonelive</a>
        <a href="" target={"_blank"}>Apoie o projeto</a>
      </div>
    </div>
  );
};

export default Code;
