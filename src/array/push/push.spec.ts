import { push } from './push';

describe('push function', () => {
  it.each`
    mockArray               | newElementsArray                                                | expectedLength
    ${[true, false, 'foo']} | ${[{ foo: 'bar', bar: 'baz' }, [1, 2, 3]]}                      | ${5}
    ${[1, 2, 3, 4]}         | ${[1, false, 'foo', () => {}, Symbol('test'), { foo: 'test' }]} | ${10}
  `('should add items from the end of array', ({ mockArray, newElementsArray, expectedLength }) => {
    const updatedArray = [...mockArray, ...newElementsArray];

    expect(push(mockArray, ...newElementsArray)).toEqual(updatedArray);
    expect(updatedArray.length).toEqual(expectedLength);
  });
});
