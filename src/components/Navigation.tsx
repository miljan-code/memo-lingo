import React from 'react';

interface Props {}

const Navigation: React.FC<Props> = () => {
  return (
    <nav className="flex justify-between bg-secondary p-4 rounded text-black">
      <button className="font-bold border-2 border-primaryLight bg-primaryLight py-2 px-4 rounded text-white">
        Add Word
      </button>
      <button className="font-bold border-2 border-primaryLight bg-primaryLight py-2 px-4 rounded text-white">
        Login
      </button>
    </nav>
  );
};

export default Navigation;
