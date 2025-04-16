import Image from "next/image";
import Link from "next/link";

//! Componentes
import NavList from "./components/layout/NavList/NavList";

export default function Home() {
  return (
    <>
      <header id='header'>
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
      </header>
      <section id="maincont">
        <aside id="menu">
            <h2>Menu</h2>
            <NavList page='/chikitaverse' img='pagelink.svg' text='Chikitaverse' />
        </aside>
        <main>

        </main>
        <footer>

        </footer>
      </section>
    </>
  );
}
