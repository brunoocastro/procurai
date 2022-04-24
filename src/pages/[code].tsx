import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";

interface ITrackingState {
  time: string;
  from: string;
  to: string;
  status: "POSTED" | "ONTHEWAY" | "ARRIVED";
}

const TrackingState = ({state}: {state: ITrackingState}) => {
  return (<div
  className="w-10">
    State
  </div>)
}

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

  return (
    <div className="w-full h-full flex justify-center items-center">
      <p className="text-white">Rastreando o código: {code}</p>

      <div className="w-[60%] w-full">
        {tracking.map((state, index) => <TrackingState  state={state} key={"state-" + index} />)}
      </div>
    </div>
  );
};

export default Code;
