import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

import Option from './Option';
import styles from './selector.css';
import icons from '../../../shared/utils/icons';
import helper from '../../../shared/utils/helper';
import OutsideClickHandler from '../../../shared/components/OutsideClickHandler';

class SelectorV2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
    this.onChange = this.onChange.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
    this.handleActiveChange = this.handleActiveChange.bind(this);
    this.handleActiveToggle = this.handleActiveToggle.bind(this);
  }

  onChange(val) {
    const { onChange } = this.props;
    onChange && onChange(val);
    this.handleOutsideClick();
  }

  handleOutsideClick() {
    this.handleActiveChange(false);
    const { onSelectorClose } = this.props;
    onSelectorClose && onSelectorClose();
  }

  handleActiveChange(active) {
    this.setState({ active });
  }

  handleActiveToggle() {
    const { active } = this.state;
    this.handleActiveChange(!active);
  }

  renderOptions() {
    const {
      value,
      options,
      optionClassName,
      optionModalClassName
    } = this.props;
    const optionComponents = options.map((option, index) => {
      const { id, hidden } = option;
      if (hidden) return null;
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
        className={cx(
          styles.optionsContainer,
          optionModalClassName
        )}
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
      if (helper.getStringWidth(option.value) > helper.getStringWidth(maxValue)) { maxValue = option.value; }
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
        <div className={cx(styles.valueWrapper, selectedClassName)}>
          <span className={styles.value}>{targetValue}</span>
          <span className={styles.valueHidden}>{maxLengthValue}</span>
        </div>
      );
    }

    return (
      <div className={cx(styles.valueWrapper, selectedClassName)}>
        {targetValue}
      </div>
    );
  }

  get selectorWidth() {
    const { optionClassName } = this.props;
    const tmpClassName = cx(styles.option, optionClassName, styles.optionHidden);
    const maxLengthValue = this.maxLengthValue;

    const tmpNode = document.createElement('div');
    tmpNode.setAttribute('class', tmpClassName);
    const hiddenDOM = document.createElement('div');
    hiddenDOM.setAttribute('class', cx(styles.optionWrapper, styles.optionHiddenItem));
    hiddenDOM.appendChild(document.createTextNode(maxLengthValue));
    tmpNode.appendChild(hiddenDOM);

    document.body.appendChild(tmpNode);
    const width = hiddenDOM.offsetWidth + 40;
    tmpNode.remove();
    return width;
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
      styles.selectorContainer,
      styles[`selector-${color}`],
      styles[theme],
      active && styles.selectorContainerActive,
      disabled && styles.selectorDisabled,
      className
    );

    const onClick = disabled ? Function.prototype : () => this.handleActiveToggle();

    return (
      <div className={containerClass}>
        <OutsideClickHandler onOutsideClick={this.handleOutsideClick}>
          <div className={styles.wrapper} onClick={onClick}>
            {this.renderSelected()}
            {showArrow && (
              <span>
                &nbsp;&nbsp;&nbsp;
                <span className={styles.icon}>{icons.down}</span>
              </span>
            )}
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
    PropTypes.bool,
    PropTypes.string,
    PropTypes.number,
  ]),
  onChange: PropTypes.func,
  onSelectorClose: PropTypes.func,
  theme: PropTypes.string,
  color: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  showArrow: PropTypes.bool,
  flexable: PropTypes.bool,
  optionClassName: PropTypes.string,
  selectedClassName: PropTypes.string,
  optionModalClassName: PropTypes.string,
};

SelectorV2.defaultProps = {
  options: [],
  onChange: Function.prototype,
  onSelectorClose: Function.prototype,
  theme: 'material',
  color: 'green',
  className: '',
  disabled: false,
  showArrow: true,
  flexable: false,
  optionClassName: '',
  selectedClassName: '',
  optionModalClassName: '',
};

export default SelectorV2;
