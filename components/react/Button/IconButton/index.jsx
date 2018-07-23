import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import BaseButton from '../BaseButton';
import styles from './button.css';

const IconButton = (props) => {
  const { icon, className } = props;
  const baseProps = Object.assign({}, props);

  const iconElement = typeof icon === 'string'
    ? (<i className={`fa fa-${icon}`} aria-hidden="true" />)
    : icon;

  delete baseProps.className;
  delete baseProps.icon;

  return (
    <BaseButton
      {...baseProps}
      className={cx(styles.iconButton, className)}
    >
      {iconElement}
    </BaseButton>
  );
};

IconButton.propTypes = {
  icon: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element,
    PropTypes.string,
    PropTypes.array
  ]),
  className: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  theme: PropTypes.string
};

IconButton.defaultProps = {
  icon: '',
  onClick: Function.prototype,
  className: '',
  disabled: false,
  theme: 'ghost'
};

export default IconButton;
