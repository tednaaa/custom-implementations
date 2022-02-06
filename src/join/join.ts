declare function IJoin<T>(array: T[], seperator?: string): string;

export const join: typeof IJoin = (array, seperator = ',') => {
  let resultString = '';

  for (let index = 0; index < array.length; index++) {
    const item = array[index];
    const stringifyedSeperator = `${seperator}`;
    const isLastItem = index === array.length - 1;

    if (isLastItem) resultString += item;
    else resultString += item + stringifyedSeperator;
  }

  return resultString;
};
