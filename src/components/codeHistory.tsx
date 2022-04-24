import { useState } from "react";

import { DateTime } from "luxon";

export type PossibleStatus = "POSTED" | "ONTHEWAY" | "ARRIVED";

interface ITrackingState {
  time: string;
  from: string;
  to: string;
  status: PossibleStatus;
}
interface IHistoryState {
  code: string;
  time: string;
  from: string;
  to: string;
  status: PossibleStatus;
}

export const getStatusText: { [key: string]: string } = {
  POSTED: "Postado",
  ONTHEWAY: "Em trânsito",
  ARRIVED: "Entregue",
};

const HistoryState = ({ state }: { state: IHistoryState }) => {
  return (
    <a href={`/${state.code}`}>
      - {state.code.toLocaleUpperCase()} -{" "}
      {DateTime.fromISO(state.time).toFormat("dd/MM/yyyy")} -{" "}
      {getStatusText[state.status]}
    </a>
  );
};

const CodeHistory = () => {
  const [tracking, setTracking] = useState<IHistoryState[]>([
    {
      from: "Santa Maria",
      to: "Rosário do Sul",
      status: "ONTHEWAY",
      time: new Date().toISOString(),
      code: "QK 833 733 439 BR",
    },
    {
      from: "Porto Alegre",
      to: "Santa Maria",
      status: "ONTHEWAY",
      code: "QK 833 733 439 BR",
      time: new Date().toISOString(),
    },
    {
      from: "Porto Alegre",
      to: "Santa Maria",
      status: "ARRIVED",
      code: "QK 833 733 439 BR",
      time: new Date().toISOString(),
    },
    {
      from: "Porto Alegre",
      to: "Santa Maria",
      status: "POSTED",
      code: "QK 833 733 439 BR",
      time: new Date().toISOString(),
    },
  ]);
  return (
    <div className="w-auto">
      <div className="text-16 font-bold pb-2 border-b border-ui-blue mb-9">
        <p>Suas últimas encomendas:</p>
      </div>
      <div className="flex flex-col gap-5">
        {tracking.map((state, index) => (
          <HistoryState state={state} key={"state-" + index} />
        ))}
      </div>
    </div>
  );
};

export default CodeHistory;
