import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MariaSaaS — L'ERP pensé pour les pharmacies en RDC",
  description:
    "Gérez vos stocks, ventes et ordonnances sans connexion internet. SQLite local, multi-devise USD/CDF, traçabilité GxP (FEFO) et intelligence artificielle.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-950`}>
        {children}
      </body>
    </html>
  );
}
