import { exitUser } from '@/lib/firebase/auth'
import styles from './profile.module.css'

//* Componentes
import Section from "@/components/layout/Section/Section"
import ProfilePic from '@/components/layout/Profile/ProfilePic/ProfilePic'
import ProfileName from '@/components/layout/Profile/ProfileName/ProfileName'
import { LogButton } from '@/components/layout/Profile/LogButton/LogButton'

export default function Profile() {
    return (
        <>
            <Section>
                <article className={styles.profile}>
                    <section>
                        <ProfilePic/>
                        <ProfileName/>
                    </section>
                    <LogButton/>
                </article>
            </Section>
        </>
    )
}