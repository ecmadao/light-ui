
import cx from 'classnames';
import PropTypes from 'prop-types';
import React, { cloneElement } from 'react';

import styles from './dropdown.css';
import icons from '../../shared/utils/icons';
import OutsideClickHandler from '../../shared/components/OutsideClickHandler';

class Dropdown extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };

    this.onMenuClick = this.onMenuClick.bind(this);
    this.onOutsideClick = this.onOutsideClick.bind(this);
    this.onActiveChange = this.onActiveChange.bind(this);
    this.onActiveToggle = this.onActiveToggle.bind(this);
  }

  onMenuClick(callback) {
    const { closeOnClick } = this.props;
    return () => {
      callback && callback();
      closeOnClick && this.onOutsideClick();
    };
  }

  onOutsideClick() {
    const { closeOnOutsideClick } = this.props;
    closeOnOutsideClick && this.onActiveChange(false);
  }

  onActiveChange(active) {
    this.setState({ active });
    if (!active) {
      const { onDropdownClose } = this.props;
      onDropdownClose && onDropdownClose();
    }
  }

  onActiveToggle() {
    const { active } = this.state;
    this.onActiveChange(!active);
  }

  renderMainArea() {
    const { showArrow, disabled, button, buttonClassName } = this.props;
    const onClick = disabled ? () => {} : () => this.onActiveToggle();

    return (
      <div className={cx(styles.wrapper, buttonClassName)} onClick={onClick}>
        <div className={styles.valueWrapper}>
          {button}
        </div>
        {showArrow && <span>&nbsp;&nbsp;&nbsp;{icons.down}</span>}
      </div>
    );
  }

  renderMenuPanel() {
    const {
      content,
      showPanelTriangle,
      menuPanelClassName,
    } = this.props;

    let dom = content;
    if (Array.isArray(content)) {
      dom = content.map((item, index) => {
        const { onClick, className } = item.props;
        return cloneElement(item, {
          key: `menu-${index}`,
          className: cx(styles.menu, className),
          onClick: this.onMenuClick(onClick)
        });
      });
    }
    return (
      <div
        className={cx(
          styles.menusContainer,
          showPanelTriangle && styles.useTriangle,
          menuPanelClassName
        )}
      >
        {dom}
      </div>
    );
  }

  render() {
    const { active } = this.state;
    const {
      theme,
      color,
      disabled,
      className,
    } = this.props;

    const containerClass = cx(
      styles.dropdownContainer,
      styles[`dropdown-${color}`],
      styles[theme],
      active && styles.dropdownContainerActive,
      disabled && styles.dropdownDisabled,
      className
    );

    return (
      <div className={containerClass}>
        <OutsideClickHandler onOutsideClick={this.onOutsideClick}>
          {this.renderMainArea()}
          {this.renderMenuPanel()}
        </OutsideClickHandler>
      </div>
    );
  }
}

Dropdown.propTypes = {
  theme: PropTypes.string,
  color: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  showArrow: PropTypes.bool,
  showPanelTriangle: PropTypes.bool,
  closeOnClick: PropTypes.bool,
  closeOnOutsideClick: PropTypes.bool,
  content: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.array,
    PropTypes.element,
    PropTypes.string
  ]),
  button: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element,
    PropTypes.string,
    PropTypes.array
  ]),
  menuPanelClassName: PropTypes.string,
  buttonClassName: PropTypes.string,
  onDropdownClose: PropTypes.func,
};

Dropdown.defaultProps = {
  theme: 'material',
  color: 'green',
  className: '',
  disabled: false,
  showArrow: true,
  content: [],
  showPanelTriangle: true,
  closeOnClick: true,
  closeOnOutsideClick: true,
  button: (<div/>),
  buttonClassName: '',
  menuPanelClassName: '',
  onDropdownClose: () => {},
};

export default Dropdown;
