
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

const getStringWidth = (str) => {
  const cnChars = str.match(/[\u4e00-\u9fa5]/g);
  const enChars = str.match(/[a-zA-Z]/g);
  let smallChars = '';
  try {
    smallChars = str.match(/[_\-.|/,^$!@#%&*()[]\{\}`~:;'"]/g);
  } catch (e) {
    console.error(e);
  }
  const numChars = str.match(/[0-9]/g);
  return cnChars ? cnChars.length : 0 + enChars ? enChars.length : 0 + (smallChars ? smallChars.length : 0) * 1.5 + (numChars ? numChars.length : 0) * 1.1;
};

export default {
  uuid,
  isEqual,
  isFunction,
  createArray,
  checkSameArray,
  findFirstIndex,
  getStringWidth
};
