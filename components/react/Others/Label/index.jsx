import React, { PropTypes } from 'react';
import cx from 'classnames';
import styles from './label.css';

const Label = (props) => {
  const {
    text,
    className,
    theme,
    icon,
    onDelete,
    deleteable,
    disabled,
    clickable,
    onClick,
    color
  } = props;

  const iconElement = typeof icon === 'string'
  ? (<i className={`fa fa-${icon}`} aria-hidden="true"></i>)
  : icon;

  const handleClick = () => {
    if (!clickable || disabled) return;
    onClick && onClick(text);
  };
  const handleDelete = () => {
    if (!deleteable || disabled) return;
    onDelete && onDelete(text);
  };

  return (
    <div
      className={cx(
        styles.label,
        styles[color],
        styles[theme],
        deleteable && styles.deleteable,
        disabled && styles.disabled,
        className,
      )}
    >
      <div className={styles['label-wrapper']}>
        <div
          onClick={handleDelete}
          className={styles['label-delete']}
        >
          x
        </div>
        <div
          onClick={handleClick}
          className={cx(
            styles['label-content'],
            clickable && styles.clickable,
          )}>
          {iconElement}&nbsp;
          {text}
        </div>
      </div>
    </div>
  );
};

Label.propTypes = {
  text: PropTypes.string,
  clickable: PropTypes.bool,
  deleteable: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  onDelete: PropTypes.func,
  className: PropTypes.string,
  theme: PropTypes.string,
  icon: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.string
  ]),
  color: PropTypes.string,
};

Label.defaultProps = {
  text: '',
  clickable: true,
  onClick: () => {},
  className: '',
  theme: 'material',
  icon: null,
  onDelete: () => {},
  deleteable: false,
  disabled: false,
  color: 'dark'
};

export default Label;
