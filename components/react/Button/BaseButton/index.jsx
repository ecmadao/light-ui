import React, { PropTypes } from 'react';
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

  render() {
    const {
      value,
      className,
      leftIcon,
      rightIcon,
      theme,
      color,
      disabled
    } = this.props;
    const { pressed } = this.state;
    const buttonClass = cx(
      styles["button"],
      styles[theme],
      styles[color],
      pressed && styles["pressDown"],
      disabled && styles["disabled"],
      className
    );
    const onClick = disabled ? () => {} : this.onClick;

    return (
      <div
        className={buttonClass}
        onMouseDown={this.onMouseDown}
        onMouseOut={this.onMouseUp}
        onMouseLeave={this.onMouseUp}
        onMouseUp={this.onMouseUp}
        onClick={onClick}>
        <div className={styles["wrapper"]}>
          {leftIcon}
          <span>
            {value}
          </span>
          {rightIcon}
        </div>
      </div>
    )
  }
}

BaseButton.propTypes = {
  value: PropTypes.string,
  onClick: PropTypes.func,
  color: PropTypes.string,
  className: PropTypes.string,
  theme: PropTypes.string,
  disabled: PropTypes.bool,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node
};

BaseButton.defaultProps = {
  value: '',
  color: 'green',
  theme: 'material',
  onClick: () => {},
  leftIcon: null,
  rightIcon: null,
  className: '',
  disabled: false
}

export default BaseButton;
