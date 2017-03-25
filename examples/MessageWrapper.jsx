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
    message.notice(this.state.text, this.state.expire);
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
          />&nbsp;
          {/* <Button
            value="Reset"
            color="dark"
            onClick={this.reset}
          /> */}
        </div>
      </div>
    );
  }
}

export default MessageWrapper;
