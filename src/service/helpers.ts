export const shuffle = (arr: string[]): string[] => {
  for (let i = arr.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[randomIndex]] = [arr[randomIndex], arr[i]];
  }
  return arr;
};

export const timeout = (sec: number) =>
  new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, sec * 1000);
  });
