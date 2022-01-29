import { forEach } from './forEach';

const callback = jest.fn(() => {});

describe('forEach function', () => {
  it('should increment the index started from zero', () => {
    const MOCK_ARRAY = [1, 'bar', 3, 4];
    let MOCK_INDEX = 0;

    forEach(MOCK_ARRAY, (_, index) => {
      expect(index).toEqual(MOCK_INDEX);
      MOCK_INDEX++;
    });
  });

  it.each`
    mockArray
    ${[1, 2, 3]}
    ${['foo', 'bar', 'baz']}
    ${[true, 1, () => {}]}
    ${['foo', 'bar', 'baz', 1, true, Symbol('test')]}
  `('should call the callback', ({ mockArray }) => {
    forEach(mockArray, callback);

    expect(callback).toHaveBeenCalled();
    expect(callback).toBeCalledTimes(mockArray.length);
  });

  it.each`
    mockArray
    ${[1, 2, 3]}
    ${['foo', 'bar', 'baz']}
    ${[true, 1, 'smth']}
  `(
    'should correctly return each item index and source array',
    ({ mockArray }) => {
      forEach(mockArray, (_, index, array) => {
        expect(array[index]).toEqual(mockArray[index]);
      });
    }
  );

  it.each`
    mockArray
    ${[1, 2, 3]}
    ${['foo', 'bar', 'baz']}
    ${[true, 1, 'smth']}
  `('should correctly return each item in the array', ({ mockArray }) => {
    forEach(mockArray, (value, index) => {
      expect(mockArray[index]).toEqual(value);
    });
  });
});
