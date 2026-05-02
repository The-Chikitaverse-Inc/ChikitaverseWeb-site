const style = require("./Main.module.css")

import Aside from "../Aside/Aside"

export default function Main({children, mtitle, }) {
    const titleHeading2 = `${mtitle}`
    const date = new Date().getFullYear()

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