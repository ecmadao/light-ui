import React, { PropTypes } from 'react';
import cx from 'classnames';

import styles from './icon_button.css';

class IconButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pressed: false
    };
    this.onMouseUp = this.onMouseUp.bind(this);
    this.onMouseDown = this.onMouseDown.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { pressed } = this.state;
    const { disabled } = this.props;
    return pressed !== nextState.pressed || disabled !== nextProps.disabled;
  }

  onMouseUp() {
    this.setState({
      pressed: false
    });
  }

  onMouseDown() {
    this.setState({
      pressed: true
    });
  }

  render() {
    const { pressed } = this.state;
    const { icon, onClick, className, id, disabled, theme } = this.props;
    const containerClass = cx(
      styles["container"],
      styles[theme],
      pressed && styles["pressed"],
      disabled && styles["disabled"],
      className
    );
    const handleClick = disabled ? () => {} : onClick;
    const iconElement = typeof icon === 'string' ?
      (<i className={`fa fa-${icon}`} aria-hidden="true"></i>) :
      icon;
    return (
      <div
        id={id}
        className={containerClass}
        onClick={handleClick}
        onMouseUp={this.onMouseUp}
        onMouseLeave={this.onMouseUp}
        onMouseEnter={this.onMouseDown}
        onMouseDown={this.onMouseDown}>
        {iconElement}
      </div>
    )
  }
}

IconButton.propTypes = {
  icon: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.string
  ]),
  className: PropTypes.string,
  id: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  theme: PropTypes.string
};

IconButton.defaultProps = {
  icon: 'hand-spock-o',
  onClick: () => {},
  className: '',
  id: '',
  disabled: false,
  theme: 'ghost'
};

export default IconButton;
