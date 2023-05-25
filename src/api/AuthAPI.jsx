import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebaseConfig'

export const LoginAPI = (email, password) => {
  try {
    let res = signInWithEmailAndPassword(auth, email, password)
  }
  catch(e) {
    return e
  }
}