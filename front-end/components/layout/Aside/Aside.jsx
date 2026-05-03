const style = require('./Aside.module.css')
import NavItem from '@/components/ux/NavItem/Navitem'

export default function Aside() {
    return (
        <aside className={style.aside} >
            <h3>Paginas</h3>
                <NavItem title='Home' ssvg='home.svg' link='/'/>
                <NavItem title='Chikitaverse' ssvg='apps.svg' link='/chikitaverse' />
        </aside>
    )
}