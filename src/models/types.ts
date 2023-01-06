import { User } from 'firebase/auth';

export type WordType = {
  id?: string;
  image: string;
  wordText: string;
  wordTextForeign: string;
};

export type CtxAuth = {
  user: User | null;
  loginUser: (email: string, password: string) => Promise<void>;
  logoutUser: () => Promise<void>;
};

export type ContextProps = {
  children: React.ReactNode;
};

export type CtxScore = {
  score: number;
  addScore: () => void;
  resetScore: () => void;
};

export type AddWordType = {
  wordNameEnglish: string;
  wordNameForeign: string;
  wordImage: string;
  wordText?: string;
};

export type { User };
