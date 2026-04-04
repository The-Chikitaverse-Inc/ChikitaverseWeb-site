import { Geist_Mono, Geist, Inter} from "next/font/google";
import "./globals.css";

import Header from "@/components/layout/Header/Header";

const getInter = Inter({
  variable: '--inter',
  subsets: ["latin"],
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Chikitaverse App",
  description: "Chikitaverse Website app",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="pt-br"
      className={` ${getInter} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header/>
        {children}
      </body>
    </html>
  );
}
