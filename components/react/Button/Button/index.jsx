import React, { PropTypes } from 'react';
import BaseButton from '../BaseButton';

const Button = (props) => {
  const {
    value,
    className,
    leftIcon,
    rightIcon,
    theme,
    color,
    disabled,
    onClick
  } = props;

  const leftIconElement = typeof leftIcon === 'string' ?
    (<i className={`fa fa-${leftIcon}`} aria-hidden="true"></i>) :
    leftIcon;

  const rightIconElement = typeof rightIcon === 'string' ?
    (<i className={`fa fa-${rightIcon}`} aria-hidden="true"></i>) :
    rightIcon;

  return (
    <BaseButton
      {...props}>
      <div>
        {leftIconElement}
        <span>
          {value}
        </span>
        {leftIconElement}
      </div>
    </BaseButton>
  )
};

Button.propTypes = {
  value: PropTypes.string,
  onClick: PropTypes.func,
  color: PropTypes.string,
  className: PropTypes.string,
  theme: PropTypes.string,
  disabled: PropTypes.bool,
  leftIcon: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.string
  ]),
  rightIcon: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.string
  ])
};

Button.defaultProps = {
  value: '',
  color: 'green',
  theme: 'material',
  onClick: () => {},
  leftIcon: null,
  rightIcon: null,
  className: '',
  disabled: false
}

export default Button;
