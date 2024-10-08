import Link from "next/link";

export function WhyChoose() {
  return (
    <>
      <section
        className="h-[110vh] max-sm:h-[100%] max-sm:mb-10 flex flex-col items-center justify-center"
        data-aos="fade-up"
      >
        <div className="w-[60%] h-[1px] bg-gray-200 mt-[20%] max-sm:mt-[160%] mb-20"></div>

        <h1 className="text-4xl font-light max-w-[300px] text-red-600 text-center">
          <span className="font-bold">Por quê</span> escolher a{" "}
          <span className="font-bold ">WSL?</span>
        </h1>

        <article className="mt-10 max-sm:flex-col flex items-center justify-center max-sm:space-x-0 max-sm:space-y-10 max-sm:mt-20 space-x-20 w-full px-10">
          <div
            className="flex flex-col items-center max-w-[300px] text-center"
            data-aos="fade-up"
          >
            <h1 className="text-2xl font-semibold text-red-600">Confiança</h1>
            <p className="mt-4 text-gray-500">
              Nossa empresa é conhecida por sua confiabilidade, mantendo a
              documentação organizada e cumprindo todas as obrigações fiscais.
              Esse compromisso é fundamental para garantir a confiança em nossos
              serviços.
            </p>
          </div>
          <div className="h-[80%] w-[1px] bg-gray-200 max-sm:hidden"></div>
          <div className="w-[60%] h-[1px] bg-gray-200 mt-[20%] max-sm:mt-[180%] mb-20 lg:hidden md:hidden"></div>
          <div
            className="flex flex-col items-center max-w-[300px] text-center"
            data-aos="fade-up"
          >
            <h1 className="text-2xl font-semibold text-red-600">Agilidade</h1>
            <p className="mt-4 text-gray-500">
              Entendemos a importância da rapidez no transporte. Nossa agilidade
              assegura que seus produtos sejam entregues no prazo acordado e em
              condições ideais, garantindo eficiência em todas as operações.
            </p>
          </div>
          <div className="h-[80%] w-[1px] bg-gray-200 max-sm:hidden"></div>
          <div className="w-[60%] h-[1px] bg-gray-200 mt-[20%] max-sm:mt-[180%] mb-20 lg:hidden md:hidden"></div>
          <div
            className="flex flex-col items-center max-w-[300px] text-center"
            data-aos="fade-up"
          >
            <h1 className="text-2xl font-semibold text-red-600">Segurança</h1>
            <p className="mt-4 text-gray-500">
              Utilizamos ferramentas avançadas para maior controle e segurança:
              monitoramento da frota em tempo real, rastreamento de carga,
              gerenciamento de risco e telemetria.
            </p>
          </div>
        </article>

        <Link
          href={
            "https://api.whatsapp.com/send?phone=5577981140394&text=Quero%20fazer%20um%20orçamento%20hoje!"
          }
        >
          <button
            className="bg-red-600 text-white font-semibold py-4 px-10 rounded-full max-sm:mt-20 mt-10"
            data-aos="fade-up"
          >
            CONTRATAR SERVIÇOS
          </button>
        </Link>
      </section>
    </>
  );
}
