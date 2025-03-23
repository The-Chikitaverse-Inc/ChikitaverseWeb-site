import './ImagePage.css'
import { Link } from 'react-router-dom'

export default function ImageProfile({page, img, textalt, borderad}) {

    const Page = page 
    const Img = `/${img}`
    const altText = textalt

    return (
        <span>
            <Link to={Page} >
            <img src={Img} alt={altText} id={borderad == false ? 'imgstylefalse' : 'imgstyletrue'} />
            </Link>
        </span>
    )
}