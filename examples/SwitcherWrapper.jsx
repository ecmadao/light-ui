
import React from 'react';
import Switcher from '../components/react/Switcher';

class SwitcherWrapper extends React.Component {
  render() {
    const { disabled } = this.props;

    return (
      <div id="components-container">
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

export default SwitcherWrapper;
