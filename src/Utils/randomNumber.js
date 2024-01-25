export const randomInt = (min, max) => {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const shortString = (str, num) => {
  return str.length > num ? str.slice(0, num) + " ..." : str;
};
