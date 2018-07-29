
import React, { cloneElement } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import styles from './group.css';

class ButtonGroup extends React.Component {
  renderButtons() {
    const { color, disabled, children } = this.props;
    if (!Array.isArray(children)) return children;

    const doms = [];

    for (let i = 0; i < children.length; i += 1) {
      const child = children[i];
      if (i > 0) {
        doms.push(<div className={styles.divider} />);
      }
      if (i > 0 && child.props.active) doms.pop();
      if (i > 0 && children[i - 1].props.active) doms.pop();
      doms.push(cloneElement(child, {
        key: i,
        className: cx(
          child.props.className,
          styles.button,
          child.props.active && styles.active
        ),
        disabled: disabled || child.props.disabled,
        color: color || child.props.color
      }));
    }
    return doms;
  }

  render() {
    const { color, theme, disabled, className } = this.props;
    const containerClass = cx(
      styles.container,
      theme && styles[theme],
      color && styles[color],
      disabled && styles.disabled,
      className
    );
    return (
      <div className={containerClass}>
        {this.renderButtons()}
      </div>
    );
  }
}

ButtonGroup.propTypes = {
  buttons: PropTypes.array,
  className: PropTypes.string,
  theme: PropTypes.string,
  color: PropTypes.string,
  disabled: PropTypes.bool,
};

ButtonGroup.defaultProps = {
  color: 'blue',
  buttons: [],
  className: '',
  theme: 'material',
  disabled: false,
};

export default ButtonGroup;
