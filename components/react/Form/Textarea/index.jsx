import React, { PropTypes } from 'react';
import cx from 'classnames';
import styles from './textarea.css';
import Validator from '../../../shared/utils/validator';

class Textarea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
      focus: false
    };
    this.onChange = this.onChange.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.onFocus = this.onFocus.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
  }

  onChange() {
    const value = this.textarea.value;
    const { onChange } = this.props;
    onChange && onChange(value);
    const { error } = this.state;
    if (error) {
      this.check();
    }
  }

  onFocus(e) {
    this.setState({ focus: true });
  }

  onBlur(e) {
    this.setState({ focus: false });
    this.check(e);
  }

  onKeyDown(e) {
    const { onKeyDown } = this.props;
    onKeyDown(e);
  }

  check(inputValue) {
    const value = inputValue || this.textarea.value;
    const { type, max } = this.props;
    const error = !Validator[type](value, max);
    this.setState({ error });
  }

  render() {
    const {
      value,
      disabled,
      placeholder
    } = this.props;
    const { focus, error } = this.state;

    const wrapperClass = cx(
      styles["textarea-wrapper"],
      styles["flat"],
      focus && styles["focus"],
      error && styles["error"],
      disabled && styles["disabled"],
    );

    return (
      <div className={wrapperClass}>
        <pre className={styles["textarea-hidden"]}>
          <span>
            {value}
          </span>
          <br/>
        </pre>
        <textarea
          value={value}
          disabled={disabled}
          placeholder={placeholder}
          onChange={this.onChange}
          ref={ref => (this.textarea = ref)}
          className={styles["textarea"]}
          onKeyDown={this.onKeyDown}
          onBlur={this.onBlur}
          onFocus={this.onFocus}
        />
        <div className={styles["textarea-tip"]}>
          已输入{value.length}字
        </div>
      </div>
    );
  }
}

Textarea.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  onKeyDown: PropTypes.func,
  disabled: PropTypes.bool,
};

Textarea.defaultProps = {
  value: '',
  placeholder: '',
  onChange: () => {},
  onKeyDown: () => {},
  disabled: false
};

export default Textarea;
