import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import styles from './switcher.css';

class Switcher extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: props.checked
    };
    this.onChange = this.onChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const { checked } = nextProps
    if (checked !== this.state.checked) {
      this.setState({ checked })
    }
  }

  onChange() {
    const { onChange, disabled } = this.props;
    if (disabled) return;

    const { checked } = this.state;
    this.setState({ checked: !checked });
    onChange && onChange(!checked);
  }

  render() {
    const { checked } = this.state;
    const { color, disabled, size, version, className } = this.props;

    const containerClass = cx(
      styles.switcherContainer,
      version && styles[`switcher-${version}`],
      size && styles[`container-${size}`],
      checked && styles.containerChecked,
      color && styles[color],
      disabled && styles.containerDisabled,
      className
    );

    return (
      <div
        onClick={this.onChange}
        className={containerClass}
      >
        <div className={styles.switcherItem} />
      </div>
    );
  }
}

Switcher.propTypes = {
  color: PropTypes.string,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  size: PropTypes.string,
  version: PropTypes.string,
  className: PropTypes.string
};

Switcher.defaultProps = {
  color: 'green',
  checked: false,
  disabled: false,
  onChange: Function.prototype,
  size: 'normal',
  version: 'v1',
  className: ''
};

export default Switcher;
