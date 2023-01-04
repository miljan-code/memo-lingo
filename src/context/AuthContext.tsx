import React, { createContext, useState, useEffect } from 'react';
import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { User } from 'firebase/auth';
import { auth } from '../service/firebase-config';

type CTX = {
  user: User | null;
  loginUser: (email: string, password: string) => Promise<void>;
  logoutUser: () => Promise<void>;
};

type AuthContextProps = {
  children: React.ReactNode;
};

const AuthContext = createContext<CTX>({} as CTX);

export const AuthProvider = ({ children }: AuthContextProps) => {
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

export default AuthContext;
