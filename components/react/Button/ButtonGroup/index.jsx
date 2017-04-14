import React, { PropTypes } from 'react';
import cx from 'classnames';
import IconButton from '../IconButton';
import styles from './button_group.css';

class ButtonGroup extends React.Component {
  renderButton() {
    return this.props.buttons.map((button, index) => (
      <IconButton
        key={index}
        {...button}
        theme="flat"
        className={styles.button}
      />
    ));
  }

  render() {
    const { theme, className } = this.props;
    const containerClass = cx(
      styles.container,
      theme && styles[theme],
      className
    );
    return (
      <div className={containerClass}>
        {this.renderButton()}
      </div>
    );
  }
}

ButtonGroup.propTypes = {
  buttons: PropTypes.array,
  className: PropTypes.string,
  theme: PropTypes.string
};

ButtonGroup.defaultProps = {
  buttons: [],
  className: '',
  theme: 'material'
};

export default ButtonGroup;
