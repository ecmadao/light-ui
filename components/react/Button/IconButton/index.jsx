import React, { PropTypes } from 'react';
import cx from 'classnames';
import objectAssign from 'object-assign';
import BaseButton from '../BaseButton';
import styles from './icon_button.css';

const IconButton = (props) => {
  const { icon, className } = props;
  const baseProps = objectAssign({}, props);

  const iconElement = typeof icon === 'string' ?
    (<i className={`fa fa-${icon}`} aria-hidden="true"></i>) :
    icon;

  delete baseProps.className;
  delete baseProps.icon;

  return (
    <BaseButton
      {...baseProps}
      className={cx(styles['icon-button'], className)}
    >
      {iconElement}
    </BaseButton>
  )
};

IconButton.propTypes = {
  icon: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element,
    PropTypes.string
  ]),
  className: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  theme: PropTypes.string
};

IconButton.defaultProps = {
  icon: '',
  onClick: () => {},
  className: '',
  disabled: false,
  theme: 'ghost'
};

export default IconButton;
