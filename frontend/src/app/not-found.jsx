import Image from "next/image"
import Link from "next/link"

export default function NotFound() {
    return (
        <span id='notfound'>
            
            <div>
                <h1>404 - Esse linha do Chikitaverso não existe ainda</h1>
                <Image src='/chikita.png' width={200} height={200} alt="Chikita Not found" />
            </div>

            <span>
                <Link href='/'>
                    <button id="nfbutton">Voltar ao Inicio</button>
                </Link>
            </span>
        </span>
    )
}