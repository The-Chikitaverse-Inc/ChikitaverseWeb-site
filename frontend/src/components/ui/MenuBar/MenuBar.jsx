"use client"
import styles from './MenuBar.module.css'
import '../../css/theme.css'

//! Components
import MenuOption from '../MenuOption/MenuOption'


export default function NavBar() {
    return (
        <nav className={styles.menu}>
            <div className={styles.menubar1}></div>
            <div className={styles.menubar2}></div>
            <div className={styles.menubar3}></div>

            <ul className={` ${styles.iten} glcolors `}>
                <MenuOption></MenuOption>
            </ul>
        </nav>
    )//Todo: Testa o component
}