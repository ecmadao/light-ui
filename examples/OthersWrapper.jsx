import React from 'react';
import Label from '../components/react/Others/Label';
import Switcher from '../components/react/Others/Switcher';

class OthersWrapper extends React.Component {
  render() {
    const { disabled } = this.props;

    return (
      <div id="components-container">
        <h3>Label</h3>
        <h4>...can be delete or click</h4>
        <div>
          <Label
            disabled={disabled}
            text="click me"
            theme="ghost"
            deleteable
          />
          <Label
            disabled={disabled}
            text="click me"
            theme="flat"
            deleteable
          />
          <Label
            disabled={disabled}
            text="click me"
            deleteable
          />
        </div>

        <h4>...can be click, can not delete</h4>
        <div>
          <Label
            disabled={disabled}
            text="click me"
            theme="ghost"
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
            theme="ghost"/>
          <Label
            disabled={disabled}
            clickable={false}
            text="can not click"
            theme="flat"/>
          <Label
            disabled={disabled}
            clickable={false}
            text="can not click" />
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

        <h3>Switcher</h3>
        <h4>Normal size</h4>
        <div>
          <Switcher disabled={disabled} checked={true} />
          <Switcher disabled={disabled} checked={true} version="v2" />
          <br/>
          <Switcher disabled={disabled} checked={true} version="v3" />
        </div>
        <h4>Small size</h4>
        <div>
          <Switcher disabled={disabled} checked={true} size="small"/>
          <Switcher disabled={disabled} checked={true} size="small" version="v2" />
          <br/>
          <Switcher disabled={disabled} checked={true} size="small" version="v3" />
        </div>
        <h4>Mini size</h4>
        <div>
          <Switcher disabled={disabled} checked={true} size="mini"/>
          <Switcher disabled={disabled} checked={true} size="mini" version="v2" />
          <br/>
          <Switcher disabled={disabled} checked={true} size="mini" version="v3" />
        </div>
      </div>
    );
  }
}

export default OthersWrapper;
