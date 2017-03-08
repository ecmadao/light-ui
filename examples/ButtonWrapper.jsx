import React from 'react';
import Button from '../components/react/Button';


class ButtonWrapper extends React.Component {
  render() {
    const { disabled } = this.props;
    return (
      <div id="components-container">
        <h3>MD Theme</h3>
        <Button
          disabled={disabled}
          value="Base Button" />
        <Button
          disabled={disabled}
          value="Dark Button"
          color="dark"
        />
        <Button
          disabled={disabled}
          value="with right icon"
          color="dark"
          rightIcon={(
            <i className="fa fa-angle-right" aria-hidden="true"></i>
          )}
        />
        <Button
          disabled={disabled}
          value="With left icon"
          color="dark"
          leftIcon={(
            <i className="fa fa-angle-left" aria-hidden="true"></i>
          )}
        />
        <br/><br/>
        <h3>Flat Theme</h3>
        <Button
          disabled={disabled}
          value="Base Button"
          style="flat" />
        <Button
          disabled={disabled}
          value="With icon"
          style="flat"
          leftIcon={(
            <i className="fa fa-plus-circle" aria-hidden="true"></i>
          )}
        />
      </div>
    )
  }
}

export default ButtonWrapper
