import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import styles from './textarea.css';
import Validator from '../../../shared/utils/validator';

const countWords = val => val.length;

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

  componentDidUpdate(preProps) {
    const { value } = this.props;
    if (value && !preProps.value) {
      this.check(value);
    }
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
    this.check();
    this.setState({ focus: false });
  }

  onKeyDown(e) {
    const { onKeyDown } = this.props;
    onKeyDown(e);
  }

  check(inputValue) {
    const value = inputValue || this.textarea.value;
    const { minLength, maxLength } = this.props;
    const error = !Validator.textarea(value, {
      min: parseInt(minLength, 10),
      max: parseInt(maxLength, 10),
    });
    this.setState({ error });
  }

  render() {
    const {
      value,
      disabled,
      placeholder,
      wordCountTemplate
    } = this.props;
    const { focus, error } = this.state;

    const wrapperClass = cx(
      styles.textareaWrapper,
      styles.flat,
      focus && styles.focus,
      error && styles.error,
      disabled && styles.disabled,
    );

    const wordCount = this.props.wordCount || countWords;

    return (
      <div className={wrapperClass}>
        <pre className={styles.textareaHidden}>
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
          className={styles.textarea}
          onKeyDown={this.onKeyDown}
          onBlur={this.onBlur}
          onFocus={this.onFocus}
        />
        {wordCountTemplate && (
          <div className={styles.textareaTip}>
            {wordCountTemplate.replace('%n', wordCount(value))}
          </div>
        )}
      </div>
    );
  }
}

Textarea.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  wordCount: PropTypes.func,
  onKeyDown: PropTypes.func,
  disabled: PropTypes.bool,
  minLength: PropTypes.number,
  maxLength: PropTypes.number,
  placeholder: PropTypes.string,
  wordCountTemplate: PropTypes.string,
};

Textarea.defaultProps = {
  value: '',
  placeholder: '',
  onChange: () => {},
  onKeyDown: () => {},
  disabled: false,
  minLength: 0,
  maxLength: 999,
  wordCount: null,
  wordCountTemplate: '已输入%n字',
};

export default Textarea;
