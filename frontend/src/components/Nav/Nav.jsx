import './Nav.css'
import { Link } from "react-router-dom";


export default function Nav({ img, txt, page, text }) {
    const Image = `/${img}`
    const texAlt = txt || "Imagem"
    const toPage = page || "/"
    const textChildren = text || "Erro"

    return (
        <span id='container1'>
            <img src={Image} alt={texAlt} id='img'/>
            <Link to={toPage} id='link'>{textChildren}</Link>
        </span>
    );
}
