export const shuffle = (arr: string[]): string[] => {
  let currentIndex = arr.length;
  let randomIndex: number;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [arr[currentIndex], arr[randomIndex]] = [
      arr[randomIndex],
      arr[currentIndex],
    ];
  }

  return arr;
};

export const timeout = (sec: number) =>
  new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, sec * 1000);
  });
