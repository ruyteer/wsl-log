"use client";

import Image from "next/image";

export function Hero() {
  return (
    <>
      <section className="parallax h-screen flex items-center justify-center relative">
        <h1>Seja bem vindo!</h1>
        <div className="absolute bottom-[-350px] max-sm:bottom-[-600px] left-1/2 transform -translate-x-1/2 w-full max-w-[1000px]">
          <div className="bg-red-600 p-10 rounded-2xl text-white flex flex-col items-center  ">
            <Image
              src={"/logo.jpeg"}
              width={150}
              height={150}
              alt="Logo WSL LOG"
              className="rounded-md"
            />
            <h1 className="text-3xl font-light  mt-8">
              <span className="font-bold">Sonhos</span> transportados e <br />{" "}
              entregues <span className="font-bold">de norte a sul</span>
            </h1>

            <div className="flex flex-col mt-20 space-y-4">
              <p>A WSL é uma empresa especializada no transporte de grãos.</p>
              <p>
                Com uma frota própria de caminhões, estamos preparados para
                atender às demandas do setor agrícola, garantindo eficiência e
                segurança em cada entrega. Nossa missão é oferecer soluções
                logísticas que facilitem o transporte agrícola, conectando
                nossos clientes às melhores práticas de logística.
              </p>
            </div>
            <div className="flex flex-col mt-10 text-start">
              <button className="bg-gradient-to-r   from-red-600 to-red-800 border-[1px] border-white w-80 rounded-3xl px-4 py-2 shadow-lg font-medium">
                CONHECER AS FILIAIS
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="h-screen flex items-center justify-center">
        {/* Conteúdo da segunda seção */}
      </section>
    </>
  );
}
