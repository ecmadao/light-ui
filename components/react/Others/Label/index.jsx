import React, { PropTypes } from 'react';
import cx from 'classnames';
import BaseButton from '../../Button/BaseButton';
import styles from './label.css';

const Label = (props) => {
  const { text, className, theme, icon } = props;
  const labelClass = cx(
    styles["label"],
    className
  );

  const iconElement = typeof icon === 'string' ?
    (<i className={`fa fa-${icon}`} aria-hidden="true"></i>) :
    icon;

  return (
    <BaseButton
      {...props}
      theme={`label-${theme}`}
      className={labelClass}>
      <div>
        {iconElement}
        <span>
          {text}
        </span>
      </div>
    </BaseButton>
  )
};

Label.propTypes = {
  text: PropTypes.string,
  clickable: PropTypes.bool,
  className: PropTypes.string,
  theme: PropTypes.string,
  icon: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.string
  ])
};

Label.defaultProps = {
  text: '',
  clickable: true,
  className: '',
  theme: 'material',
  icon: null
};

export default Label;
