import type { Metadata } from "next";
import { Geist, Instrument_Serif } from "next/font/google";
import "./globals.css";

const geist = Geist({ variable: "--font-sans", subsets: ["latin"] });
const serif = Instrument_Serif({ variable: "--font-serif", subsets: ["latin"], weight: "400" });

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "samuel.dev — Sites únicos para empresas",
    description: "Design e desenvolvimento de sites personalizados para empresas que querem ser vistas e lembradas.",
    icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
    openGraph: {
      title: "samuel.dev — Sites únicos para empresas",
      description: "Você merece um site próprio e único!",
      type: "website",
      locale: "pt_BR",
    },
    twitter: { card: "summary" },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body className={`${geist.variable} ${serif.variable}`}>{children}</body></html>;
}
