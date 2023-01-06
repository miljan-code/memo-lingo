import { useState } from 'react';
import { useAddWords } from '../hooks/useWordsData';
import { AddWordProps } from '../models/interface';

const AddWord: React.FC<AddWordProps> = ({ show }) => {
  const [wordNameEnglish, setWordNameEnglish] = useState('');
  const [wordNameForeign, setWordNameForeign] = useState('');
  const [wordImage, setWordImage] = useState('');

  const { mutate: addWords } = useAddWords();

  const addWordHandler = (e: React.FormEvent) => {
    e.preventDefault();
    if (wordNameEnglish && wordImage && wordNameForeign) {
      addWords({ wordNameEnglish, wordNameForeign, wordImage });
      show(false);
    }
  };

  return (
    <div className="bg-secondary mt-5 rounded">
      <form
        onSubmit={addWordHandler}
        className="h-full flex flex-col gap-5 justify-center items-center p-10"
      >
        <div className="flex flex-col gap-2 text-left">
          <label htmlFor="wordEng">Word name in English</label>
          <input
            type="text"
            name="wordEng"
            id="wordEng"
            className="rounded text-black outline-none px-2"
            placeholder="House"
            onChange={(e: React.FormEvent<HTMLInputElement>) =>
              setWordNameEnglish(e.currentTarget.value)
            }
          />
        </div>
        <div className="flex flex-col gap-2 text-left">
          <label htmlFor="wordForeign">Word name in foreign lang</label>
          <input
            type="text"
            name="wordForeign"
            id="wordForeign"
            className="rounded text-black outline-none px-2"
            placeholder="Casa"
            onChange={(e: React.FormEvent<HTMLInputElement>) =>
              setWordNameForeign(e.currentTarget.value)
            }
          />
        </div>
        <div className="flex flex-col gap-2 text-left">
          <label htmlFor="wordForeign">Picture URL (optional)</label>
          <input
            type="text"
            name="wordForeign"
            id="wordForeign"
            className="rounded text-black outline-none px-2"
            placeholder="http://example.com/1.png"
            onChange={(e: React.FormEvent<HTMLInputElement>) =>
              setWordImage(e.currentTarget.value)
            }
          />
        </div>
        <button className="bg-primaryLight text-white px-4 py-2 rounded mt-4">
          Add Word
        </button>
      </form>
    </div>
  );
};

export default AddWord;
