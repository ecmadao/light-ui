import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import styles from './slider.css';

const ProgressBar = (props) => {
  const { left, right, color } = props;
  const barClass = cx(
    styles.progressBar,
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
