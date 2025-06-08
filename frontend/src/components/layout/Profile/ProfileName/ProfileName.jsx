'use client'
import { useAuth } from "@/lib/firebase/use"
import styles from  './ProfileName.module.css'

export default function ProfileName() {
    const { user } = useAuth()

    return (
        <h2 className={styles.name} >{user?.displayName ?? 'None - Sem conta'}</h2>
    )
}