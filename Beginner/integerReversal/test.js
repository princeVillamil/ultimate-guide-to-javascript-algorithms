const reverseInteger = require('./index-Start');

test('reverseInteger is a function', () => {
  console.log(typeof reverseInteger)
  expect(typeof reverseInteger).toEqual('function');
});

test('The signs must not change i.e -123 becomes -321', () => {
  const reverseIntegerConst = reverseInteger(-123);

  expect(reverseIntegerConst).toEqual(-321);
});

test('All insignificant zeroes must be removed i.e 900 becomes 9 and not 009', () => {
  const reverseIntegerConst = reverseInteger(900);

  expect(reverseIntegerConst).toEqual(9);
});
