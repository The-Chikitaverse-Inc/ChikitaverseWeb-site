const style = require('./Header.module.css')
import Image from 'next/image'

export default function Header() {
    return (
        <header className={style.header}>
            <Image src='/logochikitaverse.png'  alt='Logo Chikitaverse' width={112} height={112}/>
            <h1>The Chikitaverse Inc.</h1>
        </header>
    )
}