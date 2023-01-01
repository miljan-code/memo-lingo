import React, { useState } from 'react';

interface Props {
  word: string;
  correctWord: string;
  isDisabled: boolean;
  disable: () => void;
}

const Answer: React.FC<Props> = ({
  word,
  correctWord,
  isDisabled,
  disable,
}) => {
  const [isAnswered, setIsAnswered] = useState(false);

  const pickAnswerHandler = async (e: React.MouseEvent): Promise<void> => {
    if (correctWord === e.currentTarget.innerHTML) {
      setIsAnswered(true);
      disable();
    } else {
      disable();
    }
  };

  return (
    <button
      key={crypto.randomUUID()}
      onClick={pickAnswerHandler}
      className={`bg-primaryLight disabled:bg-primaryDark px-4 py-2 rounded text-white max-w-[150px] sm:min-w-[100px] ${
        isAnswered && word === correctWord ? 'bg-green-700' : ''
      }`}
      disabled={isDisabled}
    >
      {word}
    </button>
  );
};

export default Answer;
