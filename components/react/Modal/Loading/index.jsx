
import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import styles from './loading.css';

class Loading extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: props.loading
    };
    this.onClose = this.onClose.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const { loading } = nextProps;
    if (loading !== this.state.loading) {
      this.setState({ loading });
    }
  }

  onClose() {
    const { onClose, closeAble } = this.props;
    if (!closeAble) return;
    this.setState({ loading: false });
    onClose && onClose();
  }

  render() {
    const { loading } = this.state;
    const { theme, style, className, color, loaderColor } = this.props;
    const containerClass = cx(
      styles.loadingContainer,
      styles[color],
      loading && styles.loadingActive,
      className
    );

    return (
      <div
        style={style}
        onClick={this.onClose}
        className={containerClass}
      >
        <div
          className={cx(
            styles[`${theme}Wrapper`],
            styles[color]
          )}
        >
          <div style={{ backgroundColor: loaderColor }} />
          <div style={{ backgroundColor: loaderColor }} />
        </div>
      </div>
    );
  }
}

Loading.propTypes = {
  className: PropTypes.string,
  theme: PropTypes.string,
  loading: PropTypes.bool,
  closeAble: PropTypes.bool,
  onClose: PropTypes.func,
  style: PropTypes.object,
  color: PropTypes.string,
};

Loading.defaultProps = {
  className: '',
  theme: 'rotate',
  loading: false,
  closeAble: false,
  onClose: null,
  style: {},
  color: 'dark'
};

export default Loading;
