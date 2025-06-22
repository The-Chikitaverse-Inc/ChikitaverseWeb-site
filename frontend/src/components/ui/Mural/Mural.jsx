'use client'
import { useEffect, useState } from "react"
import { collection, addDoc, query, onSnapshot, doc } from 'firebase/firestore'
import { getAuth, onAuthStateChanged } from "firebase/auth"
import { db } from "@/lib/firebase/config"
const styles = require('./Mural.module.css')

export default function Mural() {
    const [user, setUser] = useState('')
    const [text, setText] = useState('')
    const [message, setMessages] = useState('')

    useEffect(() => {
        const auth = getAuth()
        const unSub = onAuthStateChanged(auth, (firebaseUser) => {
            setUser(firebaseUser)
        })
        return () => unSub()
    }, [])

    const sendMessage = async (e) => {
        e.preventDefault()
        if (!user || !text) return

        await addDoc(collection(db, 'messages'), {
            username: user.displayName || user.email,
            text,
        })

        setText('')
    }

    useEffect(() => {
        const q = query(collection(db, 'messages'))
        const unSubcrise = onSnapshot(q, (snapshot) => {
        const msg = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
    }))
            setMessages(msg) // ✅ aqui
        })
        return () => unSubcrise()
    }, [])

    return (
        <section className={` ${styles.mural} colornav`}>
            <h3>Mural: </h3>
                {user ? (
                    <form onSubmit={sendMessage}>
                        <textarea
                            placeholder="Escreva sua mensagem..."
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            className="highlightcolors"
                        />
                        <button className="highlightcolors" type="submit">
                            Postar como {user.displayName || user.email}
                        </button>
                    </form>
                ) : (
                    <p>Faça login para postar mensagens.</p>
                )}

            {Array.isArray(message) && message.length > 0 ? (
  message.map(msg => (
    <div key={msg.id} className="highlightcolors">
      <h6>{msg.username}</h6>
      <p>{msg.text}</p>
    </div>
  ))
) : (
  <p>Nenhuma mensagem encontrada.</p>
)}
        </section>
    )
}