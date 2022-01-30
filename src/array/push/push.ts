export const push = <T>(array: T[], ...items: any[]): number => {
  const arrayLength = array.length;

  for (let index = 0; index < items.length; index++) {
    const value = items[index];

    array[index + arrayLength] = value;
  }
  return arrayLength;
};
