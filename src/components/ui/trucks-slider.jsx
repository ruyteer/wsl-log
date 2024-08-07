import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export function TrucksSlider() {
  const items = [
    {
      name: "Graneleiro",
      image: "/graneleiro.jpg",
      description:
        "Caminhões graneleiros são ideais para o transporte de grãos a granel, como soja, sorgo e milho. Eles possuem compartimentos abertos que facilitam o carregamento e descarregamento das mercadorias.",
    },
    {
      name: "Caçamba",
      image: "/caçamba.jpg",
      description:
        "Caminhões com caçamba são versáteis e robustos, usados para transportar materiais diversos, incluindo grãos, fertilizantes e calcário.",
    },
    {
      name: "Sider",
      image: "/sider.jpg",
      description:
        "Caminhões Sider possuem laterais flexíveis, facilitando o carregamento e descarregamento de cargas paletizadas, como farelos e produtos embalados.",
    },
    {
      name: "Baú",
      image: "/bau.webp",
      description:
        "Caminhões com baú são utilizados para proteger mercadorias sensíveis e garantir a integridade do transporte. Ideais para cargas que necessitam de proteção contra chuva e poeira.",
    },
    {
      name: "Grade Baixa",
      image: "/grade-baixa.jpg",
      description:
        "Caminhões com grade baixa são perfeitos para o transporte de cargas volumosas e pesadas que requerem facilidade no carregamento e descarregamento.",
    },
  ];

  return (
    <>
      <Carousel
        className="w-full max-w-xl  max-sm:max-w-[350px]"
        data-aos="fade-up"
      >
        <CarouselContent>
          {items.map((item, index) => (
            <CarouselItem key={index}>
              <div
                className="p-1 flex flex-col items-center mt-20"
                data-aos="fade-up"
              >
                <div
                  className="w-full flex max-sm:justify-between items-start max-sm:items-center"
                  data-aos="fade-up"
                >
                  <h1 className="text-2xl max-sm:text-xl font-semibold">
                    {item.name}
                  </h1>
                  <h1 className="md:hidden lg:hidden max-sm:text-sm text-gray-300 font-normal">
                    Arraste para o lado
                  </h1>
                </div>

                <Image
                  src={item.image}
                  width={600}
                  height={600}
                  className="rounded-lg mt-5 max-sm:w-[350px] "
                  data-aos="fade-up"
                />

                <p
                  className="text-sm max-sm:text-xs mt-4 text-gray-300"
                  data-aos="fade-up"
                >
                  {item.description}
                </p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </>
  );
}
