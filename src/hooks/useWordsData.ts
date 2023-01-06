import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { db } from '../service/firebase-config';
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from 'firebase/firestore';
import { AddWordType } from '../models/types';

export const wordsCollectionRef = collection(db, 'words');

const fetchWordsData = async () => {
  const data = await getDocs(wordsCollectionRef);
  return data.docs.map((doc) => doc.data());
};

const findFields = async (wordName: string) => {
  const data = await getDocs(wordsCollectionRef);
  return data.docs
    .map((doc) => doc.data())
    .find((word) => word.wordText === wordName);
};

const findId = async (wordName: string) => {
  const data = await getDocs(wordsCollectionRef);
  const docs: any = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  const desiredId: string = docs.find(
    (word: any) => word.wordText === wordName
  ).id;
  return desiredId;
};

export const useWordsData = () => useQuery(['words'], fetchWordsData);

export const useAddWords = () => {
  const queryClient = useQueryClient();
  return useMutation(
    ({ wordNameEnglish, wordNameForeign, wordImage }: AddWordType) =>
      addDoc(wordsCollectionRef, {
        wordText: wordNameEnglish,
        wordTextForeign: wordNameForeign,
        image: wordImage,
      }),
    {
      onSuccess: () => queryClient.invalidateQueries(['words']),
    }
  );
};

export const useModifyWord = () => {
  const queryClient = useQueryClient();
  return useMutation(
    async ({
      wordNameEnglish,
      wordNameForeign,
      wordImage,
      wordText,
    }: AddWordType) => {
      if (!wordText) return;
      const id = await findId(wordText);
      const wordDoc = doc(db, 'words', id);
      const fields = await findFields(wordText);

      if (!fields) return null;

      if (wordNameEnglish) fields.wordText = wordNameEnglish;
      if (wordNameForeign) fields.wordTextForeign = wordNameForeign;
      if (wordImage) fields.image = wordImage;

      await updateDoc(wordDoc, fields);
    },
    {
      onSuccess: () => queryClient.invalidateQueries(['words']),
    }
  );
};

export const useDeleteWord = () => {
  const queryClient = useQueryClient();
  return useMutation(
    async ({ word }: { word: string }) => {
      const id = await findId(word);
      deleteDoc(doc(db, 'words', id));
    },
    { onSuccess: () => queryClient.invalidateQueries(['words']) }
  );
};
