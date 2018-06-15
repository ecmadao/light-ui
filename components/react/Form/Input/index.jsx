import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
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
    const { onBlur } = this.props;
    onBlur && onBlur(e);
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
    const { type, required, validate } = this.props;
    if (!required) return;

    const value = inputValue || this.input.value;
    try {
      const error = !Validator[type](value, validate);
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
        required={required}
        disabled={disabled}
        type={type}
        value={value}
        className={inputClass}
        onChange={this.onChange}
        onKeyDown={this.onKeyDown}
        onBlur={this.onBlur}
        onKeyUp={this.onKeyUp}
        onFocus={this.onFocus}
        placeholder={placeholder}
        ref={ref => (this.input = ref)}
        style={style}
      />
    );
  }
}

Input.propTypes = {
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  value: PropTypes.string,
  style: PropTypes.object,
  validate: PropTypes.object,
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
};

Input.defaultProps = {
  disabled: false,
  value: '',
  required: true,
  style: {},
  validate: {},
  className: '',
  id: '',
  placeholder: '',
  type: 'string',
  theme: 'material',
  subTheme: '',
  onChange: () => {},
  onBlur: () => {},
  onKeyUp: () => {},
  onFocus: () => {},
  onKeyDown: () => {}
};

export default Input;
