export const getWord = (string, index) => {
  return string.split(',')[index];
};

export const getCondition = string => {
  return string.split('\n');
};
