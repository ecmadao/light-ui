import styles from './short_message.css';

const ShortMessage = () => {
  let messageComponent = null;
  return (() => {
    if (!messageComponent) {
      messageComponent = new MessageComponent();
    }
    return messageComponent;
  })();
};

class MessageComponent {
  constructor(timeOut = 2500) {
    this.timeOut = timeOut;
    this.$message = null;
    this.$body = document.body;
  }

  show(msg, time = this.timeOut) {
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
    message.className = styles["message-component"];
    message.innerHTML = msg;
    return message;
  }
}

export default ShortMessage;
