import React, { useEffect } from 'react';
import { ModalProps } from '../models/interface';

const Modal: React.FC<ModalProps> = ({ closeModalFn, children }) => {
  useEffect(() => {
    const closeModal = (e: KeyboardEvent) => {
      if (e.code === 'Escape') {
        closeModalFn(false);
      }
    };
    window.addEventListener('keydown', closeModal);
    return () => window.removeEventListener('keydown', closeModal);
  }, []);

  return (
    <>
      <div
        onClick={() => closeModalFn(false)}
        className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center"
      ></div>
      <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] py-10 px-20 bg-primaryDark rounded text-white">
        <p
          onClick={() => closeModalFn(false)}
          className="absolute top-0 right-2 text-5xl cursor-pointer"
        >
          &times;
        </p>
        {children}
      </div>
    </>
  );
};

export default Modal;
