import type { Metadata } from "next";
import { Lexend } from "next/font/google";

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
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Lexend:wght@100..900&display=swap"
          rel="stylesheet"
        ></link>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
