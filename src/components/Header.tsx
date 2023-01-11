import { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Navigation, Logo, AddWord, How } from './';

const Header = () => {
  const [showAddWord, setShowAddWord] = useState(false);
  const [showHowTo, setShowHowTo] = useState(true);

  const { user } = useContext(AuthContext);

  return (
    <header className="max-w-screen-md mx-auto text-center px-10">
      <Logo />
      <Navigation isShown={showAddWord} onShow={setShowAddWord} />
      {showAddWord && user && <AddWord show={setShowAddWord} />}
      {showHowTo && <How showHowTo={setShowHowTo} />}
    </header>
  );
};

export default Header;
