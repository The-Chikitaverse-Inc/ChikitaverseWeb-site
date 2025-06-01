"use client"
import Link from "next/link";
import { useAuth } from "@/lib/firebase/useAuth";
import styles from './LoginNav.module.css'

export default function LoginNav() {
  const { user, loading } = useAuth()

  if (loading) return null

  return (
    <nav className={styles.buttonlog}>
        {!user ? (
            <Link href='/registrer'>Entrar</Link>
        ) : (
            <img 
              src={user.photoURL || "/chikita.jpeg"}
              alt="Avatar"
            />
        )}
    </nav>
  );
}
