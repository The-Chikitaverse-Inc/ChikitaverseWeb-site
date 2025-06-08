//! Components
import Section from "@/components/layout/Section/Section";
import RobloxCard from "@/components/ui/RobloxCard/RobloxCard";

export default function Home() {
  return (
    <>
      <Section>
        <article id='homecotent' >
        <h2>Bem vindo ao Chikitaverso!</h2>
          <p>Esta buscando um multiverso para se divertir? Veio ao lugar certo!</p>

        <span id="linkbuttonchikitaverse">
            <a href='/chikitaverse'>
                <button >
                  Clique Aqui!
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#E0E1E3"><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/></svg>
                </button>
            </a>
        </span>
        <h2>Atividade:</h2>
        <RobloxCard/>
        </article>
      </Section>
    </>
  );
}
