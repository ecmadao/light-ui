import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import styles from './input.css';
import Validator from '../../../shared/utils/validator';

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false
    };

    this.onChange = this.onChange.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.onKeyUp = this.onKeyUp.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
    this.onFocus = this.onFocus.bind(this);
  }

  componentDidMount() {
    const { autoFocus } = this.props;
    autoFocus && this.input.focus();
  }

  componentDidUpdate(preProps) {
    const { value } = this.props;
    if (value && !preProps.value) {
      this.check(value);
    }
  }

  onChange() {
    const value = this.input.value;
    const { onChange } = this.props;
    onChange && onChange(value);
    const { error } = this.state;
    if (error) {
      this.check();
    }
  }

  onBlur(e) {
    this.check();
    const value = this.input.value;
    const { onBlur } = this.props;
    onBlur && onBlur(value);
  }

  onKeyDown(e) {
    const { onKeyDown } = this.props;
    onKeyDown && onKeyDown(e);
  }

  onKeyUp(e) {
    this.check();
    const { onKeyUp } = this.props;
    onKeyUp && onKeyUp(e);
  }

  onFocus(e) {
    const { onFocus } = this.props;
    onFocus && onFocus(e);
  }

  check(inputValue) {
    const { type, required, validator, validateOptions } = this.props;
    if (!required) return;

    const value = inputValue || this.input.value;
    try {
      const error = validator
        ? !validator(value)
        : !Validator[type](value, validateOptions);
      this.setState({ error });
    } catch (e) {
      console.error(e);
    }
  }

  render() {
    const {
      id,
      type,
      theme,
      style,
      value,
      subTheme,
      required,
      disabled,
      className,
      placeholder
    } = this.props;
    const { error } = this.state;
    const inputClass = cx(
      styles.input,
      styles[theme],
      styles[subTheme],
      required && error && styles.error,
      disabled && styles.disabled,
      className
    );

    return (
      <input
        id={id}
        type={type}
        value={value}
        style={style}
        required={required}
        disabled={disabled}
        onBlur={this.onBlur}
        onKeyUp={this.onKeyUp}
        onFocus={this.onFocus}
        className={inputClass}
        onChange={this.onChange}
        placeholder={placeholder}
        onKeyDown={this.onKeyDown}
        ref={ref => (this.input = ref)}
      />
    );
  }
}

Input.propTypes = {
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  autoFocus: PropTypes.bool,
  value: PropTypes.string,
  style: PropTypes.object,
  validateOptions: PropTypes.object,
  className: PropTypes.string,
  id: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  theme: PropTypes.string,
  subTheme: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  onKeyUp: PropTypes.func,
  onFocus: PropTypes.func,
  onKeyDown: PropTypes.func,
  validator: PropTypes.func,
};

Input.defaultProps = {
  required: true,
  disabled: false,
  autoFocus: false,
  value: '',
  style: {},
  validateOptions: {},
  validator: null,
  className: '',
  id: '',
  placeholder: '',
  type: 'string',
  theme: 'material',
  subTheme: '',
  onChange: Function.prototype,
  onBlur: Function.prototype,
  onKeyUp: Function.prototype,
  onFocus: Function.prototype,
  onKeyDown: Function.prototype
};

export default Input;
