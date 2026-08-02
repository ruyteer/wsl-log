import { Poppins } from "next/font/google";
import "./globals.css";
import "aos/dist/aos.css";
import { Navbar } from "@/components/ui/navbar";
import { AOSProvider } from "@/providers/aos";
import Link from "next/link";
import Image from "next/image";
import { SITE_URL, SITE_NAME } from "@/lib/site";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "WSL LOG | Logística e Transporte de Grãos",
    template: "%s | WSL LOG",
  },
  description:
    "WSL Logística e Transportes: empresa de Wallace Santana de Oliveira especializada no transporte de grãos com frota própria. Soluções logísticas para o agronegócio em Barreiras - BA e todo o Brasil.",
  keywords: [
    "WSL Logística",
    "WSL LOG",
    "transporte de grãos",
    "logística agrícola",
    "agronegócio",
    "Wallace Santana de Oliveira",
    "transportadora Barreiras BA",
    "frota própria",
    "cabotagem",
  ],
  authors: [
    { name: "Wallace Santana de Oliveira", url: `${SITE_URL}/wallace-santana-de-oliveira` },
  ],
  creator: "Wallace Santana de Oliveira",
  publisher: SITE_NAME,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "WSL LOG | Logística e Transporte de Grãos",
    description:
      "Empresa especializada no transporte de grãos com frota própria, fundada por Wallace Santana de Oliveira. Logística que nos move!",
    images: [
      {
        url: "/logo.jpeg",
        width: 400,
        height: 400,
        alt: "Logo WSL Logística e Transportes",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "WSL LOG | Logística e Transporte de Grãos",
    description:
      "Empresa especializada no transporte de grãos com frota própria, fundada por Wallace Santana de Oliveira.",
    images: ["/logo.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // Cole aqui o código de verificação do Google Search Console (método "Tag HTML"):
  // verification: { google: "SEU_CODIGO_AQUI" },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  alternateName: "WSL LOG",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.jpeg`,
  description:
    "Empresa especializada no transporte de grãos com frota própria, oferecendo soluções logísticas para o agronegócio.",
  email: "wallace.oliveira@wsllog.com.br",
  telephone: "+55 77 98114-0394",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Barreiras",
    addressRegion: "BA",
    addressCountry: "BR",
  },
  founder: {
    "@type": "Person",
    name: "Wallace Santana de Oliveira",
    url: `${SITE_URL}/wallace-santana-de-oliveira`,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <link rel="shortcut icon" href="/logo.jpeg" />
      <body className={poppins.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Navbar />
        {children}
        <AOSProvider />
        <Link
          href={
            "https://api.whatsapp.com/send?phone=5577981140394&text=Quero%20fazer%20um%20orçamento%20hoje!"
          }
          className="fixed bottom-10 right-10 flex flex-col items-center"
        >
          <p className=" max-sm:hidden text-xs bg-white text-black p-1 rounded-md absolute right-20 w-[100px] text-center">
            Contate no Whatsapp!
          </p>
          <Image src={"/zap.webp"} width={70} height={70} alt="WhatsApp" />
        </Link>
      </body>
    </html>
  );
}
