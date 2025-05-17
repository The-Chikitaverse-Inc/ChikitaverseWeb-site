import styles from './RobloxCard.module.css'
import getData from '@/service/getData';
import compactNotation from '@/service/compactNotation'

export default async function RobloxCard() {
    const resData = await getData('http://localhost:1995/roblox');
    const chikitaVoice = resData.gameData.data[0]

    return (
      <section className={styles.robloxcard}>
          <div>
            <h3>Game Roblox: {chikitaVoice.name}</h3>
              <p>{chikitaVoice.description}</p>
            <span>
              <p>Pessoa Ativas: {compactNotation(chikitaVoice.playing)}</p>
              <p>Visitas: {compactNotation(chikitaVoice.visits)}</p>
            </span>
          </div>
      </section>
    );
  }