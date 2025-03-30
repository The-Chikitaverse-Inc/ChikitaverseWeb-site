import { useEffect } from "react"

export default function Home() {

    useEffect(() => {
                document.title = 'Chikitaverse - Home'
            })

    return (
        <>
            <h1>Bem vindo ao Chikitaverso!</h1>

            <p>Olá, novo Chikita! Bem-vindo ao Chikitaverso, o lugar onde todos os multiversos da Rei Chikita se encontram na internet!</p>

            
        </>
    )
}