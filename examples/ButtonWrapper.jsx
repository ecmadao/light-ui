import React from 'react';
import Button from '../components/react/Button/BaseButton';
import IconButton from '../components/react/Button/IconButton';


class ButtonWrapper extends React.Component {
  render() {
    const { disabled } = this.props;
    return (
      <div id="components-container">
        <h3>Base Button - MD Theme</h3>
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
          value="With right icon"
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
        <br/>
        <h3>Base Button - Flat Theme</h3>
        <Button
          disabled={disabled}
          value="Base Button"
          theme="flat" />
        <Button
          disabled={disabled}
          value="With icon"
          theme="flat"
          leftIcon={(
            <i className="fa fa-plus-circle" aria-hidden="true"></i>
          )}
        />
        <br/>
        <h3>Icon Button - Ghost Theme</h3>
        <IconButton
          disabled={disabled}
          icon="clipboard" />
        <IconButton
          disabled={disabled}
          icon={(
            <i className="fa fa-question" aria-hidden="true"></i>
          )} />
        <h3>Icon Button - Flat Theme</h3>
        <IconButton
          disabled={disabled}
          icon="clipboard"
          theme="flat"
        />
        <IconButton
          disabled={disabled}
          icon={(
            <i className="fa fa-question" aria-hidden="true"></i>
          )}
          theme="flat"
        />
      </div>
    )
  }
}

export default ButtonWrapper
