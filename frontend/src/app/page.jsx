import Image from "next/image";
import Link from "next/link";

//! Componentes
import Header from "./components/layout/Header/Header.jsx";
import Aside from "./components/layout/Aside/Aside.jsx";
import Footer from "./components/layout/Footer/Footer.jsx";

export default function Home() {
  return (
    <>
      <Header/>
      <section id="maincont">
        <Aside/>
        <main id="cotent">
            <article>

              <h2>Bem vindo ao Chikitaverso!</h2>

              <p>Esta buscando um multiverso para se divertir? Veio ao lugar certo!</p>
              
              <span id="linkbuttonchikitaverse">
                <a href='/chikitaverse'> 
                  <button >Clique Aqui!</button>
                </a>
              </span>

            </article>
          <Footer id='footer' />
        </main>
      </section>
    </>
  );
}
