import { useState, useContext } from 'react';
import { Logo, Navigation, Words } from './components';
import AddWord from './components/AddWord';
import { WordType } from './models/interface';
import AuthContext from './context/AuthContext';

const DUMMY_WORDS: WordType[] = [
  {
    image: 'https://smkhelmets.com/wp-content/uploads/2022/11/5-4.png',
    wordText: 'Helmet',
    wordTextForeign: 'Casco',
  },
  {
    image:
      'https://iconarchive.com/download/i107732/google/noto-emoji-travel-places/42697-fire.ico',
    wordText: 'Fire',
    wordTextForeign: 'Fuego',
  },
  {
    image:
      'https://static.wikia.nocookie.net/pixel-gun-3d/images/d/d7/Pixel_Gun.png',
    wordText: 'Gun',
    wordTextForeign: 'Pistola',
  },
  {
    image:
      'https://www.pngall.com/wp-content/uploads/2016/07/Sun-Download-PNG.png',
    wordText: 'Sun',
    wordTextForeign: 'Sol',
  },
  {
    image:
      'https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/soccer-ball_26bd.png',
    wordText: 'Ball',
    wordTextForeign: 'Bola',
  },
  {
    image:
      'https://static.wikia.nocookie.net/play-rust/images/9/96/Paper_icon.png',
    wordText: 'Paper',
    wordTextForeign: 'Papel',
  },
  {
    image:
      'https://static.wikia.nocookie.net/scum_gamepedia_en/images/5/59/Cucumber.png',
    wordText: 'Cucumber',
    wordTextForeign: 'Pepino',
  },
];

const App = () => {
  const [words, setWords] = useState<WordType[]>(DUMMY_WORDS);
  const [showAddWord, setShowAddWord] = useState(false);

  return (
    <>
      <header className="max-w-screen-md mx-auto text-center px-10">
        <Logo />
        <Navigation isShown={showAddWord} onShow={setShowAddWord} />
        {showAddWord && <AddWord />}
      </header>
      <main className="max-w-screen-md mx-auto px-10">
        <Words words={words} />
      </main>
    </>
  );
};

export default App;
