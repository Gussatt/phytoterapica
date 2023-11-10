import Image from "next/image";
import Caminhao from "@/public/assets/img/icon-caminhao.png";

export default function Faixa() {
  return (
    <section className="flex justify-center items-center bg-slate-300 h-10 w-full">
      <div className="flex">
        <Image
          src={Caminhao}
          width={40}
          height={40}
          alt={"Ícone em cinza de um caminhão"}
        />

        <p className="text-lg text-">Com mais R$ 200,00 o frete é por nossa conta!</p>
      </div>
    </section>
  );
}
