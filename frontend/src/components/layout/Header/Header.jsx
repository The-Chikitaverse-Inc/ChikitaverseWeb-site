import Image from "next/image";
import Link from "next/link";
import styles from './Header.module.css'

//! Components
import ThemeButton from "@/components/ui/ThemeButton/ThemeButton";
import NavBar from '@/components/ui/Menu/MenuBar/MenuBar';
import LoginNav from "../LoginNav/LoginNav";

export default function Header() {
    return(
        <header className={` ${styles.header} highlightcolors `}> 
          <Link href='/' className={styles.logo}>
          <Image  //* Logo do Chikitaverse
            src='/logochikitaverse.png' 
            alt="Logo" 
            priority 
            quality={75}
            
            width={90}
            height={90}
            />
          </Link>

          <h1>Chikitaverse Inc.</h1>
            <LoginNav/>
            <NavBar/>
            <ThemeButton className={styles.theme} />
        </header>
    )
}