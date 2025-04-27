import styles from './Section.module.css'

//! Components
import Footer from '../Footer/Footer.jsx'
import Aside from '../Aside/Aside.jsx'

export default function Section({ children }) {
    return (
        <section className={styles.maincont}>
                <Aside/>
                <main className={`${styles.cotent} glcolors`}>
                  {children}
                  <Footer className={styles.footer} />
                </main>
        </section>
    )
}