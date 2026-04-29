const style = require("./Main.module.css")

import Aside from "../Aside/Aside"

export default function Main({children, title, }) {
    const titleHeading2 = `${title}`
    const date = new Date().getFullYear()

    //todo: termina esta area do site

    return (
        <main className={style.main}>
            <h2>{titleHeading2}</h2>
                <span>
                    {children}
                </span>
            <footer>
             <p>&copy; {date} The Chikitaverse Inc. - Todos os Direitos reservados </p>
            </footer>
        </main>
    )
}