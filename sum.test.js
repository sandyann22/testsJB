const calcul = require('./sum');
const myMocks= require('./__mocks__/sum');

test('adds 1 + 2 to equal 3', () => {
  expect(calcul.sum(1, myMocks.two)).toBe(3);
});

test('soustracts 3 - 1 to equal 2', () => {
  expect(calcul.sous(3, 1)).toBe(2);
});

test('multiplies 2 * 4 to equal 8', () => {
  expect(calcul.multi(2, 4)).toBe(8);
});

test('devides 10 / 5 to equal 2', () => {
  expect(calcul.divis(10, 5)).toBe(2);
});