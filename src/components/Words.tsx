import { shuffle } from '../service/helpers';
import { DocumentData } from 'firebase/firestore';
import { Word } from './';

const Words: React.FC<{ words: DocumentData[] }> = ({ words }) => {
  // shuffle helper functions shuffles array of words so the order will always be different in case for better game experience
  const foreignWords = shuffle(words.map((word) => word.wordTextForeign));

  return (
    <div className="py-5">
      {words.map((word) => {
        // list of possible answers is all the words imported in database
        // displayed words are random three + correct one
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
