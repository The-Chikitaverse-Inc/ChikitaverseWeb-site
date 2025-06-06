import { createUserWithEmailAndPassword } from "firebase/auth";
import { signOut } from "firebase/auth";
import { auth } from "./config";

const firebaseSignupErrors = {
  "auth/email-already-in-use": "Este e-mail já está em uso",
  "auth/invalid-email": "E-mail inválido",
  "auth/operation-not-allowed": "Cadastro com e-mail e senha não está habilitado",
  "auth/weak-password": "Senha muito fraca (mínimo de 6 caracteres)",
  "auth/missing-password": "Senha não informada",
  "auth/missing-email": "E-mail não informado",
  "auth/internal-error": "Erro interno. Tente novamente",
  "auth/network-request-failed": "Erro de conexão. Verifique sua internet",
};


export async function userAuth(email, senha) {
    try {
        const createUser = await createUserWithEmailAndPassword(auth, email, senha)
        return { 
            user: createUser.user,
            error: null,
        }
    } catch (error) {
        
      console.error(error.code)
      const errorCode = error.code
      const message = firebaseSignupErrors[errorCode]

      return {
          user: null,
          err: message,
        }
    }
}

//* Log out
export async function exitUser() {
  try {
    await signOut(auth);
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
}