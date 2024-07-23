import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "./components/header";
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Movie Database",
  description: "Movie is a Movie Database powered by TMDB Api",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        <main className="bg-[#111]">{children}</main>
        </body>
    </html>
  );
}
