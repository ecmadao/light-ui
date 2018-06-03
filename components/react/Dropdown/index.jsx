
import React, { cloneElement } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

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
    this.onActiveChange(false);
  }

  onActiveChange(active) {
    this.setState({ active });
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
        <div className={styles['value-wrapper']}>
          {button}
        </div>
        {showArrow && <span>&nbsp;&nbsp;&nbsp;{icons.down}</span>}
      </div>
    );
  }

  renderMenuPanel() {
    const {
      menus,
      showPanelTriangle,
      menuPanelClassName,
    } = this.props;
    const items = Array.isArray(menus) ? menus : [menus];

    const menuItems = items.map((item, index) => {
      const { onClick, className } = item.props;
      return cloneElement(item, {
        key: `menu-${index}`,
        className: cx(styles['menu'], className),
        onClick: this.onMenuClick(onClick)
      });
    });
    return (
      <div
        className={cx(
          styles['menus-container'],
          showPanelTriangle && styles['useTriangle'],
          menuPanelClassName
        )}
      >
        {menuItems}
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
      styles['dropdown-container'],
      styles[`dropdown-${color}`],
      styles[theme],
      active && styles['dropdown-container-active'],
      disabled && styles['dropdown-disabled'],
      className
    );

    return (
      <div className={containerClass}>
        <OutsideClickHandler
          onOutsideClick={this.onOutsideClick}>
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
  menus: PropTypes.array,
  button: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element,
    PropTypes.string
  ]),
  menuPanelClassName: PropTypes.string,
  buttonClassName: PropTypes.string,
};

Dropdown.defaultProps = {
  theme: 'material',
  color: 'green',
  className: '',
  disabled: false,
  showArrow: true,
  menus: [],
  showPanelTriangle: true,
  closeOnClick: true,
  button: (<div/>),
  buttonClassName: '',
  menuPanelClassName: '',
};

export default Dropdown;
