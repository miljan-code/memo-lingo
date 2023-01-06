import Word from './Word';
import { WordType } from '../models/types';
import { shuffle } from '../service/helpers';
import { DocumentData } from 'firebase/firestore';

const Words: React.FC<{ words: DocumentData[] }> = ({ words }) => {
  const foreignWords = shuffle(words.map((word) => word.wordTextForeign));

  return (
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
            foreignWord={word.wordTextForeign}
          />
        );
      })}
    </div>
  );
};

export default Words;
