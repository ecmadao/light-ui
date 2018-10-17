
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

const strLength = str => str ? str.length : 0;

const getStringWidth = (str) => {
  const cnChars = str.match(/[\u4e00-\u9fa5【】「」“”；：，。‘’（）！？]/g);
  const enChars = str.match(/[a-zA-Z]/g);
  let smallChars = '';
  try {
    smallChars = str.match(/[_\-.|/,^$!?@#%&*()[]\{\}`~:;'"]/g);
  } catch (e) {
    console.error(e);
  }
  const numChars = str.match(/[0-9]/g);
  const others = str.length - strLength(cnChars) - strLength(enChars) - strLength(smallChars) - strLength(numChars);
  return strLength(cnChars) * 1.3 + strLength(enChars) + strLength(smallChars) * 0.8 + strLength(numChars) * 1.1 + others;
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
