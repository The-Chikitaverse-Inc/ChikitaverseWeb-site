'use client'
import { useEffect, useState } from "react";
import { onAuthStateChanged, updateProfile} from "firebase/auth";
import { auth } from "./config";

export function useAuth() {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const unSubcrise = onAuthStateChanged(auth, (user) => {
            setUser(user || null)
            setLoading(false)
        })

        return () => unSubcrise()
    }, [])

    return {
        user,
        loading,
    }
}