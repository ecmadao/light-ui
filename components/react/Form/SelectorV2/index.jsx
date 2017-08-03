import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import icons from '../../../shared/utils/icons';
import styles from './selector_v2.css';
import Option from './Option';
import OutsideClickHandler from './OutsideClickHandler';

class SelectorV2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
    this.onChange = this.onChange.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
    this.handleActiveChange = this.handleActiveChange.bind(this);
  }

  onChange(val) {
    const { onChange } = this.props;
    onChange && onChange(val);
    this.handleOutsideClick();
  }

  handleOutsideClick() {
    this.handleActiveChange(false);
  }

  handleActiveChange(active) {
    this.setState({ active });
  }

  renderOptions() {
    const { options, value } = this.props;
    const optionComponents = options.map((option, index) => {
      const { id } = option;
      return (
        <Option
          key={index}
          id={id}
          value={option.value}
          onClick={this.onChange}
          isActive={id === value}
        />
      );
    });

    return (
      <div className={styles['options-wrapper']}>
        {optionComponents}
      </div>
    );
  }

  get maxLengthValue() {
    const { options } = this.props;
    let maxValue = (options[0] && options[0].text) || '';
    options.forEach((option) => {
      if (option.value.length > maxValue.length) { maxValue = option.value; }
    });
    return maxValue;
  }

  render() {
    const { active } = this.state;
    const { value, options, theme, color, className, disabled } = this.props;
    const maxLengthValue = this.maxLengthValue;

    const targetOptions = options.filter(option => option.id === value);
    const targetValue = (targetOptions[0] && targetOptions[0].value) || '';
    const containerClass = cx(
      styles['selector-container'],
      styles[`selector-${color}`],
      styles[theme],
      active && styles['selector-container-active'],
      disabled && styles['selector-disabled'],
      className
    );

    const onClick = disabled ? () => {} : () => this.handleActiveChange(true);

    return (
      <div
        className={containerClass}
        onClick={onClick}>
        <OutsideClickHandler
          onOutsideClick={this.handleOutsideClick}>
          <div className={styles.wrapper}>
            <div className={styles['value-wrapper']}>
              <span className={styles['value']}>{targetValue}</span>
              <span className={styles['value-hidden']}>{maxLengthValue}</span>
            </div>
            &nbsp;&nbsp;&nbsp;{icons.down}
          </div>
          {this.renderOptions()}
        </OutsideClickHandler>
      </div>
    );
  }
}

SelectorV2.propTypes = {
  options: PropTypes.array,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  onChange: PropTypes.func,
  theme: PropTypes.string,
  color: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
};

SelectorV2.defaultProps = {
  options: [],
  onChange: () => {},
  theme: 'material',
  color: 'green',
  className: '',
  disabled: false
};

export default SelectorV2;
