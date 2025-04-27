import Image from 'next/image'
import styles from './Aside.module.css'
import '../../../app/globals.css'

//! Coponents
import NavList from '../NavList/NavList'

export default function Aside() {
    return(
        <aside className={` ${styles.menu} glcolors `}>
            <span>
                <h2>Menu</h2>
                    <NavList page='/' img='home.svg' text='Home'/>
                    <NavList page='/chikitaverse' img='pagelink.svg' text='Chikitaverse' />
                    <NavList page='/discordbot' img='discord.svg' text='Discord Bot'/>
            </span>

            <nav className={styles.navaside}>

                <a href="https://discord.gg/9buX7KqKXK" className={styles.sociallink} target='_blank'>
                    <Image src='/discord.svg' width={35} height={35} alt='Social'/>
                </a>

                <a href="https://www.twitch.tv/dvcdaniel" className={styles.sociallink} target='_blank'>
                    <Image src='/twitch.svg' width={35} height={35} alt='Social'/> 
                </a>

                <a href="https://www.youtube.com/channel/UCfhG34FvrZ8q2BBoeLqgzug" className={styles.sociallink} target='_blank'>
                    <Image src='/youtbe.svg' width={35} height={35} alt='Social'/>                
                </a>

                <a href="https://x.com/chikitaverso" className={styles.sociallink} target='_blank' >
                    <Image src='/twitter.svg' width={35} height={35} alt='Social'/>
                </a>
            </nav>
        </aside>
    )
}