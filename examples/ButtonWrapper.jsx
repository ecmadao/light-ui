import React from 'react';
import Button from '../components/react/Button/Button';
import IconButton from '../components/react/Button/IconButton';
import ButtonGroup from '../components/react/Button/ButtonGroup';
import ClassicButton from '../components/react/Button/ClassicButton';
import FloatingActionButton from '../components/react/Button/FloatingActionButton';

class ButtonWrapper extends React.Component {
  onClick() {
    console.log('clicked');
  }

  render() {
    const { disabled } = this.props;
    return (
      <div id="componentsContainer">
        <h3>Button - MD Theme</h3>
        <div>
          <Button
            onClick={this.onClick.bind(this)}
            disabled={disabled}
            value="Green Button"
          />
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
            color="dark"
            disabled={disabled}
            value="With left icon"
            leftIcon={(<i className="fa fa-angle-left" aria-hidden="true" />)}
          />
          <Button
            color="dark"
            disabled={disabled}
            value="With right icon"
            rightIcon={(<i className="fa fa-angle-right" aria-hidden="true" />)}
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
            theme="flat"
            disabled={disabled}
            value="With left icon"
            leftIcon={(<i className="fa fa-plus-circle" aria-hidden="true" />)}
          />
          <Button
            theme="flat"
            disabled={disabled}
            value="With right icon"
            rightIcon={(<i className="fa fa-plus-circle" aria-hidden="true" />)}
          />
        </div>
        <h3>Button - Ghost Theme</h3>
        <div>
          <Button
            disabled={disabled}
            value="Green Button"
            theme="ghost"
          />
          <Button
            disabled={disabled}
            value="Dark Button"
            color="dark"
            theme="ghost"
          />
          <Button
            disabled={disabled}
            value="Blue Button"
            color="blue"
            theme="ghost"
          />
          <Button
            disabled={disabled}
            value="Red Button"
            color="red"
            theme="ghost"
          />
        </div>
        <div>
          <Button
            theme="ghost"
            disabled={disabled}
            value="With left icon"
            leftIcon={(<i className="fa fa-plus-circle" aria-hidden="true" />)}
          />
          <Button
            theme="ghost"
            disabled={disabled}
            value="With right icon"
            rightIcon={(<i className="fa fa-plus-circle" aria-hidden="true" />)}
          />
        </div>
        <h3>Icon Button - Ghost Theme</h3>
        <div>
          <IconButton
            disabled={disabled}
            icon="clipboard"
          />
          <IconButton
            disabled={disabled}
            icon={(<i className="fa fa-question" aria-hidden="true" />)}
          />
        </div>
        <div>
          <IconButton
            disabled={disabled}
            icon="clipboard"
            color="green"
          />
          <IconButton
            disabled={disabled}
            icon="clipboard"
            color="blue"
          />
          <IconButton
            disabled={disabled}
            icon="clipboard"
            color="gray"
          />
          <IconButton
            disabled={disabled}
            icon="clipboard"
            color="dark"
          />
        </div>
        <h3>Icon Button - Flat Theme</h3>
        <div>
          <IconButton
            disabled={disabled}
            icon="clipboard"
            theme="flat"
          />
          <IconButton
            theme="flat"
            disabled={disabled}
            icon={(<i className="fa fa-question" aria-hidden="true"></i>)}
          />
        </div>
        <div>
          <IconButton
            disabled={disabled}
            icon="clipboard"
            theme="flat"
            color="green"
          />
          <IconButton
            disabled={disabled}
            icon="clipboard"
            theme="flat"
            color="blue"
          />
          <IconButton
            disabled={disabled}
            icon="clipboard"
            theme="flat"
            color="gray"
          />
          <IconButton
            disabled={disabled}
            icon="clipboard"
            theme="flat"
            color="dark"
          />
        </div>
        <h3>Classic Button</h3>
        <div>
          <ClassicButton
            theme="dark"
            content="classic button"
          />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <ClassicButton
            theme="light"
            content="classic button"
          />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <ClassicButton
            theme="green"
            content="classic button"
          />
        </div>
        <h3>Icon Button Group</h3>
        <div>
          <ButtonGroup color="white" disabled={disabled}>
            <IconButton
              active
              color="dark"
              icon="clipboard"
            />
            <IconButton
              color="dark"
              icon="font"
            />
            <IconButton
              color="dark"
              icon="bold"
            />
          </ButtonGroup>
          <ButtonGroup theme="flat" color="white" disabled={disabled}>
            <IconButton
              active
              color="dark"
              icon="clipboard"
            />
            <IconButton
              color="dark"
              icon="font"
            />
            <IconButton
              color="dark"
              icon="bold"
            />
          </ButtonGroup>
        </div>
        <div>
          <ButtonGroup theme="flat" color="blue" disabled={disabled}>
            <Button
              value="Blue Button"
            />
            <Button
              value="Blue Button"
            />
          </ButtonGroup>
          <ButtonGroup theme="flat" color="dark" disabled={disabled}>
            <Button
              value="With left icon"
              leftIcon={(<i className="fa fa-angle-left" aria-hidden="true" />)}
            />
            <Button
              value="With right icon"
              rightIcon={(<i className="fa fa-angle-right" aria-hidden="true" />)}
            />
          </ButtonGroup>
        </div>
        <div>
          <ButtonGroup theme="flat" color="dark" disabled={disabled}>
            <Button
              disabled={disabled}
              value="With left icon"
              leftIcon={(<i className="fa fa-angle-left" aria-hidden="true" />)}
            />
            <Button
              disabled={disabled}
              value="Button"
            />
            <Button
              disabled={disabled}
              value="With right icon"
              rightIcon={(<i className="fa fa-angle-right" aria-hidden="true" />)}
            />
          </ButtonGroup>
        </div>
        <h3>Floating Action Button</h3>
        <div>
          <FloatingActionButton
            icon="share-alt"
            disabled={disabled}
          />
          <FloatingActionButton
            icon="share-alt"
            disabled={disabled}
            color="blue"
          />
        </div>
      </div>
    );
  }
}

export default ButtonWrapper;
