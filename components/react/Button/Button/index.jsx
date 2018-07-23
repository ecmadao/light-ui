import React from 'react';
import PropTypes from 'prop-types';
import BaseButton from '../BaseButton';

const Button = (props) => {
  const {
    value,
    leftIcon,
    rightIcon
  } = props;
  const baseProps = Object.assign({}, props);

  const leftIconElement = typeof leftIcon === 'string'
    ? (<i className={`fa fa-${leftIcon}`} aria-hidden="true" />)
    : leftIcon;

  const rightIconElement = typeof rightIcon === 'string'
    ? (<i className={`fa fa-${rightIcon}`} aria-hidden="true" />)
    : rightIcon;

  delete baseProps.leftIcon;
  delete baseProps.rightIcon;
  delete baseProps.value;

  return (
    <BaseButton {...baseProps}>
      <div>
        {leftIconElement}
        <span>
          {value}
        </span>
        {rightIconElement}
      </div>
    </BaseButton>
  );
};

Button.propTypes = {
  value: PropTypes.string,
  onClick: PropTypes.func,
  color: PropTypes.string,
  style: PropTypes.object,
  className: PropTypes.string,
  theme: PropTypes.string,
  disabled: PropTypes.bool,
  leftIcon: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element,
    PropTypes.string,
    PropTypes.array
  ]),
  rightIcon: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element,
    PropTypes.string,
    PropTypes.array
  ])
};

Button.defaultProps = {
  value: '',
  color: 'green',
  style: {},
  theme: 'material',
  onClick: Function.prototype,
  leftIcon: null,
  rightIcon: null,
  className: '',
  disabled: false
};

export default Button;
