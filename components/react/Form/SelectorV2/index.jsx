import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import icons from '../../../shared/utils/icons';
import styles from './selector_v2.css';
import Option from './Option';
import OutsideClickHandler from '../../Others/OutsideClickHandler';

class SelectorV2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
    this.minWidth = 0;
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
    const { value, options, optionClassName } = this.props;
    const optionComponents = options.map((option, index) => {
      const { id } = option;
      return (
        <Option
          id={id}
          key={index}
          value={option.value}
          onClick={this.onChange}
          disabled={option.disabled}
          isActive={id === value}
          className={optionClassName}
        />
      );
    });

    return (
      <div
        className={styles['options-container']}
        style={{ minWidth: `${this.selectorWidth}px` }}
      >
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

  renderSelected() {
    const {
      value,
      options,
      flexable,
      selectedClassName,
    } = this.props;

    const targetOptions = options.filter(option => option.id === value);
    const targetValue = (targetOptions[0] && targetOptions[0].value) || '';

    if (!flexable) {
      const maxLengthValue = this.maxLengthValue;
      return (
        <div className={cx(styles['value-wrapper'], selectedClassName)}>
          <span className={styles['value']}>{targetValue}</span>
          <span className={styles['value-hidden']}>{maxLengthValue}</span>
        </div>
      );
    }

    return (
      <div className={cx(styles['value-wrapper'], selectedClassName)}>
        {targetValue}
      </div>
    );
  }

  get selectorWidth() {
    if (!this.minWidth) {
      const { optionClassName } = this.props;
      const tmpClassName = cx(styles.option, optionClassName, styles['option-hidden']);
      const maxLengthValue = this.maxLengthValue;

      const tmpNode = document.createElement('div');
      tmpNode.setAttribute('class', tmpClassName);
      const hiddenDOM = document.createElement('div');
      hiddenDOM.setAttribute('class', cx(styles['option-wrapper'], styles['option-hidden-item']));
      hiddenDOM.appendChild(document.createTextNode(maxLengthValue));
      tmpNode.appendChild(hiddenDOM);

      document.body.appendChild(tmpNode);
      this.minWidth = hiddenDOM.offsetWidth + 40;
    }
    return this.minWidth;
  }

  render() {
    const { active } = this.state;
    const {
      theme,
      color,
      disabled,
      showArrow,
      className,
    } = this.props;

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
      <div className={containerClass}>
        <OutsideClickHandler
          onOutsideClick={this.handleOutsideClick}>
          <div className={styles.wrapper} onClick={onClick}>
            {this.renderSelected()}
            {showArrow && <span>&nbsp;&nbsp;&nbsp;{icons.down}</span>}
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
  showArrow: PropTypes.bool,
  flexable: PropTypes.bool,
  optionClassName: PropTypes.string,
  selectedClassName: PropTypes.string,
};

SelectorV2.defaultProps = {
  options: [],
  onChange: () => {},
  theme: 'material',
  color: 'green',
  className: '',
  disabled: false,
  showArrow: true,
  flexable: false,
  optionClassName: '',
  selectedClassName: '',
};

export default SelectorV2;
