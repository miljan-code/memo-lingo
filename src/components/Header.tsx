import { useState } from 'react';
import { Navigation, Logo, AddWord, How } from './';

const Header = () => {
  const [showAddWord, setShowAddWord] = useState(false);
  const [showHowTo, setShowHowTo] = useState(true);

  return (
    <header className="max-w-screen-md mx-auto text-center px-10">
      <Logo />
      <Navigation isShown={showAddWord} onShow={setShowAddWord} />
      {showAddWord && <AddWord show={setShowAddWord} />}
      {showHowTo && <How showHowTo={setShowHowTo} />}
    </header>
  );
};

export default Header;
