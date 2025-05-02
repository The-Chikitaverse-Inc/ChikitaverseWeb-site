import '../../css/theme.css'
import Image from "next/image";
import Link from "next/link";
import styles from './Header.module.css'

//! Components
import ThemeButton from "@/components/ui/ThemeButton/ThemeButton";

export default function Header() {
    return(
        <header className={` ${styles.header} highlightcolors `}> 
          <Link href='/'>
          <Image  //* Logo do Chikitaverse
            src='/logoChikitaverse.png' 
            alt="Logo" 
            priority 
            quality={75}
            
            width={90}
            height={90}
            />
          </Link>

          <h1>The Chikitaverse Inc.</h1>

            <ThemeButton className={styles.theme} />
        </header>
    )
}