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
                <button >Clique Aqui!</button>
            </a>
        </span>
        <h2>Atividade:</h2>
        <RobloxCard/>
        </article>
      </Section>
    </>
  );
}
