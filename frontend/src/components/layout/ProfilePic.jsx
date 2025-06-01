'use client'
import { useAuth } from "@/lib/firebase/useAuth"

export default function ProfilePic() {
    const { user } = useAuth()
    
    return (
        <img 
          src={user.photoURL || "/chikita.jpeg"}
          alt="Avatar"
        />
    )
}