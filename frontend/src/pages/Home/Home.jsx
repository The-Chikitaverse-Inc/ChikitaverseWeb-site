import { useEffect } from "react"
import './Home.css'

//! Componentes
import Nav from "../../components/Nav/Nav.jsx"

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

            <section>
                <h3>Chikitaverso:</h3>

                
            </section>
        </span>
    )
}