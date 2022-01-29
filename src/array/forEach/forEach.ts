declare function IForEach<T>(
  array: T[],
  callback: (value: T, index: number, array: T[]) => void
): void;

export const forEach: typeof IForEach = (array, callback) => {
  for (let index = 0; index < array.length; index++) {
    const value = array[index];

    callback(value, index, array);
  }
};
