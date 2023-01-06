import { HowProps } from '../models/interface';

const How: React.FC<HowProps> = ({ showHowTo }) => {
  return (
    <div className="mt-5 relative bg-secondary rounded text-left pl-20 pt-5 pb-5">
      <p className="absolute top-2 left-2 bg-red-800 rounded-full px-[1px]">
        &#10069;
      </p>
      <p
        onClick={() => showHowTo(false)}
        className="absolute top-0 right-2 text-5xl cursor-pointer"
      >
        &times;
      </p>
      <h3 className="text-center text-4xl mb-5">How To Use This App</h3>
      <p className="mb-5">
        This app will help you to memorize words in foreign languages. All you
        need to do is add recently learned word by using Add Word button. You
        will be prompted to enter word name in your native language (e.g.
        English), translation of that word in foreign language and image. Study
        tells that memorizing words is way easier if you associate them with
        images!
      </p>
      <p>
        Next step is to come back to this app every day and try to answer all
        the questions correctly! Maybe even a few times a day if you are
        ambitious! ;)
      </p>
    </div>
  );
};

export default How;
