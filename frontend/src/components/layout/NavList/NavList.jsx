'use client'
import '../../css/theme.css'
import Link from "next/link"
import styles from './NavList.module.css'

export default function NavList({ page, text, children}) {
    const vpage = page
    const vtext = text

    return (
        <Link href={vpage} className={`${styles.navlist} textcolor navhover`}>
            {children}
            <h6>{vtext}</h6>
        </Link>
    )
}
