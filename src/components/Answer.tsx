import React, { useEffect, useState } from 'react';

interface Props {
  word: string;
  correctWord: string;
  isDisabled: boolean;
  disable: (clicked: string, isDisabled: 'disabled' | 'enable') => void;
  clickedWord: string;
}

const Answer: React.FC<Props> = ({
  word,
  correctWord,
  isDisabled,
  disable,
  clickedWord,
}) => {
  const [disabledStyle, setDisabledStyle] = useState('');

  const pickAnswerHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    disable(e.currentTarget.innerHTML, 'disabled');
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
