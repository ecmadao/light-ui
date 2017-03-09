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
      className,
      theme,
      color,
      disabled,
      children,
      style
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
        style={style}
        className={buttonClass}
        onMouseDown={this.onMouseDown}
        onMouseOut={this.onMouseUp}
        onMouseLeave={this.onMouseLeave}
        onMouseUp={this.onMouseUp}
        onMouseEnter={this.onMouseEnter}
        onClick={onClick}>
        <div className={styles["wrapper"]}>
          {children}
        </div>
      </div>
    )
  }
}

BaseButton.propTypes = {
  onClick: PropTypes.func,
  color: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
  theme: PropTypes.string,
  disabled: PropTypes.bool,
  children: PropTypes.element,
};

BaseButton.defaultProps = {
  color: 'green',
  theme: 'material',
  onClick: () => {},
  className: '',
  style: {},
  disabled: false,
  children: (<div></div>),
}

export default BaseButton;
