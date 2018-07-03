
import validator from 'validator';

const email = (value, options = {}) => validator.isEmail(value);

const phone = (value, options = {}) => validator.isMobilePhone(value, options.local || 'zh-CN');

const empty = (value, options = {}) => validator.isEmpty(value);

const number = (value, options = {}) => validator.isInt(value, {
  min: parseInt(options.min || 0, 10),
  max: parseInt(options.max || 99999, 10)
});

const url = (value, options = {}) => validator.isURL(value);

const string = (value, options = {}) => validator.isByteLength(value, {
  min: parseInt(options.min || 1, 10),
  max: parseInt(options.max || 999, 10),
});

const textarea = (value, options = {}) => validator.isByteLength(value, {
  min: options.min,
  max: options.max
});

export default {
  url,
  email,
  phone,
  empty,
  string,
  number,
  textarea,
};
