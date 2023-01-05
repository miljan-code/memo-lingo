const AddWord = () => {
  const addWordHandler = () => {};

  return (
    <div className="bg-secondary mt-5 rounded">
      <form
        onSubmit={addWordHandler}
        className="h-full flex flex-col gap-5 justify-center items-center p-10"
      >
        <div className="flex flex-col gap-2 text-left">
          <label htmlFor="wordEng">Word name in English</label>
          <input
            type="text"
            name="wordEng"
            id="wordEng"
            className="rounded text-black outline-none px-2"
            placeholder="House"
          />
        </div>
        <div className="flex flex-col gap-2 text-left">
          <label htmlFor="wordForeign">Word name in foreign lang</label>
          <input
            type="text"
            name="wordForeign"
            id="wordForeign"
            className="rounded text-black outline-none px-2"
            placeholder="Casa"
          />
        </div>
        <div className="flex flex-col gap-2 text-left">
          <label htmlFor="wordForeign">Picture URL (optional)</label>
          <input
            type="text"
            name="wordForeign"
            id="wordForeign"
            className="rounded text-black outline-none px-2"
            placeholder="http://example.com/1.png"
          />
        </div>
        <button className="bg-primaryLight text-white px-4 py-2 rounded mt-4">
          Add Word
        </button>
      </form>
    </div>
  );
};

export default AddWord;
