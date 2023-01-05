export interface AnswerProps {
  word: string;
  correctWord: string;
  isDisabled: boolean;
  disable: (clicked: string, isDisabled: 'disabled' | 'enable') => void;
  clickedWord: string;
}

export interface LoginProps {
  onClose: (active: boolean) => void;
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
}
