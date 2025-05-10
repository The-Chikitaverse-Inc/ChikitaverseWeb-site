import Image from "next/image"
import Link from "next/link"

export default function NotFound() {
    return (
        <span id='notfound'>
            
            <div>
                <h1>404 - Esse linha do Chikitaverso não existe ainda</h1>
                <img src="/chikita.png" alt="Imagem de uma Chikita" id="notfound-image"/>
            </div>

            <span>
                <Link href='/'>
                    <button id="nfbutton">Voltar ao Inicio</button>
                </Link>
            </span>
        </span>
    )
}