import { Geist, Geist_Mono, Pixelify_Sans, Press_Start_2P } from "next/font/google";
import "./globals.css";
import '@/components/css/theme.css'

//! Components
import { ThemeProvider } from "next-themes";

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
  title: "Chikitaverse",
  description: "Chikitaverso, o Multiverso dos Chikitas!",
};

export default function RootLayout({ children }) {
  return (
    <html>
        <body
          className={`${geistSans.variable} ${geistMono.variable} ${pixelifySans.variable} ${pressStart2P.variable} antialiased`}
        >
          <ThemeProvider 
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
    </html>
  );
}
