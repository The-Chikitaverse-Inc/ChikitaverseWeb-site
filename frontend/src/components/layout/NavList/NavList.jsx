'use client'
import Link from "next/link"
import Image from "next/image"
import styles from './NavList.module.css'
import '../../../app/globals.css'

export default function NavList({ page, img, text }) {
    const vpage = page
    const vimg = `/${img}`
    const vtext = text

    return ( //Todo: Fazer Sistema de troca de icons do site
        <Link href={vpage} className={`${styles.navlist} textcolor `}>
            <Image src={vimg} width={30} height={30} alt="Menu Chikitaverse"/>
            <h6>{vtext}</h6>
        </Link>
    )
}
