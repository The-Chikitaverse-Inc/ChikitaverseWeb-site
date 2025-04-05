import { useEffect } from "react"
import './Home.css'


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

        </span>
    )
}