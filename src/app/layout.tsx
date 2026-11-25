import type { Metadata, Viewport } from "next";
import { SmoothScroll } from "@/components/SmoothScroll";
import "./globals.css";

export const metadata: Metadata = {
  title: "Luciano Locações | Frota corporativa para grandes operações",
  description: "Locação por contrato de caminhões Volkswagen 6.170 para indústrias e empresas de construção em todo o Brasil.",
};

export const viewport: Viewport = { themeColor: "#060B14", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body><SmoothScroll>{children}</SmoothScroll></body></html>;
}
