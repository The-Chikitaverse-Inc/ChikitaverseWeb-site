const styles = require('./MainPage.module.css')

import Aside from "../Aside/Aside";
import Main from "../Main/Main";


export default function MainPage({children, title}) {
    const mainTitle = `${title}`
    
    return (
        <span className={styles.page}>
            <Aside className={styles.p_aside} />
            <Main mtitle={mainTitle} className={styles.p_main} >
                {children}
            </Main>
        </span>
    )
}