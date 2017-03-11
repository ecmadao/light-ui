import React, { PropTypes } from 'react';
import cx from 'classnames';
import objectAssign from 'object-assign';
import BaseButton from '../BaseButton';

const FloatingActionButton = (props) => {
  const { icon, style } = props;
  const baseProps = objectAssign({}, props);

  const iconElement = typeof icon === 'string' ?
    (<i className={`fa fa-${icon}`} aria-hidden="true"></i>) :
    icon;

  delete baseProps.style;
  delete baseProps.icon;

  return (
    <BaseButton
      {...baseProps}
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
  className: PropTypes.string,
  icon: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element,
    PropTypes.string
  ])
};

FloatingActionButton.defaultProps = {
  style: {},
  onClick: () => {},
  className: '',
  icon: ''
};

export default FloatingActionButton;
