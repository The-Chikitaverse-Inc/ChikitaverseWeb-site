import styles from './RobloxCard.module.css'
import getData from '@/service/getData';
import compactNotation from '@/service/compactNotation'

export default async function RobloxCard() {
    const resData = await getData('https://chikitaverse-api.onrender.com/roblox');
    const chikitaVoice = resData.gameData.data[0]

    return (
      <section className={styles.robloxcard}>
          <div>
            <h3>Game Roblox: {chikitaVoice.name}</h3>
              <p>{chikitaVoice.description}</p>
          </div>
          <span>
              <p className={styles.status}>Pessoa Ativas: {compactNotation(chikitaVoice.playing)}</p>
              <p className={styles.status}>Visitas: {compactNotation(chikitaVoice.visits)}</p>
          </span>
      </section>
    );
  }