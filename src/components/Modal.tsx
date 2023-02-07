import React, { useEffect } from 'react';
import { ModalProps } from '../models/interface';

const Modal: React.FC<ModalProps> = ({ closeModalFn, children }) => {
  useEffect(() => {
    const closeModal: any = (e: KeyboardEvent) => {
      if (e.code === 'Escape') {
        closeModalFn(false);
      }
    };

    window.addEventListener('keydown', closeModal);
    window.scrollTo(0, 0);

    return () => window.removeEventListener('keydown', closeModal);
  }, []);

  return (
    <>
      <div
        onClick={() => closeModalFn(false)}
        className="fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-25 backdrop-blur-sm"
      ></div>
      <div className="absolute top-[50%] left-[50%] z-10 translate-x-[-50%] translate-y-[-50%] rounded bg-primaryDark py-10 px-20 text-white">
        <p
          onClick={() => closeModalFn(false)}
          className="absolute top-0 right-2 cursor-pointer text-5xl"
        >
          &times;
        </p>
        {children}
      </div>
    </>
  );
};

export default Modal;
