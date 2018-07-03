
import React from 'react';
import Label from '../components/react/Label';

class LabelWrapper extends React.Component {
  render() {
    const { disabled } = this.props;

    console.log(`disabled: ${disabled}`);

    return (
      <div id="componentsContainer">
        <h3>Label</h3>
        <h4>...can be delete or click</h4>
        <div>
          <Label
            deleteable
            theme="ghost"
            text="click me"
            disabled={disabled}
          />
          <Label
            deleteable
            theme="flat"
            text="click me"
            disabled={disabled}
          />
          <Label
            deleteable
            text="click me"
            disabled={disabled}
          />
        </div>

        <h4>...can be click, can not delete</h4>
        <div>
          <Label
            theme="ghost"
            text="click me"
            disabled={disabled}
          />
          <Label
            disabled={disabled}
            text="click me"
            theme="flat"
          />
          <Label
            disabled={disabled}
            text="click me"
          />
        </div>

        <h4>...can not be click</h4>
        <div>
          <Label
            disabled={disabled}
            clickable={false}
            text="can not click"
            theme="ghost"
          />
          <Label
            disabled={disabled}
            clickable={false}
            text="can not click"
            theme="flat"
          />
          <Label
            disabled={disabled}
            clickable={false}
            text="can not click"
          />
        </div>

        <h4>...with icon</h4>
        <div>
          <Label
            disabled={disabled}
            icon="code-fork"
            theme="ghost"
            text="fork me"
          />
          <Label
            disabled={disabled}
            icon="code-fork"
            theme="flat"
            text="fork me"
          />
          <Label
            disabled={disabled}
            icon="code-fork"
            text="fork me"
          />
        </div>

        <h4>...min size</h4>
        <div>
          <Label
            min
            disabled={disabled}
            icon="code-fork"
            theme="flat"
            text="fork me"
          />
          <Label
            min
            disabled={disabled}
            text="click me"
            theme="flat"
            deleteable
          />
        </div>
      </div>
    );
  }
}

export default LabelWrapper;
