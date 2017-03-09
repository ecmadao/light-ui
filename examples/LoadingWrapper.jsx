import React from 'react';
import Button from '../components/react/Button/BaseButton';
import Loading from '../components/react/Modal/Loading';
import SelectorV2 from '../components/react/Form/SelectorV2';

const LOADING_THEMES = [
  { id: 'rotate', value: 'rotate' },
  { id: 'bounce', value: 'bounce' },
];

class LoadingWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      theme: LOADING_THEMES[0].id,
      text: 'click to show loading'
    };
    this.onClose = this.onClose.bind(this);
    this.onClick = this.onClick.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(theme) {
    this.setState({ theme })
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
    const { loading, text, theme } = this.state;
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
      <div id="components-container">
        <SelectorV2
          value={theme}
          options={LOADING_THEMES}
          theme="flat"
          color="white"
          onChange={this.onChange}
        />
        <div>
          <Button
            color="dark"
            onClick={this.onClick}
            value="Click to loading"
          />
          &nbsp;<span>{text}</span>
        </div>
        <Loading
          theme={theme}
          closeAble={closeAble}
          loading={loading}
          onClose={onClose}
          style={style}
        />
      </div>
    )
  }
}

export default LoadingWrapper
