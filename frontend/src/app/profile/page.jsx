'use client'
import { useAuth } from "@/lib/firebase/useAuth"
import styles from './profile.module.css'

//* Componentes
import Section from "@/components/layout/Section/Section"

export default function Profile() {
    const { user, loading} = useAuth()
    
    return (
        <>
            <Section>
                <article className={styles.profile}>
                    <img 
              src={user?.photoURL || "/chikita.jpeg"}
              alt="Avatar"/>
              <h2></h2>
                </article>
            </Section>
        </>
    )
}