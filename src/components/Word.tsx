import React, { useState } from 'react';
import { shuffle } from '../service/helpers';
import Answer from './Answer';

interface Props {
  image: string;
  wordText: string;
  foreignWords: string[];
  correctWord: string;
}

const Word: React.FC<Props> = ({
  image,
  wordText,
  foreignWords,
  correctWord,
}) => {
  const [isDisabled, setIsDisabled] = useState(false);

  const isDisabledHandler = () => {
    setIsDisabled(true);
  };

  return (
    <div className="flex p-5 bg-secondary mb-3 rounded items-center">
      <div className="flex gap-5 items-center w-[200px]">
        <img src={image} alt={wordText} className="w-20 h-20" />
        <h3 className="text-black font-bold">{wordText}</h3>
      </div>
      <div className="flex gap-5 items-center">
        {foreignWords.map((word) => (
          <Answer
            key={crypto.randomUUID()}
            word={word}
            correctWord={correctWord}
            isDisabled={isDisabled}
            disable={isDisabledHandler}
          />
        ))}
      </div>
      <div className="flex ml-auto items-center gap-3">
        <button className="text-[18px] bg-primaryDark text-white h-[30px] w-[30px] rounded inline-flex items-center justify-center">
          &#9998;
        </button>
        <button className="text-[30px] bg-primaryDark text-white h-[30px] w-[30px] rounded inline-flex items-center justify-center pb-1">
          &times;
        </button>
      </div>
    </div>
  );
};

export default Word;
