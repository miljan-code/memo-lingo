import { useState } from 'react';
import { Logo, Navigation, Words, Loading } from './components';
import AddWord from './components/AddWord';
import Score from './components/Score';
import { useWordsData } from './hooks/useWordsData';

const App = () => {
  const [showAddWord, setShowAddWord] = useState(false);
  const [_, setReset] = useState(false);

  const { data: words, isLoading, isError, error } = useWordsData();
  if (!words) return <Loading />;

  const resetHandler = () => {
    setReset((prev) => !prev);
  };

  return (
    <>
      <header className="max-w-screen-md mx-auto text-center px-10">
        <Logo />
        <Navigation isShown={showAddWord} onShow={setShowAddWord} />
        {showAddWord && <AddWord show={setShowAddWord} />}
      </header>
      <main className="max-w-screen-md mx-auto px-10">
        <Words words={words} />
        <Score
          words={words.map((word) => word.wordTextForeign)}
          reset={resetHandler}
        />
      </main>
    </>
  );
};

export default App;
