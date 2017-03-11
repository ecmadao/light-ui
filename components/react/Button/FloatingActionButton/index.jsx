import React, { PropTypes } from 'react';
import cx from 'classnames';
import BaseButton from '../BaseButton';

const FloatingActionButton = (props) => {
  const { icon, style } = props;

  const iconElement = typeof icon === 'string' ?
    (<i className={`fa fa-${icon}`} aria-hidden="true"></i>) :
    icon;

  return (
    <BaseButton
      {...props}
      theme="floating-action-button"
      style={{
        ...style,
        width: '50px',
        height: '50px'
      }}
    >
      {iconElement}
    </BaseButton>
  )
}


FloatingActionButton.propTypes = {
  style: PropTypes.object,
  onClick: PropTypes.func,
  icon: PropTypes.string
};

FloatingActionButton.defaultProps = {
  style: {},
  onClick: () => {},
  icon: ''
};

export default FloatingActionButton;
