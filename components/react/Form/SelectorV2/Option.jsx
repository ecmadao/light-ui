import React from 'react';
import cx from 'classnames';
import styles from './selector_v2.css';

class Option extends React.Component {
  onClick(e) {
    const { onClick, id, isActive, disabled } = this.props;
    !disabled && !isActive && onClick && onClick(id);
    e.stopPropagation();
    return false;
  }

  render() {
    const { value, isActive, disabled, className } = this.props;
    const optionClass = cx(
      styles.option,
      isActive && styles.optionActive,
      disabled && styles.optionDisabled,
      className
    );
    return (
      <div
        onClick={this.onClick.bind(this)}
        className={optionClass}
      >
        <div className={styles.optionWrapper}>
          {value}
        </div>
      </div>
    );
  }
}

export default Option;
