import { createUserWithEmailAndPassword } from "firebase/auth";
import { signOut } from "firebase/auth";
import { auth } from "./config";

export async function userAuth(email, senha) {
    try {
        const createUser = await createUserWithEmailAndPassword(auth, email, senha)
        return { 
            user: createUser.user,
            error: null,
        }
    } catch (err) {
        return { 
            user: null,
            error: err.message
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