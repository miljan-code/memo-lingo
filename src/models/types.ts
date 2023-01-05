import { User } from 'firebase/auth';

export type WordType = {
  image: string;
  wordText: string;
  wordTextForeign: string;
};

export type CtxAuth = {
  user: User | null;
  loginUser: (email: string, password: string) => Promise<void>;
  logoutUser: () => Promise<void>;
};

export type AuthContextProps = {
  children: React.ReactNode;
};

export type CtxScore = {
  score: number;
  addScore: () => void;
  resetScore: () => void;
};

export type ScoreContextProps = {
  children?: React.ReactNode;
};

export type { User };
