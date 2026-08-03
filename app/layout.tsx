import type { Metadata } from "next";
import { headers } from "next/headers";
import { Geist, Instrument_Serif } from "next/font/google";
import "./globals.css";

const geist = Geist({ variable: "--font-sans", subsets: ["latin"] });
const serif = Instrument_Serif({ variable: "--font-serif", subsets: ["latin"], weight: "400" });

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.includes("localhost") ? "http" : "https");
  const image = new URL("/og.png", `${protocol}://${host}`).toString();

  return {
    title: "samuel.dev — Sites únicos para empresas",
    description: "Design e desenvolvimento de sites personalizados para empresas que querem ser vistas e lembradas.",
    icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
    openGraph: {
      title: "samuel.dev — Sites únicos para empresas",
      description: "Você merece um site próprio e único!",
      type: "website",
      locale: "pt_BR",
      images: [{ url: image, width: 1200, height: 630, alt: "samuel.dev — Você merece um site próprio e único!" }],
    },
    twitter: { card: "summary_large_image", images: [image] },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body className={`${geist.variable} ${serif.variable}`}>{children}</body></html>;
}
