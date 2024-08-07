import { TrucksSlider } from "@/components/ui/trucks-slider";

export function Trucks() {
  return (
    <>
      <section className="trucks-banner bg-cover bg-no-repeat bg-center h-screen w-full max-sm:flex-col max-sm:justify-center flex items-center justify-around">
        <div className="flex flex-col text-start max-sm:p-5" data-aos="fade-up">
          <h1 className="text-4xl max-sm:text-xl font-light" data-aos="fade-up">
            Conheça nossa <span className="font-bold">frota!</span>
          </h1>

          <p
            className="text-xl max-sm:text-sm max-w-[600px] mt-10 text-gray-200"
            data-aos="fade-up"
          >
            Na WSL, estamos comprometidos em oferecer a melhor solução de
            transporte para atender às necessidades do setor agrícola. Nossa
            frota diversificada e moderna garante que possamos transportar
            diferentes tipos de cargas com segurança e eficiência. Abaixo,
            detalhamos os tipos de caminhões disponíveis em nossa frota e suas
            especificações técnicas.
          </p>
        </div>

        <div>
          <TrucksSlider />
        </div>
      </section>
    </>
  );
}
