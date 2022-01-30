import { map } from './map';

describe('map function', () => {
  it.each`
    mockArray                         | expected
    ${[1, 2]}                         | ${['1', '2']}
    ${[true, 0]}                      | ${['true', '0']}
    ${[100, -500, 'true', [1, 2, 3]]} | ${['100', '-500', 'true', '1,2,3']}
  `('should return array with correctly stringified values', ({ mockArray, expected }) => {
    const updatedArray = map(mockArray, (value) => value.toString());

    expect(updatedArray).toEqual(expected);
  });

  it.each`
    mockArray
    ${['fooo', 'test']}
    ${[true, false]}
    ${[100, { foo: 'test' }, 'true', [1, 2, 3]]}
  `('should return the same array if passed to return same value in callback', ({ mockArray }) => {
    const updatedArray = map(mockArray, (value) => value);

    expect(updatedArray).toEqual(mockArray);
  });
});
