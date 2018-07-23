

const isEqual = (arrayA, arrayB) => {
  for (let i = 0; i < arrayA.length; i += 1) {
    if (arrayA[i] !== arrayB[i]) {
      return false;
    }
  }
  return true;
};

const createArray = length => new Array(length).join('0').split('');

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

const checkSameArray = (arrayA, arrayB) => {
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

const s4 = () => Math.floor((1 + Math.random()) * 0x10000)
  .toString(16)
  .substring(1);

const uuid = () => s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();

const getType = {};
const isFunction = func =>
  func && getType.toString.call(func) === '[object Function]';

export default {
  uuid,
  isEqual,
  isFunction,
  createArray,
  checkSameArray,
  findFirstIndex,
};
