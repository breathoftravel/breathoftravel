export const randomNumber = (max = 30) => Math.floor(Math.random() * max)
export const randomHalfNumber = (min = 4, max = 5) => {
  const random = Math.random() * (max - min) + min;
  return Math.round(random * 2) / 2;
};

