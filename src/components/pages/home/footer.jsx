import {
  EnvelopeClosedIcon,
  LetterCaseCapitalizeIcon,
  PaperPlaneIcon,
} from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <>
      <footer className="h-[80vh] bg-red-600 flex flex-col items-center justify-center">
        <Image
          src={"/logo.jpeg"}
          width={200}
          height={200}
          className="rounded-lg max-sm:w-[150px]"
        />
        <section className="flex items-center max-sm:items-start max-sm:flex-col max-sm:justify-center max-sm:gap-10  justify-between md:space-x-36  lg:space-x-36 mt-20">
          <div className="flex flex-col items-start  ">
            <h1 className="text-2xl font-semibold">Sede</h1>

            <p className="mt-5 text-sm">Endereço Wsl Log aqui</p>
            <p className="mt-1 text-sm">Brasília - DF</p>
          </div>
          <div className="flex flex-col items-start  ">
            <h1 className="text-2xl font-semibold">Contato</h1>

            <Link
              className="mt-5 text-sm"
              href={"mailto:wallace.oliveira@wsllog.com.br"}
            >
              Email -{" "}
              <span className="underline">wallace.oliveira@wsllog.com.br</span>
            </Link>
            <Link
              className="mt-1 text-sm "
              href={
                "https://api.whatsapp.com/send?phone=5577981140394&text=Quero%20fazer%20um%20orçamento%20hoje!"
              }
            >
              Whatsapp - <span className="underline">(77) 98114-0394</span>
            </Link>
          </div>
        </section>
        <div className="mt-20 w-full flex flex-col  items-center justify-center ">
          <p className="text-center text-sm max-sm:text-xs text-gray-200 mt-5">
            Ao navegar em nosso site você concorda com nosso Código de Ética e
            de Conduta.
          </p>
          <p className="text-center text-sm max-sm:text-xs text-gray-200 italic">
            © 2024 • WSL Logística | Site feito com ❤ por{" "}
            <a
              href="https://ruyter.cloud"
              target="_blank"
              className="text-blue-600 font-medium"
            >
              Ruyter
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}
