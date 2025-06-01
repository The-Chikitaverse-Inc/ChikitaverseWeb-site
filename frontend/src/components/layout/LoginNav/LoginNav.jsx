"use client"
import Link from "next/link";
import { useAuth } from "@/lib/firebase/useAuth";
import styles from './LoginNav.module.css'

//! Componments
import ProfilePic from "../Profile/ProfilePic/ProfilePic";

export default function LoginNav() {
  const { user, loading } = useAuth()

  if (loading) return null

  return (
    <nav className={styles.buttonlog}>
        {!user ? (
            <Link href='/registrer'>Entrar</Link>
        ) : (
            <ProfilePic />
        )}
    </nav>
  );
}
