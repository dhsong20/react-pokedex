// helper function that add's leading zeros to get to hundred's place
export const zeroPad = (number, places) => {
  number = number.toString();
  while (number.length < places) {
    number = "0" + number;
  }
  return number;
};
