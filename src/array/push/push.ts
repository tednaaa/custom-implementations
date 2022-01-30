export const push = <T>(array: T[], ...items: any[]): T[] => {
  const updatedArray = [...array, ...items];

  return updatedArray;
};
