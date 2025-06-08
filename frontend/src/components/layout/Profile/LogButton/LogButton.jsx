'use client'
import { exitUser } from "@/lib/firebase/auth";
import { useAuth } from "@/lib/firebase/use";
import styles from './LogButton.module.css'
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
                    <Link href='/registrer' className={styles.open}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#E0E1E3"><path d="M480-120v-80h280v-560H480v-80h280q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H480Zm-80-160-55-58 102-102H120v-80h327L345-622l55-58 200 200-200 200Z"/></svg>
                        Entrar
                    </Link>
               ) : 
                (
                    <button onClick={exit} className={styles.exit}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#E0E1E3"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h280v80H200Zm440-160-55-58 102-102H360v-80h327L585-622l55-58 200 200-200 200Z"/></svg>
                        Sair
                    </button>
                )
            }
        </span>
    )
}