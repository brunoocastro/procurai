import toast from "react-hot-toast";
import { pix, projectName } from "../constants/basics";
import { copyToClipboard } from "../utils/copyToClipboard";
import { sleep } from "../utils/sleep";

const onSeeDonate = async () => {
  toast.success(
    `Transferência de R$47,99 para ${projectName} realizada com sucesso.`
  );
  copyToClipboard(pix);

  await sleep(3);

  toast("Brincadeira kkkk - Muito obrigado por querer contribuir (:");
  toast.success(
    "O PIX para fazer a doação foi copiado para sua área de transferência!"
  );
  toast(`PIX: ${pix}`);
};

const Footer = () => (
  <div className="absolute bottom-14 text-12 text-center text-white font-light underline flex gap-6">
    <a
      href="https://github.com/brunoocastro/procurai"
      target={"_blank"}
      rel="noreferrer"
    >
      Github @procurai
    </a>
    <a href="https://www.twitch.tv/tonelive" target={"_blank"} rel="noreferrer">
      Twitch @tonelive
    </a>
    <button type="button" onClick={onSeeDonate}>
      Apoie o projeto
    </button>
  </div>
);

export default Footer;
