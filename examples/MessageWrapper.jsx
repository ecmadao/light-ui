import React from 'react';
import Button from '../components/react/Button/Button';
import Input from '../components/react/Form/Input';
import Message from '../components/raw/Message';

const message = new Message();

class MessageWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expire: '',
      text: 'change message content'
    };
    this.onClick = this.onClick.bind(this);
    this.onExpireChange = this.onExpireChange.bind(this);
    this.onTextChange = this.onTextChange.bind(this);
  }

  onExpireChange(expire) {
    this.setState({ expire });
  }

  onTextChange(text) {
    this.setState({ text });
  }

  onClick() {
    let expire = parseInt(this.state.expire);
    if (isNaN(expire)) { expire = 3000; }
    message.notice(this.state.text, expire);
  }

  render() {
    const { showSMS, text } = this.state;
    return (
      <div id="components-container">
        <h3>Change Message</h3>
        <div>
          <Input
            value={this.state.expire}
            required={false}
            onChange={this.onExpireChange}
            placeholder="expire time (s)"
          />
          <Input
            value={text}
            required={false}
            onChange={this.onTextChange}
            placeholder="message content"
          />
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
