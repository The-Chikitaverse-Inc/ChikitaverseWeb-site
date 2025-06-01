// /lib/firebase/signIn.js
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./config";

export async function userLogin(email, senha) {
    try {
      const loginUser = await signInWithEmailAndPassword(auth, email, senha)
      return {
        user: loginUser.user,
        error: null,
      }
    } catch (err) {
        return {
          user: null,
          error: err.message,
        }
    }
}