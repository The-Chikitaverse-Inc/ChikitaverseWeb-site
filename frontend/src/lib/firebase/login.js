// /lib/firebase/signIn.js
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./config";

const firebaseErrors = {
  "auth/user-not-found": "Usuário não encontrado",
  "auth/wrong-password": "Senha incorreta",
  "auth/invalid-email": "E-mail inválido",
  "auth/user-disabled": "Conta desativada",
  "auth/invalid-credential": "Email ou Senha incorretos"
}

export async function userLogin(email, senha) {
    try {
      const loginUser = await signInWithEmailAndPassword(auth, email, senha)
      return {
        user: loginUser.user,
        error: null,
      }
    } catch (error) {
        
      console.error(error.code)
      const errorCode = error.code
      const message = firebaseErrors[errorCode]

      return {
          user: null,
          err: message,
        }
    }
}