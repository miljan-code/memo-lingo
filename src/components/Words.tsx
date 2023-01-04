import Word from './Word';
import { WordType } from '../models/interface';
import { shuffle } from '../service/helpers';
import { useState } from 'react';

const Words: React.FC<{ words: WordType[] }> = ({ words }) => {
  const [reset, setReset] = useState(false);

  const foreignWords = shuffle(words.map((word) => word.wordTextForeign));

  return (
    <>
      <div className="py-5">
        {words.map((word) => {
          const words = shuffle(
            foreignWords.filter((w) => w !== word.wordTextForeign)
          ).slice(0, 3);
          words.push(word.wordTextForeign);
          return (
            <Word
              key={crypto.randomUUID()}
              image={word.image}
              wordText={word.wordText}
              correctWord={word.wordTextForeign}
              foreignWords={shuffle(words)}
            />
          );
        })}
      </div>
      <p onClick={() => setReset((prev) => !prev)}>RESET</p>
    </>
  );
};

export default Words;
