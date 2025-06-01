import { Geist, Geist_Mono, Pixelify_Sans, Press_Start_2P } from "next/font/google";
import "./globals.css";
import '@/components/css/theme.css'

//! Components
import { Theme } from "@/components/layout/Theme/Theme";
import Script from "next/script";
import Header from "@/components/layout/Header/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const pixelifySans = Pixelify_Sans({
  variable: "--font-pixelify-sans",
  subsets: ["latin"]
})

const pressStart2P = Press_Start_2P({
  variable: '--font-press-start-2p',
  subsets: ['latin'],
  weight: '400',
});

export const metadata = {
  title: {
    default: 'Chikitaverse - Home',
    template: 'Chikitaverse - %s',
  },
  description: 'Entre no Chikitaverso poder explora as teias cosmicas de Todo o multiverso de Chikita',
}


export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
        <head>
          <meta property="og:title" content="Chikitaverse" />
            <meta property="og:image" content="/logochikitaverse.png" />
              <meta property="og:type" content="website" />

          <meta name="twitter:card" content="logochikitaverse" />
            <meta name="twitter:title" content="Chikitaverse" />
              <meta name="twitter:description" content="Entre no Chikitaverso poder explora as teias cosmicas de Todo o multiverso de Chikita" />
                <meta name="twitter:image" content="/logochikitaverse.png" />

         <Script
          id="adsense-script"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3875697428527351"
          crossOrigin="anonymous"
        />
        </head>
        <body
          className={`${geistSans.variable} ${geistMono.variable} ${pixelifySans.variable} ${pressStart2P.variable} antialiased`}
        >
          <Theme>
            <Header/>
            {children}
          </Theme>
        </body>
    </html>
  );
}
