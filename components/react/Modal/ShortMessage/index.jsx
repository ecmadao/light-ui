import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { Portal } from 'react-portal';
import styles from './message.css';

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
    const { text } = this.props;
    const messageClass = cx(
      styles.messageModalWrapper,
      show && styles.active
    );

    return (
      <Portal>
        <div
          ref={ref => (this.messageModal = ref)}
          className={messageClass}
        >
          {text}
        </div>
      </Portal>
    );
  }
}

ShortMessage.propTypes = {
  expire: PropTypes.number,
  text: PropTypes.string,
};

ShortMessage.defaultProps = {
  text: 'This is SMS',
  expire: 2000,
};

export default ShortMessage;
