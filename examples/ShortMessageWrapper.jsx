import React from 'react';
import ShortMessage from '../components/react/Modal/ShortMessage';
import RawShortMessage from '../components/raw/Modal/ShortMessage';
import Button from '../components/react/Button/Button';
import Input from '../components/react/Form/Input';

const Message = new RawShortMessage(3000);

class ShortMessageWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showSMS: false,
      expire: '',
      text: ''
    };
    this.reset = this.reset.bind(this);
    this.resetRaw = this.resetRaw.bind(this);
    this.onClick = this.onClick.bind(this);
    this.onClickRaw = this.onClickRaw.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onTextChange = this.onTextChange.bind(this);
  }

  reset() {
    this.setState({
      showSMS: false,
      expire: '',
      text: ''
    });
  }

  resetRaw() {
    Message.remove();
  }

  onClick() {
    this.setState({
      showSMS: true
    });
  }

  onClickRaw() {
    let expire = parseInt(this.state.expire);
    if (isNaN(expire)) { expire = 3; }
    Message.remove();
    Message.show(this.state.value || 'I am a Raw SMS (wrote in raw javascript)', expire * 1000);
  }

  onChange(expire) {
    this.setState({ expire });
  }

  onTextChange(text) {
    this.setState({ text });
  }

  render() {
    const { showSMS, text } = this.state;
    let expire = parseInt(this.state.expire);
    if (isNaN(expire)) { expire = 3; }

    return (
      <div id="components-container">
        {showSMS ? (
          <ShortMessage
            expire={expire * 1000}
            text={text || 'This is ShortMessage'}
          />
        ) : null}
        <h3>Change Short Message</h3>
        <div>
          <Input
            value={this.state.expire}
            required={false}
            onChange={this.onChange}
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
            value="Click to show ShortMessage"
            onClick={this.onClick}
            disabled={showSMS}
          />&nbsp;
          <Button
            value="Reset"
            color="dark"
            onClick={this.reset}
          />
        </div>
        <div>
          <Button
            value="Click to show Raw SMS (wrote in raw javascript)"
            onClick={this.onClickRaw}
            disabled={showSMS}
          />&nbsp;
          <Button
            value="Reset"
            color="dark"
            onClick={this.reset}
          />
        </div>
      </div>
    );
  }
}

export default ShortMessageWrapper;
