import Image from "next/image";
import Link from "next/link";

//! Componentes
import NavList from "./components/layout/NavList/NavList";
import Header from "./components/layout/Header/Header";

export default function Home() {
  
  const date = new Date()
  const currentYear = date.getFullYear()
  
  return (
    <>
      <Header/>
      <section id="maincont">
        <aside id="menu">
            <h2>Menu</h2>
            <NavList page='/' img='home.svg' text='Home'/>
            <NavList page='/chikitaverse' img='pagelink.svg' text='Chikitaverse' />
        </aside>
        <main id="cotent">
            <article>

              <h2>Bem vindo ao Chikitaverso!</h2>

              <p>Esta buscando um multiverso para se divertir? Veio ao lugar certo!</p>
              
              <Image src='/chikita.gif' width={260} height={260} alt="Chikita gif"/>
              //Todo: Ajustar css da imagem
              
              <Link href='/chikitaverse'>
                <button id="buttonchikitaverse">Clique Aqui!</button>
              </Link>

            </article>
        <footer>
          <p>&copy; {currentYear} The Chikitaverse Inc. - Todos os direitos reservados</p>
        </footer>
        </main>
      </section>
    </>
  );
}
