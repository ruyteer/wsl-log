"use client";

import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <>
      <section className="parallax max-sm:mobile   min-h-[100vh] lg:bg-fixed max-sm:bg-bottom  lg:bg-center bg-cover   text-start h-screen  flex items-center justify-center relative">
        {/* <div className="w-full text-start max-sm:p-10 lg:w-[50%] -mt-10">
          <h1 className="text-start text-xl  lg:text-3xl font-light">
            Bem vindo. <br />{" "}
            <span className="font-semibold">Supreenda-se!</span>
          </h1>
        </div> */}
        <div
          id="sobre"
          className="absolute bottom-[-350px] max-sm:bottom-[-500px] left-1/2 transform -translate-x-1/2 w-full max-w-[1000px]  "
        >
          <div className="bg-red-600 p-10 rounded-2xl text-white flex flex-col items-center  ">
            <Image
              src={"/logo.jpeg"}
              width={150}
              height={150}
              alt="Logo WSL LOG"
              className="rounded-md"
            />
            <h1 className="text-3xl font-light  mt-8 text-center max-sm:mt-3">
              <span className="font-bold">Logística</span> que <br /> nos{" "}
              <span className="font-bold">move!</span>
            </h1>

            <section className="flex items-center justify-between max-sm:justify-center max-sm:flex-col">
              <div
                className="flex flex-col mt-20 lg:max-w-[65%] space-y-4 max-sm:mt-10 max-sm:text-sm max-sm:space-y-2 "
                data-aos="fade-up"
              >
                <p>A WSL é uma empresa especializada no transporte de grãos.</p>
                <p>
                  A WSL é uma empresa líder no transporte de grãos. Com nossa
                  frota própria de caminhões, atendemos às demandas do setor
                  agrícola com eficiência e segurança. Nossa missão é oferecer
                  soluções logísticas que otimizam o transporte agrícola,
                  conectando nossos clientes às melhores práticas de logística.
                </p>
              </div>
              <div
                className="max-sm:mt-10 max-sm:items-center max-sm:flex max-sm:flex-col max-sm:justify-center"
                data-aos="fade-up"
              >
                <Image
                  src={"/truck.png"}
                  width={250}
                  height={250}
                  className="-ml-10 rounded-md"
                />
                <Image
                  src={"/truck2.jpg"}
                  width={250}
                  height={250}
                  className="-mt-8 rounded-md"
                  data-aos="fade-up"
                />
              </div>
            </section>
            <div className="flex flex-col mt-10 text-start">
              <Link href={"#parceiros"}>
                <button
                  className="bg-gradient-to-r   from-red-600 to-red-800 border-[1px] border-white w-80 rounded-3xl px-4 py-2 shadow-lg font-medium"
                  data-aos="fade-up"
                >
                  CONHECER PARCEIROS
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
