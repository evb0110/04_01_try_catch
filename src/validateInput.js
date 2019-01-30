function validateInput(input) {
  const testRegex = /^[1-9][0-9]*$/;
  const inputString = input.trim();
  if (!testRegex.test(inputString)) throw new TypeError('input should be a valid decimal number');

  return Number(inputString);
}

export default validateInput;
