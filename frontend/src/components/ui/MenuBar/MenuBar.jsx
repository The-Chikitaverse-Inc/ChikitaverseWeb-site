"use client"
import styles from './MenuBar.module.css'
import '../../css/theme.css'
import Link from 'next/link'


export default function NavBar() {
    return ( //Todo: Fazer a o componente das opçoes de menu
        <nav className={styles.menu}>
            <div className={styles.menubar1}></div>
            <div className={styles.menubar2}></div>
            <div className={styles.menubar3}></div>

            <ul className={` ${styles.iten} glcolors `}>
                <li>
                    
                </li>
                
                <li>
                </li>
                
                <li>
                </li>
            </ul>
        </nav>
    )
}