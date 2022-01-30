declare function IMap<T, U>(array: T[], callback: (value: T, index: number, array: T[]) => U): U[];

export const map: typeof IMap = (array, callback) => {
  const resultArray = [];

  for (let index = 0; index < array.length; index++) {
    const value = array[index];

    const transformedValue = callback(value, index, array);

    resultArray[index] = transformedValue;
  }

  return resultArray;
};
