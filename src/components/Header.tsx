import { useState } from 'react';
import Navigation from './Navigation';
import Logo from './Logo';
import AddWord from './AddWord';

const Header = () => {
  const [showAddWord, setShowAddWord] = useState(false);

  return (
    <header className="max-w-screen-md mx-auto text-center px-10">
      <Logo />
      <Navigation isShown={showAddWord} onShow={setShowAddWord} />
      {showAddWord && <AddWord show={setShowAddWord} />}
    </header>
  );
};

export default Header;
