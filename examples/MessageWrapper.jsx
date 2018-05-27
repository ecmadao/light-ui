import React from 'react';
import Button from '../components/react/Button/Button';
import Input from '../components/react/Form/Input';
import Switcher from '../components/react/Switcher';
import Message from '../components/raw/Message';
import styles from './shared/styles.css';

const message = new Message();

class MessageWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ttl: '',
      text: '',
      isMobile: false
    };
    this.onClick = this.onClick.bind(this);
    this.onSwitch = this.onSwitch.bind(this);
    this.onttlChange = this.onttlChange.bind(this);
    this.onTextChange = this.onTextChange.bind(this);
  }

  onttlChange(ttl) {
    this.setState({ ttl });
  }

  onTextChange(text) {
    this.setState({ text });
  }

  onSwitch() {
    this.setState({
      isMobile: !this.state.isMobile
    });
    message.setState({
      isMobile: !this.state.isMobile
    });
  }

  onClick() {
    let ttl = parseInt(this.state.ttl);
    if (isNaN(ttl)) { ttl = 3; }
    message.notice(this.state.text || 'message content', ttl * 1000);
  }

  render() {
    const { showSMS, text, isMobile } = this.state;
    return (
      <div id="components-container">
        <h3>Change Message</h3>
        <div>
          <Input
            value={this.state.ttl}
            required={false}
            onChange={this.onttlChange}
            placeholder="ttl (s)"
          />
          <Input
            value={text}
            required={false}
            onChange={this.onTextChange}
            placeholder="message content"
          />
        </div>
        <div className={styles.lineItem}>
          <div className={styles.lineText}>
            模拟手机端通知/Simulate Message In Mobile
          </div>
          <Switcher checked={isMobile} onChange={this.onSwitch} version="v2" />
        </div>
        <div>
          <Button
            value="Click to show Message"
            onClick={this.onClick}
            disabled={showSMS}
          />
        </div>
      </div>
    );
  }
}

export default MessageWrapper;
