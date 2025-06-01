import styles from './Botbutton.module.css'
import Link from 'next/link'

export default function BotButton({ children, link }) {
    
    const vrlink = `/discordbot/${link}`
    
    return (
        <button className={styles.botbutton}>
            <Link href={vrlink}>{children}</Link>
        </button>
    )
}