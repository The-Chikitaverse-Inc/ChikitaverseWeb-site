import '../../css/theme.css'
import styles from './Footer.module.css'

export default function Footer() {
    const date = new Date()
    const currentYear = date.getFullYear()

    return (
        <footer className={`${styles.menu} textcolor`}>
          <p>&copy; {currentYear} The Chikitaverse Inc. - Todos os direitos reservados.</p>
        </footer>
    )
}