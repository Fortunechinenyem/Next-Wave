import { auth } from "@/lib/firebase/config";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  UserCredential,
} from "firebase/auth";

// Google Sign-In
export const loginWithGoogle = async (): Promise<UserCredential> => {
  const provider = new GoogleAuthProvider();
  return await signInWithPopup(auth, provider);
};

// Sign Out
export const logout = async (): Promise<void> => {
  await signOut(auth);
};

// Export auth instance if needed elsewhere
export { auth };
