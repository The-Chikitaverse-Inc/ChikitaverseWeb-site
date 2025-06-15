'use-client'
import styles from './chikitaverse.module.css'

//! Components
import Section from "@/components/layout/Section/Section"
import CardChikitaverse from "@/components/ui/CardChikitaverse/CardChikitaverse"
import RobloxCard from '@/components/ui/RobloxCard/RobloxCard'

export const metadata = {
    title: 'Explorer',
  }

export default function Chikitaverse() {
    return (
        <>
            <Section>
                <article className={styles.chikitaverse}>
                    <h2>Chikitaverse</h2>
                    <span>
                        <CardChikitaverse logo='chess.png' link='https://www.chess.com/club/the-chikitaverse-inc/join' title='Clube de Xadrez' game='Chess.com' />
                            <CardChikitaverse logo='roblox.png' link='https://www.roblox.com/pt/communities/35567222/The-Chikitaverse-Inc#!/about' title='TCInc. Comunidade' game='Roblox'/>
                                <CardChikitaverse logo='roblox.png' link='https://www.roblox.com/pt/games/91016125083941/ChikitaVoice-Acesso-antecipado' title='Chikita Voice' game='Roblox'/>
                    </span>
                    <section>
                        <h2>Atividade:</h2>
                            <RobloxCard/>
                    </section>
                </article>
            </Section>
        </>
    )
}