import styles from './discordbot.module.css'
import Image from 'next/image'

//! Components 
import Header from "../components/layout/Header/Header.jsx"
import Section from '../components/layout/Section/Section.jsx'

export default function DiscorBot() {
    return(
        <>
            <Header/>
            <Section >
                <article className={styles.page}>
                    <h2>Discord Bot</h2>

                        <span>
                            <Image className={styles.botprofile} src='/chikitaarre.jpeg' width={60} height={60} alt='Logo Chikita Bot'/>
                            <h3>Chikita Bot #5262</h3>
                        </span>
                </article>
            </Section>
        </>
    )
}