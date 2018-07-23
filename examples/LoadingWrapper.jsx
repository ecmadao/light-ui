import React from 'react';
import Button from '../components/react/Button/Button';
import Loading from '../components/react/Modal/Loading';
import SelectorV2 from '../components/react/Form/SelectorV2';

const LOADING_THEMES = [
  { id: 'rotate', value: 'rotate' },
  { id: 'bounce', value: 'bounce' },
];

const LOADING_COLORS = [
  { id: 'light', value: 'light' },
  { id: 'dark', value: 'dark' },
];

class LoadingWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      theme: LOADING_THEMES[0].id,
      color: LOADING_COLORS[0].id,
      text: 'click to show loading'
    };
    this.onClose = this.onClose.bind(this);
    this.onClick = this.onClick.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(key) {
    return val => this.setState({ [key]: val });
  }

  onClose() {
    this.setState({
      text: 'loading is closed'
    });
  }

  onClick() {
    this.setState({
      loading: true
    });
  }

  render() {
    const { loading, text, theme, color } = this.state;
    const { closeAble, hasCloseCallback, customStyle } = this.props;
    const onClose = hasCloseCallback ? this.onClose : null;
    const style = customStyle ? {
      position: 'fixed',
      top: '0',
      right: '0',
      bottom: '0',
      left: '0'
    } : {};
    return (
      <div id="componentsContainer">
        <SelectorV2
          value={theme}
          theme="flat"
          color="white"
          options={LOADING_THEMES}
          onChange={this.onChange('theme')}
        />
        &nbsp;&nbsp;
        <SelectorV2
          value={color}
          theme="flat"
          color="white"
          options={LOADING_COLORS}
          onChange={this.onChange('color')}
        />
        <div>
          <Button
            color="dark"
            onClick={this.onClick}
            value="Click to loading"
          />
          &nbsp;
          <span>{text}</span>
        </div>
        <Loading
          style={style}
          theme={theme}
          color={color}
          loading={loading}
          onClose={onClose}
          closeAble={closeAble}
        />
      </div>
    );
  }
}

export default LoadingWrapper;
