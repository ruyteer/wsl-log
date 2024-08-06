import { Poppins } from "next/font/google";
import "./globals.css";
import "aos/dist/aos.css";
import { Navbar } from "@/components/ui/navbar";
import { AOSProvider } from "@/providers/aos";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "WSL DEV",
  description: "WSL Logística",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={poppins.className}>
        <Navbar />
        {children}
        <AOSProvider />
      </body>
    </html>
  );
}
