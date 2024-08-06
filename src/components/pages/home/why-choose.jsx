export function WhyChoose() {
  return (
    <>
      <section className="h-[110vh] max-sm:h-[100%] max-sm:mb-10 flex flex-col items-center justify-center ">
        <div className="w-[60%] h-[1px] bg-gray-200 mt-[20%] max-sm:mt-[180%] mb-20"></div>

        <h1 className="text-4xl font-light max-w-[300px] text-red-600 text-center">
          <span className="font-bold">Por quê</span> escolher a{" "}
          <span className="font-bold ">WSL?</span>
        </h1>

        <article className="mt-10 max-sm:flex-col flex items-center justify-center max-sm:space-x-0 max-sm:space-y-10 max-sm:mt-20 space-x-20 w-full px-10">
          <div className="flex flex-col items-center max-w-[300px] text-center ">
            <h1 className="text-2xl font-semibold text-red-600">Confiança</h1>
            <p className="mt-4 text-gray-500">
              Uma transportadora confiável também se mantém organizada com
              relação à documentação envolvida no serviço e ao recolhimento dos
              impostos nas suas operações. Esse é um ponto fundamental nos
              negócios.
            </p>
          </div>
          <div className="h-[80%] w-[1px] bg-gray-200  max-sm:hidden "></div>
          <div className="w-[60%] h-[1px] bg-gray-200 mt-[20%] max-sm:mt-[180%] mb-20 lg:hidden md:hidden"></div>
          <div className="flex flex-col items-center max-w-[300px] text-center">
            <h1 className="text-2xl font-semibold text-red-600">Agilidade</h1>
            <p className="mt-4 text-gray-500">
              Essa é, sem dúvida, uma das principais questões que consideramos,
              haja vista que é essa agilidade que garante que os produtos sejam
              entregues dentro do prazo acordado e nas condições adequadas.
            </p>
          </div>
          <div className="h-[80%] w-[1px] bg-gray-200 max-sm:hidden "></div>
          <div className="w-[60%] h-[1px] bg-gray-200 mt-[20%] max-sm:mt-[180%] mb-20 lg:hidden md:hidden"></div>
          <div className="flex flex-col items-center max-w-[300px] text-center">
            <h1 className="text-2xl font-semibold text-red-600">Segurança</h1>
            <p className="mt-4 text-gray-500">
              Ampla ferramentas que nos auxiliam para maior controle e
              segurança: monitoramento da frota em tempo real, rastreamento de
              carga, equipe logística, gerenciamento de risco, telemetria, entre
              outros.
            </p>
          </div>
        </article>

        <button className="bg-red-600 text-white font-semibold py-4  px-10 rounded-full max-sm:mt-20 mt-10">
          CONTRATAR SERVIÇOS
        </button>
      </section>
    </>
  );
}
