const capitalize = require('./functions/capitalize');
test('capitalizes first letter of string,', () => {
  expect(capitalize('charisma')).toMatch('Charisma')
});

const reverseString = require('./functions/reverseString');
test('reverse string', () => {
  expect(reverseString('agility')).toMatch('ytiliga')
});

const calculator = require('./functions/calculator');
test('calculator functions', () => {
  expect(calculator.add(1,2)).toBe(3);
  expect(calculator.subtract(4,2)).toBe(2);
  expect(calculator.divide(10,2)).toBe(5);
  expect(calculator.multiply(3,2)).toBe(6);
})

const caesarCipher = require('./functions/caesar-cipher');
test('characters have been shifted', () => {
  expect(caesarCipher('Defend the east wall of the castle!', 1)).toMatch('Efgfoe uif fbtu xbmm pg uif dbtumf!');
  expect(caesarCipher('Defend the east wall of the castle!', 5)).toMatch('Ijkjsi ymj jfxy afqq tk ymj hfxyqj!');
})

const analyzeArray = require('./functions/analyze-array');
const object = {
  average: 4,
  min: 1,
  max: 8,
  length: 6
}
test('array has been analyzed', () => {
  expect(analyzeArray([1,8,3,4,2,6])).toMatchObject(object);
})
