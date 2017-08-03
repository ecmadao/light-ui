import React from 'react';
import PropTypes from 'prop-types';
import Portal from 'react-portal';
import cx from 'classnames';
import styles from './short_message.css';

class ShortMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true
    };
  }

  componentDidMount() {
    this.waitToUnmount();
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { show } = this.state;
    return show !== nextState.show;
  }

  waitToUnmount() {
    setTimeout(() => {
      this.setState({
        show: false
      });
    }, this.props.expire);
  }

  render() {
    const { show } = this.state;
    const { text, onClose } = this.props;
    const messageClass = cx(
      styles["message_modal_wrapper"],
      show && styles["active"]
    );

    return (
      <Portal
        onClose={onClose}
        isOpened={show}>
        <div
          ref={ref => (this.messageModal = ref)}
          className={messageClass}>
          {text}
        </div>
      </Portal>
    );
  }
}

ShortMessage.propTypes = {
  onClose: PropTypes.func,
  expire: PropTypes.number,
  text: PropTypes.string
};

ShortMessage.defaultProps = {
  onClose: () => {},
  text: 'This is SMS',
  expire: 2000,
};

export default ShortMessage;
