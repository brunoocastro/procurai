import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useMemo, useState } from "react";
import {
  FaCubes,
  FaSearch,
  FaTruck,
  FaCheck,
  FaTimes,
  FaArrowRight,
} from "react-icons/fa";
import { AiOutlineReload } from "react-icons/ai";
import useDebounce from "../utils/useDebounce";
import { PossibleStatus } from "./codeHistory";
import { DateTime } from "luxon";
import { IconType } from "react-icons";
import UIColors from "../constants/UIColors";
import toast from "react-hot-toast";
import { searchCodeUrl } from "../constants/functionsLinks";

interface ITrackingState {
  time: string;
  from: string;
  to: string;
  status: PossibleStatus;
}

const possibleStatusProps: {
  [key: string]: { color: string; text: string; label: string; Icon: IconType };
} = {
  POSTED: {
    color: UIColors.grayLight,
    text: "Objeto postado",
    label: "Postado",
    Icon: () => <FaCubes size={16} />,
  },
  ONTHEWAY: {
    color: UIColors.yellow,
    text: "Objeto em trânsito",
    label: "Em trânsito",
    Icon: FaTruck,
  },
  ARRIVED: {
    color: UIColors.green,
    text: "Entregue no endereço",
    label: "Entregue",
    Icon: FaCheck,
  },
  CANCELLED: {
    color: UIColors.red,
    text: "Entrega Cancelada",
    label: "Cancelado",
    Icon: () => <FaTimes size={24} />,
  },
};

const StatusLabel = ({ status }: { status: PossibleStatus }) => {
  const { color, label } = useMemo(() => possibleStatusProps[status], [status]);

  return status ? (
    <div
      className={`h-6 w-auto border rounded  px-2 py-1 flex justify-center items-center ${
        "border-" + color
      } ${"text-" + color}`}
      style={{ borderColor: color, color: color }}
    >
      <p>{label}</p>
    </div>
  ) : null;
};

const HistoryComponent = ({ code, open }: { code: string; open: boolean }) => {
  const [trackingList, setTrackingList] = useState<ITrackingState[]>([
    {
      from: "",
      to: "Rosário do Sul, RS",
      status: "ARRIVED",
      time: "2022-04-25T01:02:41.932Z",
    },
    {
      from: "",
      to: "",
      status: "CANCELLED",
      time: "2022-04-25T01:02:41.932Z",
    },
    {
      from: "Santa Maria, RS",
      to: "Rosário do Sul, RS",
      status: "ONTHEWAY",
      time: "2022-04-25T01:02:41.932Z",
    },
    {
      from: "São José do Vale do Rio Preto, RS",
      to: "Rosário do Sul, RS",
      status: "POSTED",
      time: "2022-04-25T01:02:41.932Z",
    },
  ]);

  const actualState = useMemo(() => trackingList[0].status, [trackingList]);

  return (
    <div
      className={`${
        open ? "flex flex-col h-0 opacity-100" : "hidden h-auto opacity-0"
      } mt-20 transition-all ease-in-out w-auto`}
    >
      <header className="flex gap-32 text-14 w-auto mb-6 items-center text-ui-blue border-b border-ui-gray pb-3">
        <p>Data / Hora</p>
        <div className="flex pl-1 items-center justify-center gap-2">
          <p>Status:</p>
          <StatusLabel status={actualState} />
        </div>
      </header>
      <div className="flex flex-col gap-2 text-12">
        {trackingList.map(({ from, status, time, to }, index) => {
          const { Icon, text } = possibleStatusProps[status];
          return (
            <div key={"track-" + index} className="flex">
              <div className="w-52 h-14">
                {DateTime.fromISO(time).toFormat("dd/mm/2021, HH:MM")}
              </div>
              <div className="flex flex-col items-center gap-2 w-5">
                <Icon size={20} />
                {index !== trackingList.length - 1 && (
                  <div className="h-full w-[2px] bg-ui-white" />
                )}
              </div>
              <div className="flex flex-row gap-2 pl-2 overflow-auto relative">
                {text} {(from || to) && "("}
                {from && from}
                {from && to && <FaArrowRight />}
                {to && to}
                {(from || to) && ")"}
                {index === 0 && <p className="text-10 absolute top-6 left-2">Última atualização</p>}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const SearchAndSee = ({ code }: { code: string }) => {
  const router = useRouter();

  const [localCode, setLocalCode] = useState(code ?? "");
  const [loading, setLoading] = useState(false);

  const debouncedCode = useDebounce(localCode, 1300);
  const historyOpen = useMemo(() => debouncedCode !== "", [debouncedCode]);

  const handleSearchCode = async (searchCode: string) => {
    const code = searchCode.replaceAll(' ', '')
    console.log("debouncedCode", code);
    if (!code) return;
    if (!(/^[A-Z]{2}[0-9]{9}[A-Z]{2}$/.test(code))) {
      toast.error("Formato de código inválido!",{icon: <FaTimes/>, className: 'bg-ui-red'})
      return
    }
    setLoading(true);
    try {
      const request = await axios.post(
        `${searchCodeUrl}/searchCode`, {code}
      );
      console.log("Request Success", request.data);
    } catch (error: any) {
      console.error("Request Error", error?.response?.data);
    }
    setLoading(false);
  };

  useEffect(() => {
    handleSearchCode(debouncedCode);
  }, [debouncedCode]);

  useEffect(() => {
    code !== localCode && setLocalCode(code);
  }, [code, localCode]);

  return (
    <div className={`transition-all ease-in duration-300 w-[50%]`}>
      <div
        className={`${
          historyOpen ? "-translate-y-44" : "translate-0"
        } pt-64 transition-all ease-linear `}
      >
        <h1 className="text-32 font-bold mb-[10px]">- Procuraí</h1>
        <h2 className="text-20 text-ui-blue">Rastreador de encomendas</h2>
        <div className="relative flex items-center justify-center mt-16 w-[24.188rem] pb-[10px] border-b-2 border-ui-primary">
          <input
            className="outline-none w-full text-left bg-transparent placeholder:text-ui-grayLight "
            placeholder="Digite um código de rastreio"
            value={localCode}
            onChange={(e) => {
              router.push(`/${e.target.value.toUpperCase()}`, undefined, {
                shallow: true,
              });
              setLocalCode(e.target.value.toUpperCase());
            }}
          />
          {loading ? (
            <AiOutlineReload className="mx-2 cursor-pointer animate-spin" />
          ) : (
            <FaSearch
              onClick={() => handleSearchCode(debouncedCode)}
              className="mx-2 cursor-pointer"
            />
          )}
        </div>
      </div>
      <HistoryComponent code={debouncedCode} open={historyOpen} />
    </div>
  );
};

export default SearchAndSee;
