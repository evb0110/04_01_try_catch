import validateInput from './validateInput';

test('testing numeric input, should be ok', () => {
  const input = '555';
  const makeOutput = () => validateInput(input);
  expect(makeOutput()).toBe(555);
});

test('starting and trailing whitespace is ok', () => {
  const input = ' 26    ';
  const makeOutput = () => validateInput(input);
  expect(makeOutput()).toBe(26);
});

test('a hexadecimal number should throw an error', () => {
  const input = '0xabc';
  const makeOutput = () => validateInput(input);
  expect(makeOutput).toThrow();
});


test('an octal number should throw an error', () => {
  const input = '0o13';
  const makeOutput = () => validateInput(input);
  expect(makeOutput).toThrow();
});

test('a float should throw an error', () => {
  const input = '5.5';
  const makeOutput = () => validateInput(input);
  expect(makeOutput).toThrow();
});

test('zero should throw an error', () => {
  const input = '0';
  const makeOutput = () => validateInput(input);
  expect(makeOutput).toThrow();
});


test('a negative number should throw an error', () => {
  const input = '-5';
  const makeOutput = () => validateInput(input);
  expect(makeOutput).toThrow();
});
