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

export default {
  isArray,
  isEqual,
  createArray,
  findFirstIndex,
};
