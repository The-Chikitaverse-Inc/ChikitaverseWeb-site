'use client'
import { exitUser } from "@/lib/firebase/auth";
import { useAuth } from "@/lib/firebase/useAuth";
import styles from './LogButton.module.css'
import { use } from "react";
import Link from "next/link";

export function LogButton() {
    
    const { user } = useAuth()
    const exit = async () => {
        try {
            await exitUser()
            console.log('Usuario saiu')
        } catch (err) {
            console.error(`Erro ao sair: ${err}`)
        }
        
    }

    return (
        <span className={styles.button}>
            { !user ? (
                    <Link href='/registrer' className={styles.open}>Entrar</Link>
               ) : 
                (
                    <button onClick={exit} className={styles.exit}>Sair</button>
                )
            }
        </span>
    )
}