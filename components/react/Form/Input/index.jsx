import React, { PropTypes } from 'react';
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

  onBlur() {
    this.check();
    const { onBlur } = this.props;
    onBlur && onBlur();
  }

  onKeyUp() {
    this.check();
    const { onKeyUp } = this.props;
    onKeyUp && onKeyUp();
  }

  check(inputValue) {
    const { type, check } = this.props;
    if (!check) { return }
    const value = inputValue || this.input.value;
    const error = !Validator[type](value) ? true : false;
    this.setState({ error });
  }

  render() {
    const {
      value,
      disabled,
      id,
      style,
      placeholder,
      type,
      theme,
      onFocus,
      onKeyDown,
      className
    } = this.props;
    const { error } = this.state;
    const inputClass = cx(
      styles["input"],
      styles[theme],
      styles[style],
      error && styles["error"],
      className
    );

    return (
      <input
        id={id}
        disabled={disabled}
        type={type}
        value={value}
        className={inputClass}
        onChange={this.onChange}
        onKeyDown={onKeyDown}
        onBlur={this.onBlur}
        onKeyUp={this.onKeyUp}
        onFocus={onFocus}
        placeholder={placeholder}
        ref={ref => this.input = ref}
      />
    )
  }
}

Input.propTypes = {
  disabled: PropTypes.bool,
  check: PropTypes.bool,
  value: PropTypes.string,
  style: PropTypes.string,
  className: PropTypes.string,
  id: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  theme: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  onKeyUp: PropTypes.func,
  onFocus: PropTypes.func,
  onKeyDown: PropTypes.func,
};

Input.defaultProps = {
  disabled: false,
  value: '',
  check: true,
  style: '',
  className: '',
  id: '',
  placeholder: '',
  type: 'string',
  theme: 'material',
  onChange: () => {},
  onBlur: () => {},
  onKeyUp: () => {},
  onFocus: () => {},
  onKeyDown: () => {}
}

export default Input;
