import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, Syne } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const syne = Syne({ subsets: ["latin"], variable: "--font-syne" });
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
});

export const metadata: Metadata = {
  title: "Lucie Amanahita Soete | Massages Bien-Etre",
  description:
    "Site vitrine one-page avec CMS admin et contenu gere via MongoDB.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="h-full antialiased">
      <body
        className={`min-h-full ${inter.variable} ${syne.variable} ${cormorant.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
