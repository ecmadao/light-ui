
import styles from './short_message.css';

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
    this.timeout = timeout;
    this.$message = null;
    this.$body = document.body;
    this.style = options.style || {};
  }

  show(msg, time = this.timeout) {
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
    message.className = styles.messageComponent;
    Object.keys(this.style).forEach((key) => { message.style[key] = this.style[key]; });
    message.innerHTML = msg;
    return message;
  }
}

export default ShortMessage;
