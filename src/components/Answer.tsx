import { useEffect, useState, useContext } from 'react';
import { ScoreContext } from '../context/ScoreContext';
import { AuthContext } from '../context/AuthContext';
import { AnswerProps } from '../models/interface';
import { Modal } from './';

const Answer: React.FC<AnswerProps> = ({
  word,
  correctWord,
  isDisabled,
  disable,
  clickedWord,
}) => {
  const [disabledStyle, setDisabledStyle] = useState('');
  const [showWarning, setShowWarning] = useState(false);

  const { addScore } = useContext(ScoreContext);
  const { user } = useContext(AuthContext);

  const pickAnswerHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!user) return setShowWarning(true);
    const targetWord = e.currentTarget.innerHTML;
    disable(targetWord, 'disabled');
    if (targetWord === correctWord) addScore();
  };

  useEffect(() => {
    if (word === correctWord && word === clickedWord)
      setDisabledStyle('disabled:bg-green-700');
    else if (word !== correctWord && word === clickedWord)
      setDisabledStyle('disabled:bg-red-700');
    else setDisabledStyle('disabled:bg-primaryDark');
  }, []);

  return (
    <>
      <button
        onClick={pickAnswerHandler}
        disabled={isDisabled}
        className={`bg-primaryLight ${disabledStyle} px-4 py-2 rounded text-white text-2xl ss:text-[1.6rem] sm:max-w-[150px] sm:min-w-[100px]`}
      >
        {word}
      </button>
      {showWarning && (
        <Modal closeModalFn={setShowWarning}>Please, login first.</Modal>
      )}
    </>
  );
};

export default Answer;
