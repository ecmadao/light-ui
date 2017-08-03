import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './base_button.css';

class BaseButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pressed: false
    };
    this.onClick = this.onClick.bind(this);
    this.onMouseDown = this.onMouseDown.bind(this);
    this.onMouseUp = this.onMouseUp.bind(this);
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { pressed } = this.state;
    const { disabled } = this.props;
    return pressed !== nextState.pressed || disabled !== nextProps.disabled;
  }

  onClick(e) {
    const { onClick } = this.props;
    onClick && onClick();
  }

  onMouseDown() {
    this.setState({ pressed: true });
  }

  onMouseUp() {
    this.setState({ pressed: false });
  }

  onMouseEnter() {
    const { onMouseEnter } = this.props;
    onMouseEnter && onMouseEnter();
  }

  onMouseLeave() {
    this.onMouseUp();
    const { onMouseLeave } = this.props;
    onMouseLeave && onMouseLeave();
  }

  render() {
    const {
      id,
      type,
      theme,
      color,
      style,
      active,
      disabled,
      children,
      clickable,
      className
    } = this.props;
    const { pressed } = this.state;
    const buttonClass = cx(
      styles['base_button'],
      styles[type],
      styles[theme],
      styles[color],
      !disabled && clickable && styles.clickable,
      !disabled && pressed && styles.pressDown,
      active && styles.active,
      disabled && styles.disabled,
      className
    );
    const onClick = disabled ? () => {} : this.onClick;

    return (
      <div
        id={id}
        style={style}
        className={buttonClass}
        onMouseDown={this.onMouseDown}
        onMouseOut={this.onMouseUp}
        onMouseLeave={this.onMouseLeave}
        onMouseUp={this.onMouseUp}
        onMouseEnter={this.onMouseEnter}
        onClick={onClick}>
        <div className={styles.wrapper}>
          {children}
        </div>
      </div>
    );
  }
}

BaseButton.propTypes = {
  id: PropTypes.string,
  onClick: PropTypes.func,
  color: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
  theme: PropTypes.string,
  type: PropTypes.string,
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  children: PropTypes.element,
  clickable: PropTypes.bool
};

BaseButton.defaultProps = {
  id: '',
  color: 'green',
  theme: 'material',
  type: 'button',
  onClick: () => {},
  className: '',
  style: {},
  active: false,
  disabled: false,
  children: (<div></div>),
  clickable: true
};

export default BaseButton;
