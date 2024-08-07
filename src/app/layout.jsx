import { Poppins } from "next/font/google";
import "./globals.css";
import "aos/dist/aos.css";
import { Navbar } from "@/components/ui/navbar";
import { AOSProvider } from "@/providers/aos";
import Link from "next/link";
import Image from "next/image";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "WSL LOG",
  description: "WSL Logística e Transportes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <link rel="shortcut icon" href="/logo.jpeg" />
      <body className={poppins.className}>
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
          <Image src={"/zap.webp"} width={70} height={70} />
        </Link>
      </body>
    </html>
  );
}
