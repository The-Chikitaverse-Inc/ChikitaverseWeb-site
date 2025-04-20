//! Componentes
import Header from "./components/layout/Header/Header.jsx";
import Section from "./components/layout/Section/Section.jsx";

export default function Home() {
  return (
    <>
      <Header/>
      <Section>
        <article>
          <h2>Bem vindo ao Chikitaverso!</h2>

            <p>Esta buscando um multiverso para se divertir? Veio ao lugar certo!</p>

              <span id="linkbuttonchikitaverse">
                  <a href='/chikitaverse'> 
                      <button >Clique Aqui!</button>
                  </a>
              </span>
        </article>
      </Section>
    </>
  );
}
