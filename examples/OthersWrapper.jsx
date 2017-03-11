import React from 'react';
import Label from '../components/react/Others/Label';

class OthersWrapper extends React.Component {
  render() {
    const { disabled } = this.props;

    return (
      <div id="components-container">
        <h3>Label</h3>
        <h4>Clickable Label</h4>
        <div>
          <Label text="click me" theme="ghost"/>
          <Label text="click me" theme="flat"/>
          <Label text="click me" />
        </div>
        <h4>Unclickable Label</h4>
        <div>
          <Label
            clickable={false}
            text="can not click"
            theme="ghost"/>
          <Label
            clickable={false}
            text="can not click"
            theme="flat"/>
          <Label
            clickable={false}
            text="can not click" />
        </div>
        <h4>Label with icon</h4>
        <div>
          <Label
            icon="code-fork"
            theme="ghost"
            text="fork me"/>
          <Label
            icon="code-fork"
            theme="flat"
            text="fork me"/>
          <Label icon="code-fork" text="fork me" />
        </div>
      </div>
    )
  }
}

export default OthersWrapper;
