const isArray = (array) =>
  Object.prototype.toString.call(array) === '[object Array]';

const isEqual = (arrayA, arrayB) => {
  for (let i = 0; i < arrayA.length; i++) {
    if (arrayA[i] !== arrayB[i]) {
      return false;
    }
  }
  return true;
};

const createArray = (length) => new Array(length).join('0').split('');

const findFirstIndex = (options = {}) => {
  const {
    array = [],
    check = item => item,
    getVal = item => item
  } = options;
  let index = -1;
  for (let i = 0; i < array.length; i += 1) {
    const item = array[i];
    const val = getVal(item);
    if (check(val)) {
      index = i;
      break;
    }
  }
  return index;
};

export const checkSameArray = (arrayA, arrayB) => {
  if (arrayA.length !== arrayB.length) return false;
  let same = true;
  for (let i = 0; i < arrayA.length; i += 1) {
    const item = arrayA[i];
    if (!arrayB.filter(i => i === item).length) {
      same = false;
      break;
    }
  }
  return same;
};

export default {
  isArray,
  isEqual,
  createArray,
  checkSameArray,
  findFirstIndex,
};
