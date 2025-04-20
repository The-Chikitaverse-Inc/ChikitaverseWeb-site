import styles from '../../app/components/css/layout.module.css'

//! Components 
import Footer from "../components/layout/Footer/Footer"
import Aside from "../components/layout/Aside/Aside"
import Header from "../components/layout/Header/Header"


export default function DiscorBot() {
    return(
        <>
            <Header />
            <section className={styles.maincont}>
                <Aside />
                <main className={styles.cotent}>
                    <article>

                    </article>
                    <Footer className={styles.footer} />
                </main>
            </section>
        </>
    )
}