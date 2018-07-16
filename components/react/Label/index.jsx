import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import styles from './label.css';

const Label = (props) => {
  const {
    min,
    icon,
    text,
    color,
    theme,
    onClick,
    onDelete,
    disabled,
    clickable,
    className,
    deleteable,
    style = {}
  } = props;

  const iconElement = typeof icon === 'string'
  ? (<i className={`fa fa-${icon}`} aria-hidden="true" />)
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
      style={style}
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
        {!disabled && deleteable && (
          <div
            onClick={handleDelete}
            className={styles.labelDelete}
          >
            x
          </div>
        )}
        <div
          onClick={handleClick}
          className={cx(
            styles.labelContent,
            !disabled && clickable && styles.clickable,
            disabled && styles.disabled
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
