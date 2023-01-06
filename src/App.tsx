import { useState } from 'react';
import { useWordsData } from './hooks/useWordsData';
import { Words, Loading, Score, Header } from './components';

const App = () => {
  const [_, setReset] = useState(false);

  const { data: words } = useWordsData();
  if (!words) return <Loading />;

  const resetHandler = () => {
    setReset((prev) => !prev);
  };

  return (
    <>
      <Header />
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
