import styles from '../../app/components/css/layout.module.css'

//! Components
import Header from "../components/layout/Header/Header.jsx"
import Aside from "../components/layout/Aside/Aside.jsx"
import Footer from "../components/layout/Footer/Footer.jsx"
import CardChikitaverse from '../components/cards/CardChikitaverse/CardChikitaverse'

export default function Chikitaverse() {
    return (
        <>
            <Header/>
            <section className={styles.maincont}>
                <Aside/>
                <main className={styles.cotent}>
                    <article>
                        <h2>Chikitaverse Games:</h2>

                        <CardChikitaverse logo='chess.png' link='https://www.chess.com/club/the-chikitaverse-inc/join' title='Clube de Xadrez' game='Chess.com' />
                        <CardChikitaverse logo='roblox.png' link='https://www.roblox.com/pt/games/108630188152409/ChikitaVoice' title='Chikita Voice' game='Roblox'/>
                    </article>
                    <Footer className={styles.footer} />
                </main>
            </section>
        </>
    )
}