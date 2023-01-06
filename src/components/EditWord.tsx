import { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useModifyWord } from '../hooks/useWordsData';
import { EditWordProps } from '../models/interface';
import { Modal } from './';

const EditWord: React.FC<EditWordProps> = ({ showEdit, word }) => {
  const [wordNameEnglish, setWordNameEnglish] = useState('');
  const [wordNameForeign, setWordNameForeign] = useState('');
  const [wordImage, setWordImage] = useState('');

  const { mutate: modifyWord } = useModifyWord();

  const { user } = useContext(AuthContext);

  if (!user) return <Modal closeModalFn={showEdit}>Please login first</Modal>;

  const { wordText, image, foreignWord } = word;

  const editWordHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    modifyWord({ wordNameEnglish, wordNameForeign, wordImage, wordText });
    showEdit(false);
  };

  return (
    <Modal closeModalFn={showEdit}>
      <form
        onSubmit={editWordHandler}
        className="h-full flex flex-col gap-5 justify-center items-center p-10"
      >
        <div className="flex flex-col gap-2 text-left">
          <label htmlFor="wordEng">Word name in English</label>
          <input
            type="text"
            name="wordEng"
            id="wordEng"
            className="rounded text-black outline-none px-2"
            placeholder={wordText}
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
            placeholder={foreignWord}
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
            placeholder={image}
            onChange={(e: React.FormEvent<HTMLInputElement>) =>
              setWordImage(e.currentTarget.value)
            }
          />
        </div>
        <button className="bg-primaryLight text-white px-4 py-2 rounded mt-4">
          Edit Word
        </button>
      </form>
    </Modal>
  );
};

export default EditWord;
