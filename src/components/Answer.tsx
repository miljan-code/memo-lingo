import React, { useEffect, useState, useContext } from 'react';
import { ScoreContext } from '../context/ScoreContext';
import { AnswerProps } from '../models/interface';

const Answer: React.FC<AnswerProps> = ({
  word,
  correctWord,
  isDisabled,
  disable,
  clickedWord,
}) => {
  const { addScore } = useContext(ScoreContext);
  const [disabledStyle, setDisabledStyle] = useState('');

  const pickAnswerHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
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
        className={`bg-primaryLight ${disabledStyle} px-4 py-2 rounded text-white max-w-[150px] sm:min-w-[100px]`}
      >
        {word}
      </button>
    </>
  );
};

export default Answer;
