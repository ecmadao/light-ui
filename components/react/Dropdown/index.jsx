
import cx from 'classnames';
import PropTypes from 'prop-types';
import React, { cloneElement } from 'react';

import styles from './dropdown.css';
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
    const { disabled, button } = this.props;
    const onClick = disabled ? Function.prototype : () => this.onActiveToggle();

    return cloneElement(button, {
      onClick
    });
  }

  renderMenuPanel() {
    const {
      content,
      showPanelTriangle,
      menuPanelClassName,
    } = this.props;
    const { active } = this.state;

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
          menuPanelClassName,
          active && styles.menusContainerActived,
        )}
      >
        {dom}
      </div>
    );
  }

  render() {
    const { className } = this.props;

    return (
      <OutsideClickHandler
        onOutsideClick={this.onOutsideClick}
        className={cx(styles.dropdownContainer, className)}
      >
        {this.renderMainArea()}
        {this.renderMenuPanel()}
      </OutsideClickHandler>
    );
  }
}

Dropdown.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
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
  onDropdownClose: PropTypes.func,
};

Dropdown.defaultProps = {
  className: '',
  disabled: false,
  content: [],
  showPanelTriangle: true,
  closeOnClick: true,
  closeOnOutsideClick: true,
  button: <div />,
  menuPanelClassName: '',
  onDropdownClose: Function.prototype,
};

export default Dropdown;
