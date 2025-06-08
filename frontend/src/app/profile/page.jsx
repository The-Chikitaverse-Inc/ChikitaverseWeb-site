import styles from './profile.module.css'

//* Componentes
import Section from "@/components/layout/Section/Section"
import ProfilePic from '@/components/layout/Profile/ProfilePic/ProfilePic'
import ProfileName from '@/components/layout/Profile/ProfileName/ProfileName'
import { LogButton } from '@/components/layout/Profile/LogButton/LogButton'
import ConfigProfile from '@/components/layout/Profile/ConfigProfile/ConfigProfile'

export const metadata = {
    title: 'Profile',
}

export default function Profile() {
    
    return (
        <>
            <Section>
                <article className={styles.profile}>
                    <section className={styles.profileheader}>
                        <ProfilePic/>
                        <ProfileName />
                    </section>
                    <ConfigProfile/>
                    <LogButton/>
                </article>
            </Section>
        </>
    )
}