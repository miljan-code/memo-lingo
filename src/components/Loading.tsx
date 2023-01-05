import Logo from './Logo';

const Loading = () => {
  return (
    <>
      <header className="max-w-screen-md mx-auto text-center px-10">
        <Logo />
      </header>
      <main className="max-w-screen-md mx-auto px-10">
        <p>Loading...</p>
      </main>
    </>
  );
};

export default Loading;
