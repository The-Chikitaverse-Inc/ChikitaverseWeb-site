const style = require('./Header.module.css')
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
    return (
        <header className={style.header}>
            <Link href='/'>
                <Image src='/logochikitaverse.png'  alt='Logo Chikitaverse' width={90} height={90} priority/>
            </Link>

            <h1>The Chikitaverse Inc.</h1>
        </header>
    )
}