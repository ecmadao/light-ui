import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './slider.css';

const ProgressBar = (props) => {
  const { left, right, color } = props;
  const barClass = cx(
    styles['progress-bar'],
    color && styles[`bar-${color}`]
  );
  return (
    <div
      className={barClass}
      style={{
        left: `${left * 100}%`,
        right: `${right * 100}%`
      }}
    />
  );
};

ProgressBar.propTypes = {
  left: PropTypes.number,
  right: PropTypes.number,
  color: PropTypes.string,
};

ProgressBar.defaultProps = {
  left: 0,
  right: 0,
  color: 'green'
};

export default ProgressBar;
