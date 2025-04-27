'use-client'
//! Components
import Header from "@/components/layout/Header/Header"
import Section from "@/components/layout/Section/Section"
import CardChikitaverse from "@/components/ui/CardChikitaverse/CardChikitaverse"

export default function Chikitaverse() {
    return (
        <>
            <Header/>
            <Section>
                <article>

                    <h2>Chikitaverse</h2>

                        <CardChikitaverse logo='chess.png' link='https://www.chess.com/club/the-chikitaverse-inc/join' title='Clube de Xadrez' game='Chess.com' />
                        <CardChikitaverse logo='roblox.png' link='https://www.roblox.com/pt/communities/35567222/The-Chikitaverse-Inc#!/about' title='TCInc. Comunidade' game='Roblox'/>
                        <CardChikitaverse logo='roblox.png' link='https://www.roblox.com/pt/games/108630188152409/ChikitaVoice' title='Chikita Voice' game='Roblox'/>

                </article>
            </Section>
        </>
    )
}