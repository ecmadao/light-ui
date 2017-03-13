import React, { PropTypes } from 'react';
import cx from 'classnames';
import objectAssign from 'object-assign';
import Button from '../../Button/Button';
import styles from './label.css';

const Label = (props) => {
  const { text, className, theme, icon } = props;
  const baseProps = objectAssign({}, props);

  const labelClass = cx(
    styles["label"],
    className
  );

  const iconElement = typeof icon === 'string'
  ? (<i className={`fa fa-${icon}`} aria-hidden="true"></i>)
  : icon;

  delete baseProps.theme;
  delete baseProps.className;
  delete baseProps.text;
  delete baseProps.icon;

  return (
    <Button
      {...baseProps}
      value={text}
      theme={`label-${theme}`}
      className={labelClass}
      leftIcon={iconElement}
    />
  );
};

Label.propTypes = {
  text: PropTypes.string,
  clickable: PropTypes.bool,
  onClick: PropTypes.func,
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
  onClick: () => {},
  className: '',
  theme: 'material',
  icon: null
};

export default Label;
