const style = require('./NavItem.module.css')
import Link from 'next/link'
import Image from 'next/image'



export default function NavItem({title, ssvg, link}) {
    const sourceSvg = `/${ssvg}`
    const titleNav = `${title}`
    const linkNav = `${link}`
    
    return (
        <Link href={linkNav} className={style.navitem}>
            <Image alt='Svg item for Nav pages' src={sourceSvg} width={31} height={31}/>
              <h3>{titleNav}</h3>
        </Link>
    )
}