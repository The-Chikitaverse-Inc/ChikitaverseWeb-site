import './NavHome.css'

export default function NavHome({link, img, title}) {

    const Link = link
    const Img = `/${img}`
    const Title = title

    return (
        <a href={Link} target='_blank' className='navtcinc'>
            <img src={Img} alt="Imagem do Chikitaverso" />
            <h4>{Title}</h4>
        </a>
    )
}