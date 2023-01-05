import { useContext } from 'react';
import { ScoreContext } from '../context/ScoreContext';
import { ScoreProps } from '../models/interface';

const Score: React.FC<ScoreProps> = ({ words, reset }) => {
  const { score, resetScore } = useContext(ScoreContext);

  return (
    <div className="flex gap-5 items-center">
      <button
        className="bg-secondary px-4 py-2 rounded"
        onClick={() => {
          reset();
          resetScore();
        }}
      >
        RESET
      </button>
      <p className="text-white">
        Score: {score}/{words.length}
      </p>
      {score === words.length && <p className="text-white">🔥 Play again?</p>}
    </div>
  );
};

export default Score;
