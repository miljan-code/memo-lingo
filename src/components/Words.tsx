import Word from './Word';
import { WordType } from '../models/word';
import { shuffle } from '../service/helpers';

const Words: React.FC<{ words: WordType[] }> = ({ words }) => {
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
            foreignWords={words}
          />
        );
      })}
    </div>
  );
};

export default Words;
