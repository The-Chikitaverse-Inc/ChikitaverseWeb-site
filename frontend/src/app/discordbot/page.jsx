import styles from './discordbot.module.css'
import Image from 'next/image'

//! Components 
import Header from '@/components/layout/Header/Header'
import Section from '@/components/layout/Section/Section'
import BotButton from '@/components/ui/BotButton/BotButton'

export default function DiscorBot() {
    return(
        <>
            <Header/>
            <Section >
                <article className={styles.page}>
                    <h2>Discord Bot</h2>

                        <span>
                            <div className={styles.headerbot}>
                                <Image className={styles.botprofile} src='/chikitaarre.jpeg' width={60} height={60} alt='Logo Chikita Bot'/>
                                <h3>Chikita Bot</h3>
                            </div>

                            <div>
                                <h4>Descrição:</h4>
                                <p>Olá! Sou o Bot Chikita, criado para servir ao Chikitalismo e aos serviços do Chikitaverso, sempre garantindo achocolatado infinito!</p>    

                                <button className={styles.buttonbot}>
                                    <a href="https://discord.com/oauth2/authorize?client_id=1159279268627488809" target='_blank'>Adicionar app </a>
                                </button>
                                
                                <BotButton link='/discordbot/termsofservice' >Termos de Serviço</BotButton>
                                <BotButton link='/discordbot/privacypolicy'>Política de Privacidade</BotButton>
                            </div>

                        </span>
                </article>
            </Section>
        </>
    )
}