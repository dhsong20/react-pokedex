export const zeroPad = (number, places) => {
  number = number.toString()
  while (number.length < places) {
    number = "0" + number
  }
  return number
}