import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { db } from '../service/firebase-config';
import {
  addDoc,
  collection,
  doc,
  getDocs,
  updateDoc,
} from 'firebase/firestore';
import { AddWordType } from '../models/types';

const wordsCollectionRef = collection(db, 'words');

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
    async ({ wordNameEnglish, wordNameForeign, wordImage }: AddWordType) => {
      const wordDoc = doc(db, 'words', wordNameEnglish);
      const fields = await findFields(wordNameEnglish);
      if (!fields) return null;
      fields.wordText = wordNameEnglish;
      fields.wordTextForeign = wordNameForeign;
      fields.image = wordImage;
      await updateDoc(wordDoc, fields);
    },
    {
      onSuccess: () => queryClient.invalidateQueries(['words']),
    }
  );
};
