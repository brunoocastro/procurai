import { useRouter } from "next/router";
import { useCallback, useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchAndSee = ({ code }: { code: string }) => {
  const router = useRouter();

  const [localCode, setLocalCode] = useState(code ?? "");

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
    <div>
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
          <FaSearch
            className="mx-2 cursor-pointer"
            onClick={() => handleSubmit(localCode)}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchAndSee;
