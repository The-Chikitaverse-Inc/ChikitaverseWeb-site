import { Link } from 'react-router-dom'
import './NavList.css'

export default function NavList({page, img, figcap}) {
    
    const Page = page 
    const Img = `/${img}`
    const figCap = figcap

    return (
        <span>
        <Link to={Page} className='nav'>
            <img src={Img} alt='Rota do Chikitaverso'/>
            <p>{figCap}</p>
        </Link>
        </span>
    )    
}