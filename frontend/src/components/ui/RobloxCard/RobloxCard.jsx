import styles from './RobloxCard.module.css'
import getData from '@/service/getData';
import compactNotation from '@/service/compactNotation'

export default async function RobloxCard() {
    const resData = await getData('roblox');
    const chikitaVoice = resData.gameData?.data[0]

     return (
      <section className={styles.robloxcard}>
          <div>
            <h3>Game Roblox: {chikitaVoice ? chikitaVoice.name : 'Carregando..'}</h3>
              <img src="/logoChikitavoice.png" alt="Logo Chikita Voice" />
          </div>
          <span>
              <p className={styles.status}>Pessoas Ativas: {compactNotation(chikitaVoice ? chikitaVoice.playing : 'None')}</p>
              <p className={styles.status}>Visitas: {compactNotation(chikitaVoice ? chikitaVoice.visits : 'None')}</p>
          </span>
      </section>
    );
  }