import { join } from './join';

describe('join function', () => {
  it('should return elements with comma seperated if seperator is not specified', () => {
    const MOCK_ARRAY = ['foo', true, 0];
    const EXPECTED_STRING = 'foo,true,0';

    expect(join(MOCK_ARRAY)).toEqual(EXPECTED_STRING);
  });
  //

  it.each`
    mockArray                    | seperator    | expected
    ${[1, 2, 3]}                 | ${' '}       | ${'1 2 3'}
    ${['123', true, false]}      | ${null}      | ${'123nulltruenullfalse'}
    ${['000', false]}            | ${undefined} | ${'000,false'}
    ${[true, false]}             | ${''}        | ${'truefalse'}
    ${[100, 0, -500]}            | ${'-'}       | ${'100-0--500'}
    ${['-', 'foo', 'bar', true]} | ${'foo'}     | ${'-foofoofoobarfootrue'}
  `('should return array with correctly stringified values', ({ mockArray, seperator, expected }) => {
    const joinedString = join(mockArray, seperator);

    expect(joinedString).toEqual(expected);
  });
});
