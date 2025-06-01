'use client'
import { useAuth } from "@/lib/firebase/useAuth"

export default function ProfileName() {
    const { user } = useAuth()

    return (
        <h2>{user?.displayName ?? 'None'}</h2>
    )
}