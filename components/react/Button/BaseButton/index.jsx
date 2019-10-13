import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import styles from './button.css';

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

  onClick() {
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
      className,
      onTransitionEnd
    } = this.props
    const { pressed } = this.state

    const buttonClass = cx(
      styles.button,
      styles[type],
      styles[theme],
      styles[color],
      !disabled && clickable && styles.clickable,
      !disabled && pressed && styles.pressDown,
      active && styles.active,
      disabled && styles.disabled,
      className
    );
    const onClick = disabled ? Function.prototype : this.onClick

    return (
      <div
        id={id}
        style={style}
        onClick={onClick}
        className={buttonClass}
        onMouseUp={this.onMouseUp}
        onMouseOut={this.onMouseUp}
        onMouseDown={this.onMouseDown}
        onMouseLeave={this.onMouseLeave}
        onMouseEnter={this.onMouseEnter}
        onTransitionEnd={onTransitionEnd}
      >
        <div className={styles.wrapper}>
          {children}
        </div>
      </div>
    )
  }
}

BaseButton.propTypes = {
  id: PropTypes.string,
  onClick: PropTypes.func,
  onTransitionEnd: PropTypes.func,
  color: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
  theme: PropTypes.string,
  type: PropTypes.string,
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.node,
    PropTypes.array,
    PropTypes.string
  ]),
  clickable: PropTypes.bool
};

BaseButton.defaultProps = {
  id: '',
  color: 'green',
  theme: 'material',
  type: 'button',
  onClick: Function.prototype,
  className: '',
  style: {},
  active: false,
  disabled: false,
  children: <div />,
  clickable: true
};

export default BaseButton;
