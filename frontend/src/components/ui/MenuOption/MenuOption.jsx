import styles from './MenuOption.module.css'
import Link from "next/link"

export default function MenuOption({ children, link }) {

    const s = styles
    const vrlink = `${link}`

    return (
        <li className={s.option}>
            <Link href={vrlink} className={s.link}>
                {children}
            </Link>
        </li>
    )
}