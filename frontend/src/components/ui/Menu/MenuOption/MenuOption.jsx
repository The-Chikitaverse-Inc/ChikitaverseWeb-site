import styles from './MenuOption.module.css'
import Link from "next/link"

export default function MenuOption({ children, link, text}) {

    const s = styles
    const vrlink = `${link}`
    const vrtext = text

    return (
        <li className={s.option}>
            <Link href={vrlink} className={`${s.link} textcolor`}>
                {children}
                <h6>{vrtext}</h6>
            </Link>
        </li>
    )
}