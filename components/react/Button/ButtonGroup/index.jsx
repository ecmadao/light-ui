import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import IconButton from '../IconButton';
import styles from './button_group.css';

class ButtonGroup extends React.Component {
  renderButton() {
    return this.props.buttons.map((button, index) => (
      <IconButton
        key={index}
        {...button}
        theme="flat"
        className={cx(
          styles.button,
          button.className || ''
        )}
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
