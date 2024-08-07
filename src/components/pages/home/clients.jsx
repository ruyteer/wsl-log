import { MovingClients } from "@/components/ui/moving-clients";
import Image from "next/image";

export function Clients() {
  return (
    <>
      <section
        id="parceiros"
        className="flex flex-col items-center w-full h-[80vh] text-center"
      >
        <h1 className="text-red-600 mt-40 text-3xl max-w-[300px] font-light">
          {" "}
          Conheça os nossos <span className="font-bold">parceiros</span> de
          <span className="font-bold"> crescimento!</span>
        </h1>
        <MovingClients />
      </section>
    </>
  );
}
