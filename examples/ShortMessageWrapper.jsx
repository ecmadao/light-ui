import React from 'react';
import ShortMessage from '../components/react/Modal/ShortMessage';
import Button from '../components/react/Button/Button';
import Input from '../components/react/Form/Input';

class ShortMessageWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showSMS: false,
      value: '',
      text: ''
    };
    this.reset = this.reset.bind(this);
    this.onClose = this.onClose.bind(this);
    this.onClick = this.onClick.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onTextChange = this.onTextChange.bind(this);
  }

  reset() {
    this.setState({
      showSMS: false,
      value: '',
      text: ''
    });
  }

  onClose() {
    this.setState({
      showSMS: false
    });
  }

  onClick() {
    this.setState({
      showSMS: true
    });
  }

  onChange(value) {
    this.setState({ value });
  }

  onTextChange(text) {
    this.setState({ text });
  }

  render() {
    const { showSMS, value, text } = this.state;
    let expire = parseInt(value);
    if (isNaN(expire)) { expire = 3; }

    return (
      <div id="components-container">
        {showSMS ? (
          <ShortMessage
            onClose={this.onClose}
            expire={expire * 1000}
            text={text || 'This is ShortMessage'}
          />
        ) : ''}
        <h3>Change Short Message</h3>
        <div>
          <Input
            placeholder="expire time(s)"
            value={value}
            onChange={this.onChange}
          />
          <Input
            placeholder="message content"
            value={text}
            onChange={this.onTextChange}
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
      </div>
    )
  }
}

export default ShortMessageWrapper;
