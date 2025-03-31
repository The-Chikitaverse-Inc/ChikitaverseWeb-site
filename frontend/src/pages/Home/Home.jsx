import { useEffect } from "react"
import './Home.css'

export default function Home() {

    useEffect(() => {
                document.title = 'Chikitaverse - Home'
            })

    return (
        <span id="home">
            <h1>Home</h1>
            
            <img src="/chikita.gif" alt="Rei Chikita Gif" />

        </span>
    )
}