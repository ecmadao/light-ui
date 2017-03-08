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
    this.$message = this.messageTemplate(msg);
    this.$body.appendChild(this.$message);
    this.autoHide();
  }

  hide() {
    this.$body.removeChild(this.$message);
  }

  autoHide() {
    const hideMessage = () => this.hide();
    setTimeout(hideMessage, this.timeOut);
  }

  messageTemplate(msg) {
    const message = document.createElement('div');
    message.className = styles["message-component"];
    message.innerHTML = msg;
    return message;
  }
}

export default ShortMessage;
