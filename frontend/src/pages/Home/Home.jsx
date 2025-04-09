import { useEffect } from "react"
import './Home.css'

//! Componentes
import NavHome from "../../components/NavHome/NavHome.jsx"

export default function Home() {

    useEffect(() => {
                document.title = 'Chikitaverse - Home'
            })

    return (
        <span id="home">
            <h1>Home</h1>
            <p>Bem vindo ao Chikitaverso o multiverso dos Chikitas!</p>

            <span id="gifch" >

            <span className="visualeffect"></span>
            <img src="/chikita.gif" alt="Rei Chikita Gif" />
            <span className="visualeffect"></span>

            </span>

            <section id="secchikitaverse">
                <h3>Chikitaverse Games:</h3>

                <NavHome link='https://www.roblox.com/pt/games/108630188152409/ChikitaVoice' img='roblox.svg' title='Chikita Voice' />
            </section>
        </span>
    )
}