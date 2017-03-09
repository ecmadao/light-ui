import React from 'react';
import ShortMessage from '../components/react/Modal/ShortMessage';
import Button from '../components/react/Button/BaseButton';
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
            text={text || 'This is SMS'}
          />
        ) : ''}
        <h3>修改 SMS</h3>
        <div>
          <Input
            placeholder="显示的时间(单位: s)"
            value={value}
            onChange={this.onChange}
          />
          <Input
            placeholder="消息内容"
            value={text}
            onChange={this.onTextChange}
          />
        </div>
        <div>
          <Button
            value="Click to show SMS"
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
