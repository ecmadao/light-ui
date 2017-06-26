import React, { PropTypes } from 'react';
import cx from 'classnames';
import styles from './slider.css';

class ProgressBar extends React.Component {
  render() {
    const { left, right, color } = this.props;
    const barClass = cx(
      styles['progress-bar'],
      color && styles[`bar-${color}`]
    );
    return (
      <div
        style={{
          left: `${left * 100}%`,
          right: `${right * 100}%`
        }}
        className={barClass}></div>
    );
  }
}

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
