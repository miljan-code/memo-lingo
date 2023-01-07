import { useState } from 'react';
import { WordProps } from '../models/interface';
import { Answer, EditWord, DeleteWord } from './';

const Word: React.FC<WordProps> = ({
  image,
  wordText,
  foreignWords,
  correctWord,
  foreignWord,
}) => {
  const [isDisabled, setIsDisabled] = useState(false);
  const [clickedWord, setClickedWord] = useState('');
  const [showEdit, setShowEdit] = useState(false);
  const [showDelete, setShowDelete] = useState(false);

  const isDisabledHandler = (
    clicked: string,
    isDisabled: 'disabled' | 'enable'
  ) => {
    if (isDisabled === 'disabled') setIsDisabled(true);
    else if (isDisabled === 'enable') setIsDisabled(false);
    setClickedWord(clicked);
  };

  return (
    <div className="flex flex-col sm:flex-row p-5 bg-secondary mb-3 rounded items-center">
      <div className="flex gap-5 items-center sm:w-[200px] mb-5 sm:mb-0">
        <img src={image} alt={wordText} className="w-20 h-20" />
        <h3 className="text-black font-bold">{wordText}</h3>
      </div>
      <div className="flex gap-5 items-center mb-10 sm:mb-0">
        {foreignWords.map((word) => (
          <Answer
            key={crypto.randomUUID()}
            word={word}
            correctWord={correctWord}
            isDisabled={isDisabled}
            disable={isDisabledHandler}
            clickedWord={clickedWord}
          />
        ))}
      </div>
      <div className="flex sm:ml-auto items-center gap-3">
        <button
          onClick={() => setShowEdit(true)}
          className="text-[18px] bg-primaryDark text-white h-[30px] w-[30px] rounded inline-flex items-center justify-center ml-5"
        >
          &#9998;
        </button>
        <button
          onClick={() => setShowDelete(true)}
          className="text-[30px] bg-primaryDark text-white h-[30px] w-[30px] rounded inline-flex items-center justify-center pb-1"
        >
          &times;
        </button>
      </div>
      {showEdit && (
        <EditWord
          word={{ image, wordText, foreignWord }}
          showEdit={setShowEdit}
        />
      )}
      {showDelete && <DeleteWord word={wordText} showDelete={setShowDelete} />}
    </div>
  );
};

export default Word;
