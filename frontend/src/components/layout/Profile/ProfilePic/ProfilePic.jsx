'use client'
import { useAuth } from "@/lib/firebase/use"

export default function ProfilePic() {
    const { user } = useAuth()
    
    return (
        <img src={user?.photoURL ?? '/chikita.jpeg'} alt="Foto" />
    )
}