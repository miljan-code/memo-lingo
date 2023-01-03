import Login from './Login';
import React, { useState, useContext } from 'react';
import AuthContext from '../context/AuthContext';

interface Props {
  onShow: (show: boolean) => void;
  isShown: boolean;
}

const Navigation: React.FC<Props> = ({ onShow, isShown }) => {
  const [showLogin, setShowLogin] = useState(false);

  const ctx = useContext(AuthContext);

  return (
    <>
      <nav className="flex justify-between bg-secondary p-4 rounded text-black">
        {ctx?.user && (
          <button
            onClick={() => {
              !isShown && onShow(true);
              isShown && onShow(false);
            }}
            className="font-bold border-2 border-primaryLight bg-primaryLight py-2 px-4 rounded text-white"
          >
            {isShown ? 'Close modal' : 'Add Word'}
          </button>
        )}
        {!ctx?.user && (
          <button
            onClick={() => setShowLogin(true)}
            className="font-bold border-2 border-primaryLight bg-primaryLight py-2 px-4 rounded text-white ml-auto"
          >
            Login
          </button>
        )}
        {ctx?.user && (
          <button
            onClick={() => ctx?.logoutUser()}
            className="font-bold border-2 border-primaryLight bg-primaryLight py-2 px-4 rounded text-white ml-auto"
          >
            Logout
          </button>
        )}
      </nav>
      {showLogin && <Login onClose={setShowLogin} />}
    </>
  );
};

export default Navigation;
