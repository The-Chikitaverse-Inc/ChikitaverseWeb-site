const style = require('./Aside.module.css')
import NavItem from '@/components/ux/NavItem/Navitem'
import DiscordNav from "@/components/ux/DiscordNav/DiscordNav";

export default function Aside() {
    return (
        <aside className={style.aside} >
            <h3>Paginas</h3>
                <nav>
                    <NavItem title='Home' ssvg='home.svg' link='/'/>
                    <NavItem title='Chikitaverse' ssvg='apps.svg' link='/chikitaverse' />
                </nav>

                <DiscordNav/>
        </aside>
    )
}