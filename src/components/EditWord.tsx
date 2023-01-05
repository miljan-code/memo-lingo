import React from 'react';
import { EditWordProps } from '../models/interface';

const EditWord: React.FC<EditWordProps> = ({ showEdit }) => {
  return (
    <>
      <div
        onClick={() => showEdit(false)}
        className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center"
      ></div>
      <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] py-10 px-20 bg-primaryDark rounded text-white"></div>
    </>
  );
};

export default EditWord;
