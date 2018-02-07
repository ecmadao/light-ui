import cx from 'classnames';
import styles from './message.css';
import uuid from '../../shared/utils/uuid';
import objectAssign from '../../shared/utils/objectAssign';

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
      timeout = 2500,
      isMobile = false,
      type = 'positive',
    } = options;
    this.state = {
      type,
      content,
      timeout,
      isMobile,
    };
    this.timeout = null;
    this.$body = document.body;
    this.$message = this.messageTemplate();
    this.appendMessage();
  }

  setState(newState) {
    this.timeout && clearTimeout(this.timeout);
    this.timeout = null;
    const { isMobile } = this.state;
    objectAssign(this.state, newState);
    if (newState.isMobile !== undefined && newState.isMobile !== isMobile) {
      this.resetTemplate();
    }
  }

  error(msg, timeout) {
    this.$message.classList.remove(styles['positive']);
    this.$message.classList.remove(styles['tips']);
    this.$message.classList.add(styles['negative']);
    this.$message.childNodes[0].innerHTML = msg;

    this.showMessage(timeout);
  }

  notice(msg, timeout) {
    this.$message.classList.remove(styles['negative']);
    this.$message.classList.remove(styles['tips']);
    this.$message.classList.add(styles['positive']);
    this.$message.childNodes[0].innerHTML = msg;

    this.showMessage(timeout);
  }

  tips(msg, timeout) {
    this.$message.classList.remove(styles['negative']);
    this.$message.classList.remove(styles['positive']);
    this.$message.classList.add(styles['tips']);
    this.$message.childNodes[0].innerHTML = msg;

    this.showMessage(timeout);
  }

  showMessage(timeout = this.state.timeout) {
    this.$message.classList.add(styles['active']);
    this.autoHideMessage(timeout);
  }

  autoHideMessage(timeout) {
    const hideMessage = () => {
      this.$message.classList.remove(styles['active']);
    };
    this.timeout = setTimeout(hideMessage, timeout);
  }

  appendMessage() {
    this.$body.appendChild(this.$message);
    const closeIcon = this.$message.childNodes[1];
    if (!closeIcon) return;
    const closeFunc = () => {
      this.$message.classList.remove(styles['active']);
    };
    if (closeIcon.addEventListener) {
      closeIcon.addEventListener('click', closeFunc.bind(this), true);
    } else {
      closeIcon.attachEvent('onmousedown', closeFunc.bind(this));
    }
  }

  messageTemplate() {
    const { type, content, isMobile } = this.state;
    const id = uuid();
    const message = document.createElement('div');
    message.className = cx(
      styles['message_component'],
      styles[type],
      isMobile && styles['mobile_message']
    );
    message.innerHTML = `<div id="${id}" class="${styles['message_content']}">${content}</div>${isMobile ? '' : '<i class="fa fa-times" aria-hidden="true"></i>'}`;
    this.setState({ id });
    return message;
  }

  resetTemplate() {
    this.$message.remove();
    this.$message = this.messageTemplate();
    this.appendMessage();
  }
}

export default Message;
