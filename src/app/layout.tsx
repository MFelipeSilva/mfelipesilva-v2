import type { Metadata } from "next";
import { Lexend } from "next/font/google";

import "../styles/global.css";

const inter = Lexend({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Felipe Da Silva | Developer Web Full-stack",
  description: "Portfolio of a full-stack developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
