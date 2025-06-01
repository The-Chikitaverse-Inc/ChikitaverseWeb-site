import styles from './profile.module.css'

//* Componentes
import Section from "@/components/layout/Section/Section"
import ProfilePic from '@/components/layout/Profile/ProfilePic/ProfilePic'
import ProfileName from '@/components/layout/Profile/ProfileName/ProfileName'

export default function Profile() {
    return (
        <>
            <Section>
                <article className={styles.profile}>
                    <ProfilePic/>
                    <ProfileName/>
                </article>
            </Section>
        </>
    )
}