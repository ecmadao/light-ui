import React, { PropTypes } from 'react';
import cx from 'classnames';
import styles from './loading.css';


const EMPTY_FUNC = () => {};

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
    if (!closeAble) { return }
    this.setState({ loading: false });
    onClose && onClose();
  }

  render() {
    const { loading } = this.state;
    const { onClose, className, theme, style } = this.props;
    const containerClass = cx(
      styles["loading-container"],
      loading && styles["loading-active"],
      className
    );
    const loadingClass = styles[`${theme}-wrapper`];

    return (
      <div
        style={style}
        onClick={this.onClose}
        className={containerClass}>
        <div className={loadingClass}>
          <div></div>
          <div></div>
        </div>
        {/* <div className={styles["bounce_wrapper"]}>
          <div className={styles["loading_bounce"]}></div>
          <div className={styles["loading_bounce"]}></div>
        </div> */}
      </div>
    )
  }
}

Loading.propTypes = {
  className: PropTypes.string,
  theme: PropTypes.string,
  loading: PropTypes.bool,
  closeAble: PropTypes.bool,
  onClose: PropTypes.func,
  style: PropTypes.object,
}

Loading.defaultProps = {
  className: '',
  theme: 'rotate',
  loading: false,
  closeAble: false,
  onClose: null,
  style: {}
};

export default Loading;
