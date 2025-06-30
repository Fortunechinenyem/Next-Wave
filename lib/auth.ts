// "use server";

import { auth } from "@/lib/firebase/config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail as firebaseSendPasswordResetEmail,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  UserCredential,
  AuthError,
} from "firebase/auth";

type AuthResponse = {
  success: boolean;
  error?: string;
};

// Google Auth
export const loginWithGoogle = async (): Promise<
  AuthResponse & { user?: UserCredential }
> => {
  try {
    const provider = new GoogleAuthProvider();
    const userCredential = await signInWithPopup(auth, provider);
    return { success: true, user: userCredential };
  } catch (error) {
    const err = error as AuthError;
    return { success: false, error: err.message };
  }
};

// Email/Password Auth - Form Action Version
export async function loginWithEmail(
  formData: FormData
): Promise<AuthResponse> {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  return handleEmailLogin(email, password);
}

// Email/Password Auth - Direct Call Version
export async function loginWithEmailDirect(
  email: string,
  password: string
): Promise<AuthResponse> {
  return handleEmailLogin(email, password);
}

// Shared email login logic
async function handleEmailLogin(
  email: string,
  password: string
): Promise<AuthResponse> {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    return { success: true };
  } catch (error) {
    const err = error as AuthError;
    return { success: false, error: err.message };
  }
}

// Registration - Form Action Version
export async function registerWithEmail(
  formData: FormData
): Promise<AuthResponse> {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  return handleEmailRegistration(email, password);
}

// Registration - Direct Call Version
export async function registerWithEmailDirect(
  email: string,
  password: string
): Promise<AuthResponse> {
  return handleEmailRegistration(email, password);
}

// Shared registration logic
async function handleEmailRegistration(
  email: string,
  password: string
): Promise<AuthResponse> {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    return { success: true };
  } catch (error) {
    const err = error as AuthError;
    return { success: false, error: err.message };
  }
}

// Password Reset
export async function sendPasswordResetEmail(
  formData: FormData
): Promise<AuthResponse> {
  const email = formData.get("email") as string;
  return handlePasswordReset(email);
}

// Password Reset - Direct Call Version
export async function sendPasswordResetEmailDirect(
  email: string
): Promise<AuthResponse> {
  return handlePasswordReset(email);
}

// Shared password reset logic
async function handlePasswordReset(email: string): Promise<AuthResponse> {
  try {
    await firebaseSendPasswordResetEmail(auth, email);
    return { success: true };
  } catch (error) {
    const err = error as AuthError;
    return { success: false, error: err.message };
  }
}

// Logout
export const logout = async (): Promise<AuthResponse> => {
  try {
    await signOut(auth);
    return { success: true };
  } catch (error) {
    const err = error as AuthError;
    return { success: false, error: err.message };
  }
};

export { auth };
