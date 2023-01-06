import { createContext, useState, useEffect } from 'react';
import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { CtxAuth, ContextProps, User } from '../models/types';
import { auth } from '../service/firebase-config';

export const AuthContext = createContext<CtxAuth>({} as CtxAuth);

export const AuthProvider = ({ children }: ContextProps) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => setUser(currentUser));
  }, []);

  const loginUser = async (email: string, password: string) => {
    await signInWithEmailAndPassword(auth, email, password);
  };

  const logoutUser = async () => {
    await signOut(auth);
  };

  const ctxData = { user, loginUser, logoutUser };

  return (
    <AuthContext.Provider value={ctxData}>{children}</AuthContext.Provider>
  );
};
