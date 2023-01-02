import Login from './Login';
import React, { useState } from 'react';

interface Props {
  onShow: (show: boolean) => void;
  isShown: boolean;
}

const Navigation: React.FC<Props> = ({ onShow, isShown }) => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      <nav className="flex justify-between bg-secondary p-4 rounded text-black">
        <button
          onClick={() => {
            !isShown && onShow(true);
            isShown && onShow(false);
          }}
          className="font-bold border-2 border-primaryLight bg-primaryLight py-2 px-4 rounded text-white"
        >
          {isShown ? 'Close modal' : 'Add Word'}
        </button>
        <button
          onClick={() => setShowLogin(true)}
          className="font-bold border-2 border-primaryLight bg-primaryLight py-2 px-4 rounded text-white"
        >
          Login
        </button>
      </nav>
      {showLogin && <Login onClose={setShowLogin} />}
    </>
  );
};

export default Navigation;
