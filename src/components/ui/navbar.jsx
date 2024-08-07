import Image from "next/image";
import Link from "next/link";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetPortal,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

export function Navbar() {
  return (
    <>
      <nav className="bg-transparent flex items-center max-sm:p-10 justify-around  max-sm:justify-between w-full p-20 text-lg z-10 absolute ">
        <Image
          src={"/logo.jpeg"}
          width={150}
          height={150}
          alt="Logo WSL LOG"
          className="rounded-md max-sm:w-[80px] max-sm:h-[80px]"
        />

        <ul className="flex items-center gap-10  max-sm:hidden">
          <li>
            <Link
              href={"/"}
              className="hover:text-red-600 transition duration-300 uppercase font-medium"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href={"#sobre"}
              className="hover:text-red-600 transition duration-300 uppercase font-medium"
            >
              Sobre
            </Link>
          </li>
          <li>
            <Link
              href={"#parceiros"}
              className="hover:text-red-600 transition duration-300 uppercase font-medium"
            >
              Parceiros
            </Link>
          </li>
          <li>
            <Link
              href={"#contato"}
              className="hover:text-red-600 transition duration-300 uppercase font-medium"
            >
              Contato
            </Link>
          </li>
        </ul>

        <div className="flex items-center gap-3 lg:hidden">
          <p className="text-sm font-medium">Menu</p>
          <Sheet className="text-black">
            <SheetTrigger className="lg:hidden  text-3xl border-[1px] rounded-md p-2">
              <HamburgerMenuIcon
                width={30}
                height={30}
                fontWeight={100}
                className="hover:text-red-600 transition duration-300 uppercase font-medium"
              />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader className={"mb-10"}>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <SheetDescription className="flex items-center gap-10  flex-col">
                <Link
                  href={"/"}
                  className="hover:text-red-600 transition duration-300 uppercase font-medium"
                >
                  Home
                </Link>

                <Link
                  href={"#sobre"}
                  className="hover:text-red-600 transition duration-300 uppercase font-medium"
                >
                  Sobre
                </Link>

                <Link
                  href={"#parceiros"}
                  className="hover:text-red-600 transition duration-300 uppercase font-medium"
                >
                  Parceiros
                </Link>

                <Link
                  href={"#contato"}
                  className="hover:text-red-600 transition duration-300 uppercase font-medium"
                >
                  Contato
                </Link>
              </SheetDescription>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </>
  );
}
