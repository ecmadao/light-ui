import React, { PropTypes } from 'react';
import cx from 'classnames';
import styles from './label.css';

const Label = (props) => {
  const {
    text,
    min,
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
        min && styles.min,
        deleteable && styles.deleteable,
        disabled && styles.disabled,
        className,
      )}
    >
      <div className={styles.labelWrapper}>
        <div
          onClick={handleDelete}
          className={styles.labelDelete}
        >
          x
        </div>
        <div
          onClick={handleClick}
          className={cx(
            styles.labelContent,
            clickable && styles.clickable,
          )}>
          {iconElement}
          <span
            className={cx(
              styles.labelText,
              iconElement && styles.withIcon
            )}
          >
            {text}
          </span>
        </div>
      </div>
    </div>
  );
};

Label.propTypes = {
  text: PropTypes.string,
  min: PropTypes.bool,
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
  min: false,
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
