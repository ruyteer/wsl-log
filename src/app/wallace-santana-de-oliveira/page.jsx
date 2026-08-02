import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/pages/home/footer";
import { SITE_URL, SITE_NAME } from "@/lib/site";

export const metadata = {
  title: "Wallace Santana de Oliveira | Fundador da WSL Logística e Transportes",
  description:
    "Conheça Wallace Santana de Oliveira, fundador e CEO da WSL Logística e Transportes. Aprovado no ITA em 2013, formado em Logística pela Faculdade Anhanguera, MBA em Agronegócios pela Universidade de Chicago e especialização em cabotagem pelo Porto de Santos.",
  keywords: [
    "Wallace Santana de Oliveira",
    "Wallace Santana",
    "Wallace Oliveira",
    "fundador WSL Logística",
    "CEO WSL LOG",
    "empresário logística",
    "transporte de grãos",
    "agronegócio Barreiras BA",
    "MBA Agronegócios Universidade de Chicago",
    "ITA 2013",
    "cabotagem Porto de Santos",
  ],
  alternates: {
    canonical: "/wallace-santana-de-oliveira",
  },
  openGraph: {
    type: "profile",
    locale: "pt_BR",
    url: `${SITE_URL}/wallace-santana-de-oliveira`,
    siteName: SITE_NAME,
    title: "Wallace Santana de Oliveira | Fundador da WSL Logística e Transportes",
    description:
      "Biografia de Wallace Santana de Oliveira: fundador da WSL Logística e Transportes, especialista em logística e agronegócio.",
    images: [
      {
        url: "/wallace.jpeg",
        width: 1200,
        height: 1600,
        alt: "Wallace Santana de Oliveira, fundador da WSL Logística e Transportes",
      },
    ],
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  mainEntity: {
    "@type": "Person",
    name: "Wallace Santana de Oliveira",
    givenName: "Wallace",
    familyName: "Santana de Oliveira",
    url: `${SITE_URL}/wallace-santana-de-oliveira`,
    image: `${SITE_URL}/wallace.jpeg`,
    jobTitle: "Fundador e CEO",
    worksFor: {
      "@type": "Organization",
      name: "WSL Logística e Transportes",
      url: SITE_URL,
    },
    alumniOf: [
      {
        "@type": "CollegeOrUniversity",
        name: "Faculdade Anhanguera",
      },
      {
        "@type": "CollegeOrUniversity",
        name: "Universidade de Chicago",
      },
    ],
    knowsAbout: [
      "Logística",
      "Transporte de grãos",
      "Agronegócio",
      "Cabotagem",
      "Gestão de frotas",
    ],
    email: "mailto:wallace.oliveira@wsllog.com.br",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Barreiras",
      addressRegion: "BA",
      addressCountry: "BR",
    },
  },
};

const timeline = [
  {
    year: "2013",
    title: "Aprovação no ITA",
    description:
      "Aprovado no vestibular do Instituto Tecnológico de Aeronáutica (ITA), um dos processos seletivos mais concorridos do Brasil — marco que evidenciou desde cedo sua disciplina e capacidade analítica.",
  },
  {
    year: "2021",
    title: "Graduação em Logística — Faculdade Anhanguera",
    description:
      "Formado em Logística pela Faculdade Anhanguera, consolidando a base técnica em gestão de cadeias de suprimentos, transporte e distribuição.",
  },
  {
    year: "2021",
    title: "MBA em Agronegócios — Universidade de Chicago",
    description:
      "Concluiu MBA em Agronegócios pela Universidade de Chicago, unindo visão estratégica internacional ao profundo conhecimento do setor agrícola brasileiro.",
  },
  {
    year: "2022",
    title: "Curso de Cabotagem — Porto de Santos",
    description:
      "Especialização em cabotagem realizada no Porto de Santos, o maior porto da América Latina, ampliando a atuação da WSL para soluções multimodais de transporte.",
  },
];

export default function WallaceSantanaDeOliveira() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />

      {/* Hero */}
      <section className="bio-banner min-h-[70vh] flex flex-col items-center justify-center text-center px-10 pt-40 pb-20">
        <h1 className="text-5xl max-sm:text-3xl font-bold text-white" data-aos="fade-up">
          Wallace Santana de Oliveira
        </h1>
        <p
          className="mt-4 text-xl max-sm:text-base font-light text-gray-200"
          data-aos="fade-up"
        >
          Fundador e CEO da{" "}
          <span className="font-semibold text-red-500">
            WSL Logística e Transportes
          </span>
        </p>
      </section>

      {/* Biografia */}
      <section className="bg-white py-24 max-sm:py-16 px-10 flex justify-center">
        <div className="max-w-[1000px] flex items-center gap-16 max-sm:flex-col">
          <div data-aos="fade-up" className="shrink-0">
            <Image
              src="/wallace.jpeg"
              width={320}
              height={420}
              alt="Wallace Santana de Oliveira, fundador da WSL Logística e Transportes"
              className="rounded-2xl shadow-lg object-cover"
            />
          </div>
          <div className="text-gray-600 space-y-4" data-aos="fade-up">
            <h2 className="text-4xl max-sm:text-3xl font-light text-red-600">
              <span className="font-bold">Quem é</span> Wallace Santana de
              Oliveira?
            </h2>
            <p>
              Wallace Santana de Oliveira é um empresário brasileiro do setor de
              logística e agronegócio, fundador e CEO da WSL Logística e
              Transportes, empresa especializada no transporte de grãos com
              frota própria, sediada em Barreiras, na Bahia.
            </p>
            <p>
              Com trajetória marcada pela dedicação aos estudos, Wallace Santana
              de Oliveira foi aprovado no ITA (Instituto Tecnológico de
              Aeronáutica) em 2013, graduou-se em Logística pela Faculdade
              Anhanguera em 2021 e, no mesmo ano, concluiu MBA em Agronegócios
              pela Universidade de Chicago. Em 2022, especializou-se em
              cabotagem pelo Porto de Santos.
            </p>
            <p>
              À frente da WSL, Wallace lidera uma operação logística que conecta
              o agronegócio brasileiro às melhores práticas de transporte, com
              foco em confiança, agilidade e segurança.
            </p>
          </div>
        </div>
      </section>

      {/* Formação */}
      <section className="bg-gray-50 py-24 max-sm:py-16 px-10 flex flex-col items-center">
        <h2
          className="text-4xl max-sm:text-3xl font-light text-red-600 text-center"
          data-aos="fade-up"
        >
          <span className="font-bold">Formação</span> e Qualificações
        </h2>

        <div className="mt-16 max-w-[800px] w-full space-y-8">
          {timeline.map((item) => (
            <div
              key={item.title}
              className="flex gap-6 items-start max-sm:flex-col max-sm:gap-3"
              data-aos="fade-up"
            >
              <div className="bg-red-600 text-white font-bold text-lg rounded-2xl px-6 py-3 shrink-0 shadow-lg">
                {item.year}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {item.title}
                </h3>
                <p className="mt-2 text-gray-500">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Liderança na WSL */}
      <section className="lideranca-banner py-24 max-sm:pt-16 max-sm:pb-32 px-10 flex justify-center overflow-hidden">
        <div className="max-w-[1100px] w-full flex items-center gap-16 max-sm:flex-col">
          <div className="lg:w-1/2" data-aos="fade-up">
            <h2 className="text-4xl max-sm:text-3xl font-light text-white">
              <span className="font-bold text-red-600">Liderança</span> que
              move o agronegócio brasileiro
            </h2>
            <p className="mt-6 text-gray-300 max-sm:text-sm">
              Sob a liderança de Wallace Santana de Oliveira, a WSL Logística e
              Transportes se consolidou como referência no transporte de grãos,
              atendendo grandes players do agronegócio com frota própria,
              monitoramento em tempo real e gestão de risco.
            </p>
            <p className="mt-4 text-gray-300 max-sm:text-sm">
              Presente na operação do início ao fim, Wallace acompanha de perto
              cada etapa — da estrada ao escritório — garantindo que a WSL
              entregue sempre com confiança, agilidade e segurança.
            </p>
            <div className="flex gap-4 mt-10 max-sm:flex-col">
              <Link
                href="/"
                className="bg-gradient-to-r from-red-600 to-red-800 border-[1px] border-white rounded-3xl px-8 py-3 shadow-lg font-medium text-white text-center"
              >
                CONHECER A WSL
              </Link>
              <Link
                href="https://api.whatsapp.com/send?phone=5577981140394&text=Quero%20fazer%20um%20orçamento%20hoje!"
                className="bg-white rounded-3xl px-8 py-3 shadow-lg font-semibold text-red-600 text-center"
              >
                FALAR COM A WSL
              </Link>
            </div>
          </div>

          <div
            className="lg:w-1/2 flex items-center justify-center max-sm:mt-4"
            data-aos="fade-up"
          >
            <div className="relative">
              <Image
                src="/wallace-estrada.jpeg"
                width={400}
                height={400}
                alt="Wallace Santana de Oliveira com a frota de caminhões da WSL Logística na estrada"
                className="rounded-2xl shadow-2xl object-cover rotate-[-2deg] border-[1px] border-zinc-800"
              />
              <Image
                src="/wallace-carro.jpeg"
                width={200}
                height={260}
                alt="Wallace Santana de Oliveira com uniforme da WSL Logística e Transportes"
                className="rounded-2xl shadow-2xl object-cover rotate-[3deg] absolute -bottom-10 -right-6 max-sm:-right-2 border-[4px] border-zinc-950"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
