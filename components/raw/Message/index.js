
import cx from 'classnames';
import styles from './message.css';
import helper from '../../shared/utils/helper';

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
  constructor(options = {}) {
    const {
      content = '',
      className = '',
      timeout = 2500,
      showClose = true,
      isMobile = false,
      theme = 'banner',
      type = 'positive',
    } = options;
    this.state = {
      type,
      theme,
      content,
      timeout,
      isMobile,
      showClose,
      className,
    };
    this.timeout = null;
    this.$body = document.body;

    this.resetTemplate();
  }

  update(options) {
    this._setState(options);
  }

  _setState(newState) {
    this.timeout && clearTimeout(this.timeout);
    this.timeout = null;
    Object.assign(this.state, newState);
    this.resetTemplate();
  }

  error(msg, timeout) {
    this.$message.classList.remove(styles.positive);
    this.$message.classList.remove(styles.tips);
    this.$message.classList.add(styles.negative);
    this.$message.childNodes[0].innerHTML = msg;

    this.showMessage(timeout);
  }

  notice(msg, timeout) {
    this.$message.classList.remove(styles.negative);
    this.$message.classList.remove(styles.tips);
    this.$message.classList.add(styles.positive);
    this.$message.childNodes[0].innerHTML = msg;

    this.showMessage(timeout);
  }

  tips(msg, timeout) {
    this.$message.classList.remove(styles.negative);
    this.$message.classList.remove(styles.positive);
    this.$message.classList.add(styles.tips);
    this.$message.childNodes[0].innerHTML = msg;

    this.showMessage(timeout);
  }

  showMessage(timeout = this.state.timeout) {
    this.$message.classList.add(styles.active);
    this.autoHideMessage(timeout);
  }

  autoHideMessage(timeout) {
    const hideMessage = () => {
      this.$message.classList.remove(styles.active);
    };
    this.timeout = setTimeout(hideMessage, timeout);
  }

  appendMessage() {
    this.$body.appendChild(this.$message);
    const closeIcon = this.$message.childNodes[1];
    if (!closeIcon) return;

    const closeFunc = () => {
      this.$message.classList.remove(styles.active);
    };
    if (closeIcon.addEventListener) {
      closeIcon.addEventListener('click', closeFunc.bind(this), true);
    } else {
      closeIcon.attachEvent('onmousedown', closeFunc.bind(this));
    }
  }

  messageTemplate() {
    const { className, type, content, theme, isMobile, showClose } = this.state;
    const id = helper.uuid();
    const message = document.createElement('div');
    message.className = cx(
      styles.messageComponent,
      styles[type],
      styles[theme],
      isMobile && styles.mobileMessage,
      className
    );

    message.innerHTML = `<div id="${id}" class="${styles.messageContent}">${content}</div>${!showClose ? '' : '<i class="fa fa-close" aria-hidden="true"></i>'}`;
    this.state.id = id;
    return message;
  }

  resetTemplate() {
    this.$message && this.$message.remove();
    this.$message = this.messageTemplate();
    this.appendMessage();
  }
}

export default Message;
