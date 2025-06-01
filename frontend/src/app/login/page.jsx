'use client'
import { userLogin } from "@/lib/firebase/login";
import styles from './login.module.css'
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signInWithPopup, signInWithRedirect } from "firebase/auth";
import { auth, googleProvider } from "@/lib/firebase/config";

//* Components
import AuthReturnLog from "@/components/layout/AuthReturnLog/AuthReturnLog";

export default function loginUser() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  //* Cadastro com Email e senha
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const { user, error} = await userLogin(email, password)

    if (user) {
      router.push('/')
      console.log('Usuario logado com sucesso com sucesso')
    } else {
      console.error(`Erro ao Logar: ${error}`)
    }
  }

  //* Login com Google
  const loginComGoogle = async () => {
    try {
      if (typeof window !== "undefined" && window.innerWidth < 768) {
        //* Mobile
          console.log("Logado com Google como:", user.displayName, user.email);
          return await signInWithRedirect(auth, googleProvider)
      } else {
        //* Desktop
          console.log("Logado com Google como:", user.displayName, user.email);
          return await signInWithPopup(auth, googleProvider);
      }
    } catch (error) {
      console.error("Erro no login com Google:", error.message);
    }
  };

return (
    <main>
      <AuthReturnLog>
      <section className={`${styles.login} glcolors`}>
      <h3>Logar Usuario</h3>
        <form onSubmit={handleSubmit}>
            <input 
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="highlightcolors"
              />
            <input 
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="highlightcolors"
              />
            <button type="submit" className="highlightcolors">Entrar</button>
        </form>
          <p>Não tem uma conta? <a href="/registrer">Crie Uma!</a></p>
        <button onClick={loginComGoogle} className={`${styles.login_google} navhover`}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 262" width="48" height="48">
              <path fill="#4285F4" d="M255.68 133.5c0-11.08-.98-19.2-3.1-27.62H130.6v52.48h71.46c-1.45 12.3-9.27 30.84-26.66 43.23l-.24 1.58 38.72 30.06 2.68.27c24.56-22.65 38.92-56.04 38.92-100z"/>
                <path fill="#34A853" d="M130.6 261c35.14 0 64.64-11.63 86.18-31.63l-41.07-31.89c-11.1 7.77-25.96 13.18-45.1 13.18-34.57 0-63.86-22.71-74.28-54.24l-1.52.13-40.2 31.32-.53 1.45C35.74 226.67 79.58 261 130.6 261z"/>
                  <path fill="#FBBC05" d="M56.32 156.42A78.17 78.17 0 0 1 51.43 130c0-9.2 1.6-18.14 4.87-26.42l-.08-1.77-40.94-31.96-.27 1.27C7.68 91.15 0 109.88 0 130c0 20.12 7.68 38.85 20.98 57.12l35.34-30.7z"/>
                    <path fill="#EA4335" d="M130.6 51.24c24.45 0 40.95 10.6 50.38 19.48l36.76-35.9C194.97 13.24 165.74 0 130.6 0 79.58 0 35.74 34.33 20.98 72.88l35.34 30.7c10.42-31.53 39.7-54.34 74.28-54.34z"/>
          </svg>
          Entrar com Google
        </button>
        
        </section>
        </AuthReturnLog>
    </main>
  );
}