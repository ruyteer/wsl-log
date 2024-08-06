import { MovingClients } from "@/components/ui/moving-clients";
import Image from "next/image";

export function Clients() {
  return (
    <>
      <section className="flex flex-col items-center w-full h-[80vh] text-center">
        <h1 className="text-red-600 mt-40 text-3xl max-w-[300px] font-light">
          {" "}
          Mais do que <span className="font-bold">clientes</span>,{" "}
          <span className="font-bold">parceiros</span> de crescimento
        </h1>
        <MovingClients />
      </section>
    </>
  );
}
