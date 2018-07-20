
import cx from 'classnames';
import styles from './message.css';

const ShortMessage = (...args) => {
  let messageComponent = null;
  return (() => {
    if (!messageComponent) {
      messageComponent = new MessageComponent(...args);
    }
    return messageComponent;
  })();
};

class MessageComponent {
  constructor(timeout = 2500, options = {}) {
    this.state = {
      timeout,
      style: options.style || {},
      className: options.className || '',
    };
    this.$message = null;
    this.$body = document.body;
  }

  update(newState) {
    Object.assign(this.state, newState);
  }

  show(msg, time = this.state.timeout) {
    this.$message = this._messageTemplate(msg);
    this.$body.appendChild(this.$message);
    this._autoHide(time);
  }

  _hide() {
    try {
      this.$body.removeChild(this.$message);
    } catch (err) {}
    this.$message = null;
  }

  remove() {
    this.$message && this._hide();
  }

  _autoHide(time) {
    const hideMessage = () => this._hide();
    setTimeout(hideMessage, time);
  }

  _messageTemplate(msg) {
    const message = document.createElement('div');
    message.className = cx(
      styles.messageComponent,
      this.state.className
    );
    Object.keys(this.state.style).forEach((key) => { message.style[key] = this.state.style[key]; });
    message.innerHTML = msg;
    return message;
  }
}

export default ShortMessage;
