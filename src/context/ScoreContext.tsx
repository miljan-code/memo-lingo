import { createContext, useState } from 'react';
import { CtxScore, ScoreContextProps } from '../models/types';

export const ScoreContext = createContext<CtxScore>({} as CtxScore);

export const ScoreProvider = ({ children }: ScoreContextProps) => {
  const [score, setScore] = useState(0);

  const addScore = () => {
    setScore((prevScore) => prevScore + 1);
  };

  const resetScore = () => {
    setScore(0);
  };

  const ctxData = { score, addScore, resetScore };

  return (
    <ScoreContext.Provider value={ctxData}>{children}</ScoreContext.Provider>
  );
};
