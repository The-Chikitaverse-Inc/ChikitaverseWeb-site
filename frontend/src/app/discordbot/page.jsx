import '@/components/css/theme.css'
import styles from './discordbot.module.css'
import Image from 'next/image'

//! Components 
import Header from '@/components/layout/Header/Header'
import Section from '@/components/layout/Section/Section'
import BotButton from '@/components/ui/Discord/BotButton/BotButton'
import DiscordMobile from '@/components/ui/Discord/DiscordMobile/DiscordMobile'

export const metadata = {
    title: 'Discord Bot',
  }

export default function DiscorBot() {
    return(
        <>
            <Header/>
            <Section >
                <article className={` ${styles.page} textcolor `}>
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
                                
                                <BotButton link='termsofservice' >Termos de Serviço</BotButton>
                                <BotButton link='privacypolicy'>Política de Privacidade</BotButton>
                            </div>
                        </span>
                        <DiscordMobile/>
                </article>
            </Section>
        </>
    )
}