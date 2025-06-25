import { auth } from "@/lib/firebase/config";
import * as firebaseAuth from "firebase/auth";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail as firebaseSendPasswordResetEmail, // Renamed import
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  UserCredential,
} from "firebase/auth";

export const loginWithGoogle = async (): Promise<UserCredential> => {
  const provider = new GoogleAuthProvider();
  return await signInWithPopup(auth, provider);
};

export async function registerWithEmail(formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  try {
    await createUserWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.error("Registration failed:", error);
  }
}

export async function loginWithEmail(formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.error("Login failed:", error);
  }
}
export async function sendPasswordResetEmail(formData: FormData) {
  const email = formData.get("email") as string;

  try {
    await firebaseAuth.sendPasswordResetEmail(auth, email); // Using namespaced import
  } catch (error) {
    console.error("Password reset failed:", error);
  }
}

export const logout = async (): Promise<void> => {
  await signOut(auth);
};

export { auth };
