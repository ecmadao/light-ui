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

  return (
    <BaseButton
      {...props}>
      <div>
        {leftIcon}
        <span>
          {value}
        </span>
        {rightIcon}
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
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node
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
