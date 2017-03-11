import React, { PropTypes } from 'react';
import cx from 'classnames';
import BaseButton from '../BaseButton';
import styles from './icon_button.css';

const IconButton = (props) => {
  const { icon } = props;

  const iconElement = typeof icon === 'string' ?
    (<i className={`fa fa-${icon}`} aria-hidden="true"></i>) :
    icon;

  return (
    <BaseButton
      {...props}
      className={styles['icon-button']}
    >
      {iconElement}
    </BaseButton>
  )
};

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
