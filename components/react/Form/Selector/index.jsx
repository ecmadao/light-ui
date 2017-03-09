import React, { PropTypes } from 'react';
import cx from 'classnames';
import styles from './selector.css';

const ARROW_DOWN = (
<svg width="11px" height="7px" viewBox="712 206 11 7" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <polygon id="Triangle-1-Copy" stroke="none" fill="" fillRule="evenodd" transform="translate(717.500000, 209.500000) scale(1, -1) translate(-717.500000, -209.500000) " points="717.5 206 723 213 712 213"></polygon>
</svg>
);

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
      )
    })
  }

  get currentValue() {
    const { value, options } = this.props;
    const filtered = options.filter(option => option.id == value);
    if (!filtered.length) {
      return options[0].value;
    }
    return filtered[0].value;
  }

  render() {
    const { value, theme, className, disabled } = this.props;
    const containerClass = cx(
      styles["selector-container"],
      styles[theme],
      disabled && styles['selector-disabled'],
      className
    );
    const onChange = disabled ? () => {} : this.onChange;
    return (
      <div className={containerClass}>
        {this.currentValue}&nbsp;&nbsp;&nbsp;<i className="fa fa-caret-down" aria-hidden="true"></i>
        <select
          value={value}
          onChange={onChange}
          className={styles["selector"]}
          ref={ref => this.selector = ref}>
          {this.renderOptions()}
        </select>
      </div>
    )
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
  onChange: () => {},
  className: '',
  disabled: false
}

export default Selector;
