import React from 'react';
import Button from '../components/react/Button/Button';
import Input from '../components/react/Form/Input';
import Switcher from '../components/react/Switcher';
import SelectorV2 from '../components/react/Form/SelectorV2';
import Message from '../components/raw/Message';
import styles from './shared/styles.css';

const message = new Message();

const OPTIONS = [
  { id: 'banner', value: 'banner' },
  { id: 'notify', value: 'notify' },
];

class MessageWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ttl: '',
      text: '',
      isMobile: false,
      theme: OPTIONS[0].id,
    };
    this.onClick = this.onClick.bind(this);
    this.onSwitch = this.onSwitch.bind(this);
    this.onSelect = this.onSelect.bind(this);
    this.onttlChange = this.onttlChange.bind(this);
    this.onTextChange = this.onTextChange.bind(this);
  }

  onttlChange(ttl) {
    this.setState({ ttl });
  }

  onTextChange(text) {
    this.setState({ text });
  }

  onSelect(theme) {
    message.update({ theme });
    this.setState({ theme });
  }

  onSwitch() {
    message.update({
      isMobile: !this.state.isMobile
    });
    this.setState({
      isMobile: !this.state.isMobile
    });
  }

  onClick() {
    let ttl = parseInt(this.state.ttl);
    if (isNaN(ttl)) { ttl = 3; }
    message.notice(this.state.text || 'message content', ttl * 1000);
  }

  render() {
    const { showSMS, text, isMobile, theme } = this.state;
    return (
      <div id="componentsContainer">
        <h3>Change Message</h3>
        <div>
          <Input
            required={false}
            placeholder="ttl (s)"
            value={this.state.ttl}
            onChange={this.onttlChange}
          />
          <Input
            value={text}
            required={false}
            onChange={this.onTextChange}
            placeholder="message content"
          />
          <SelectorV2
            theme="flat"
            value={theme}
            options={OPTIONS}
            onChange={this.onSelect}
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
            disabled={showSMS}
            onClick={this.onClick}
            value="Click to show Message"
          />
        </div>
      </div>
    );
  }
}

export default MessageWrapper;
