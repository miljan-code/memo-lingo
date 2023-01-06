import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useDeleteWord } from '../hooks/useWordsData';
import { DeleteWordProps } from '../models/interface';
import { Modal } from './';

const DeleteWord: React.FC<DeleteWordProps> = ({ showDelete, word }) => {
  const { mutate: deleteWord } = useDeleteWord();

  const { user } = useContext(AuthContext);

  const deleteWordHandler = () => {
    deleteWord({ word });
  };

  return (
    <Modal closeModalFn={showDelete}>
      {user && (
        <div className="text-center">
          <h3 className="mb-6">Are you sure?</h3>
          <button
            onClick={deleteWordHandler}
            className="bg-secondary text-black py-2 px-6 rounded"
          >
            Yes
          </button>
        </div>
      )}
      {!user && <p>Please login first</p>}
    </Modal>
  );
};

export default DeleteWord;
