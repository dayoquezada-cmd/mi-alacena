import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mi Alacena",
  description: "Gestión inteligente de stock y gastos",
  manifest: "/manifest.json",
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}