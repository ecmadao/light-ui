import React, { PropTypes } from 'react';
import cx from 'classnames';
import styles from './slider.css';

class ProgressBar extends React.Component {
  render() {
    const { width, color } = this.props;
    const barClass = cx(
      styles['progress-bar'],
      color && styles[`bar-${color}`]
    );
    return (
      <div
        style={{
          width: `${width * 100}%`
        }}
        className={barClass}></div>
    );
  }
}

ProgressBar.propTypes = {
  width: PropTypes.number,
  color: PropTypes.string,
};

ProgressBar.defaultProps = {
  width: 0,
  color: 'green'
};

export default ProgressBar;
