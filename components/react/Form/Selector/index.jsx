import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

import styles from './selector.css';
import icons from '../../../shared/utils/icons';

class Selector extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange() {
    const value = this.selector.value;
    const { onChange } = this.props;
    onChange && onChange(value);
  }

  renderOptions() {
    const { options } = this.props;
    return options.map((option, index) => {
      const { id, value } = option;
      return (
        <option key={index} value={id}>
          {value}
        </option>
      );
    });
  }

  get currentValue() {
    const { value, options } = this.props;
    const filtered = options.filter(option => option.id === value);
    if (!filtered.length) {
      return options[0].value;
    }
    return filtered[0].value;
  }

  render() {
    const { value, theme, className, disabled } = this.props;
    const containerClass = cx(
      styles.selectorContainer,
      styles[theme],
      disabled && styles.selectorDisabled,
      className
    );
    const onChange = disabled ? Function.prototype : this.onChange;
    return (
      <div className={containerClass}>
        {this.currentValue}&nbsp;&nbsp;&nbsp;{icons.down}
        <select
          value={value}
          onChange={onChange}
          className={styles.selector}
          ref={ref => (this.selector = ref)}>
          {this.renderOptions()}
        </select>
      </div>
    );
  }
}

Selector.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  theme: PropTypes.string,
  className: PropTypes.string,
  onChange: PropTypes.func,
  options: PropTypes.array,
  disabled: PropTypes.bool
};

Selector.defaultProps = {
  value: '',
  theme: 'material',
  options: [],
  onChange: Function.prototype,
  className: '',
  disabled: false
};

export default Selector;
