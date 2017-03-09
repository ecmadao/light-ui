import React from 'react';
import Button from '../components/react/Button/Button';
import IconButton from '../components/react/Button/IconButton';
import FloatingActionButton from '../components/react/Button/FloatingActionButton';

class ButtonWrapper extends React.Component {
  render() {
    const { disabled } = this.props;
    return (
      <div id="components-container">
        <h3>Button - MD Theme</h3>
        <div>
          <Button
            disabled={disabled}
            value="Green Button" />
          <Button
            disabled={disabled}
            value="Dark Button"
            color="dark"
          />
          <Button
            disabled={disabled}
            value="Blue Button"
            color="blue"
          />
          <Button
            disabled={disabled}
            value="Red Button"
            color="red"
          />
        </div>
        <div>
          <Button
            disabled={disabled}
            value="With left icon"
            color="dark"
            leftIcon={(
              <i className="fa fa-angle-left" aria-hidden="true"></i>
            )}
          />
          <Button
            disabled={disabled}
            value="With right icon"
            color="dark"
            rightIcon={(
              <i className="fa fa-angle-right" aria-hidden="true"></i>
            )}
          />
        </div>
        <h3>Button - Flat Theme</h3>
        <div>
          <Button
            disabled={disabled}
            value="Green Button"
            theme="flat"
          />
          <Button
            disabled={disabled}
            value="Dark Button"
            color="dark"
            theme="flat"
          />
          <Button
            disabled={disabled}
            value="Blue Button"
            color="blue"
            theme="flat"
          />
          <Button
            disabled={disabled}
            value="Red Button"
            color="red"
            theme="flat"
          />
        </div>
        <div>
          <Button
            disabled={disabled}
            value="With left icon"
            theme="flat"
            leftIcon={(
              <i className="fa fa-plus-circle" aria-hidden="true"></i>
            )}
          />
          <Button
            disabled={disabled}
            value="With right icon"
            theme="flat"
            rightIcon={(
              <i className="fa fa-plus-circle" aria-hidden="true"></i>
            )}
          />
        </div>
        <h3>Icon Button - Ghost Theme</h3>
        <div>
          <IconButton
            disabled={disabled}
            icon="clipboard" />
          <IconButton
            disabled={disabled}
            icon={(
              <i className="fa fa-question" aria-hidden="true"></i>
            )} />
        </div>
        <h3>Icon Button - Flat Theme</h3>
        <div>
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
        <h3>Floating Action Button</h3>
        <div>
          <FloatingActionButton
            icon="share-alt"
          />
          <FloatingActionButton
            icon="share-alt"
            style={{
              backgroundColor: '#1c7cd6'
            }}
          />
        </div>
      </div>
    )
  }
}

export default ButtonWrapper
