import styles from './short_message.css';

const ShortMessage = () => {
  let messageComponent = null;
  return (() => {
    if (!messageComponent) {
      messageComponent = new MessageComponent();
    }
    return messageComponent;
  })()
};

class MessageComponent {
  constructor(timeOut = 2500) {
    this.timeOut = timeOut;
    this.$message = null;
    this.$body = document.body;
  }

  show(msg) {
    this.$message = this._messageTemplate(msg);
    this.$body.appendChild(this.$message);
    this._autoHide();
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

  _autoHide() {
    const hideMessage = () => this._hide();
    setTimeout(hideMessage, this.timeOut);
  }

  _messageTemplate(msg) {
    const message = document.createElement('div');
    message.className = styles["message-component"];
    message.innerHTML = msg;
    return message;
  }
}

export default ShortMessage;
