const style = require('./Header.module.css')
import Image from 'next/image'

export default function Header() {
    return (
        <header className={style.header}>
            <Image src='/logochikitaverse.png'  alt='Logo Chikitaverse' width={90} height={90}/>
            <h1>The Chikitaverse Inc.</h1>
        </header>
    )
}