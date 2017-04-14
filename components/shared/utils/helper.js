const isArray = (array) => Object.prototype.toString.call(array) === '[object Array]';

const isEqual = (arrayA, arrayB) => {
  for (let i = 0; i < arrayA.length; i++) {
    if (arrayA[i] !== arrayB[i]) {
      return false;
    }
  }
  return true;
};

export default {
  isArray,
  isEqual
};
