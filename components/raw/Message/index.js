import cx from 'classnames';
import styles from './message.css';

const Message = (...args) => {
  let messageComponent = null;
  return (() => {
    if (!messageComponent) {
      messageComponent = new MessageComponent(...args);
    }
    return messageComponent;
  })();
};

class MessageComponent {
  constructor(content = '', type = 'positive', timeOut = 2500) {
    this.timeOut = timeOut;
    this.type = type;
    this.$body = document.body;
    this.$message = this.messageTemplate(content);
    this.appendMessage();
  }

  error(msg, timeOut) {
    this.$message.classList.remove(styles['positive']);
    this.$message.classList.remove(styles['tips']);
    this.$message.classList.add(styles['negative']);
    this.$message.childNodes[0].innerHTML = msg;

    this.showMessage(timeOut);
  }

  notice(msg, timeOut) {
    this.$message.classList.remove(styles['negative']);
    this.$message.classList.remove(styles['tips']);
    this.$message.classList.add(styles['positive']);
    this.$message.childNodes[0].innerHTML = msg;

    this.showMessage(timeOut);
  }

  tips(msg, timeOut) {
    this.$message.classList.remove(styles['negative']);
    this.$message.classList.remove(styles['positive']);
    this.$message.classList.add(styles['tips']);
    this.$message.childNodes[0].innerHTML = msg;

    this.showMessage(timeOut);
  }

  showMessage(timeOut = this.timeOut) {
    this.$message.classList.add(styles['active']);
    this.autoHideMessage(timeOut);
  }

  autoHideMessage(timeOut) {
    const hideMessage = () => {
      this.$message.classList.remove(styles['active']);
    };
    setTimeout(hideMessage, timeOut);
  }

  appendMessage() {
    this.$body.appendChild(this.$message);
    const closeIcon = this.$message.childNodes[1];
    const closeFunc = () => {
      this.$message.classList.remove(styles['active']);
    };
    if (closeIcon.addEventListener) {
      closeIcon.addEventListener('click', closeFunc.bind(this), true);
    } else {
      closeIcon.attachEvent('onmousedown', closeFunc.bind(this));
    }
  }

  messageTemplate(content) {
    const message = document.createElement('div');
    message.className = cx(styles['message_component'], styles[this.type]);
    message.innerHTML = `<div class="${styles['message_content']}">${content}</div><i class="fa fa-times" id="message_close_icon" aria-hidden="true"></i>`;
    return message;
  }
}

export default Message;
