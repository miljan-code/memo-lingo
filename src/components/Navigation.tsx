import { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { NavigationProps } from '../models/interface';
import { Login } from './';

const Navigation: React.FC<NavigationProps> = ({ onShow, isShown }) => {
  const [showLogin, setShowLogin] = useState(false);

  const { user, logoutUser } = useContext(AuthContext);

  return (
    <>
      <nav className="flex justify-between bg-secondary p-4 rounded text-black">
        {user && (
          <button
            onClick={() => {
              !isShown && onShow(true);
              isShown && onShow(false);
            }}
            className="font-bold border-2 border-primaryLight bg-primaryLight py-2 px-4 rounded text-white"
          >
            {isShown ? 'Close form' : 'Add Word'}
          </button>
        )}
        {!user && (
          <button
            onClick={() => setShowLogin(true)}
            className="font-bold border-2 border-primaryLight bg-primaryLight py-2 px-4 rounded text-white ml-auto"
          >
            Login
          </button>
        )}
        {user && (
          <button
            onClick={() => logoutUser()}
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
