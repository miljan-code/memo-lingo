export interface AnswerProps {
  word: string;
  correctWord: string;
  isDisabled: boolean;
  disable: (clicked: string, isDisabled: 'disabled' | 'enable') => void;
  clickedWord: string;
}

export interface LoginProps {
  onClose: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface NavigationProps {
  onShow: (show: boolean) => void;
  isShown: boolean;
}

export interface ScoreProps {
  words: string[];
  reset: () => void;
}

export interface WordProps {
  image: string;
  wordText: string;
  foreignWords: string[];
  correctWord: string;
  foreignWord: string;
}

export interface AddWordProps {
  show: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface EditWordProps {
  showEdit: React.Dispatch<React.SetStateAction<boolean>>;
  word: {
    image: string;
    wordText: string;
    foreignWord: string;
  };
}

export interface DeleteWordProps {
  showDelete: React.Dispatch<React.SetStateAction<boolean>>;
  word: string;
}

export interface ModalProps {
  closeModalFn: React.Dispatch<React.SetStateAction<boolean>>;
  children?: React.ReactNode;
}

export interface HowProps {
  showHowTo: React.Dispatch<React.SetStateAction<boolean>>;
}
