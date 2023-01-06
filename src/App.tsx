import { useState } from 'react';
import { Words, Loading } from './components';
import Score from './components/Score';
import { useWordsData } from './hooks/useWordsData';
import Header from './components/Header';

const App = () => {
  const [_, setReset] = useState(false);

  const { data: words, isLoading, isError, error } = useWordsData();
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
