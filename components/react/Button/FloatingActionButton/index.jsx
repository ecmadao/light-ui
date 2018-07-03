import React from 'react';
import PropTypes from 'prop-types';
import objectAssign from '../../../shared/utils/objectAssign';
import BaseButton from '../BaseButton';

const FloatingActionButton = (props) => {
  const { icon, style } = props;
  const baseProps = objectAssign({}, props);

  const iconElement = typeof icon === 'string'
    ? (<i className={`fa fa-${icon}`} aria-hidden="true"></i>)
    : icon;

  delete baseProps.style;
  delete baseProps.icon;

  return (
    <BaseButton
      {...baseProps}
      style={{
        ...style,
        width: '50px',
        height: '50px'
      }}
      type="floating-action-button"
    >
      {iconElement}
    </BaseButton>
  );
};

FloatingActionButton.propTypes = {
  style: PropTypes.object,
  onClick: PropTypes.func,
  className: PropTypes.string,
  icon: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element,
    PropTypes.string,
    PropTypes.array
  ])
};

FloatingActionButton.defaultProps = {
  style: {},
  onClick: () => {},
  className: '',
  icon: ''
};

export default FloatingActionButton;
