//! Components
import Header from "@/components/layout/Header/Header";
import Section from "@/components/layout/Section/Section";
import ThemeButton from "@/components/ui/ThemeButton/ThemeButton";

export default function Home() {
  return (
    <div>
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
    </div>
  );
}
