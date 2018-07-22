
import React from 'react';
import cx from 'classnames';
import Dropdown from '../components/react/Dropdown';
import Switcher from '../components/react/Switcher';
import Button from '../components/react/Button/Button';
import IconButton from '../components/react/Button/IconButton';
import FloatingActionButton from '../components/react/Button/FloatingActionButton';
import styles from './shared/styles.css';

const MENUS = [
  { id: 0, value: 'menu 1' },
  { id: 1, value: 'menu 2' },
  { id: 2, value: 'menu 3' },
  { id: 3, value: 'this is long menu this is long menu' },
];

class DropdownWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeMenu: MENUS[0].id,
      switchers: [
        false,
        true,
        false,
      ]
    };
    this.onSelect = this.onSelect.bind(this);
  }

  onSelect(activeMenu) {
    this.setState({ activeMenu });
  }

  renderMenus(dark) {
    const { activeMenu } = this.state;
    return MENUS.map((menu, index) => {
      return (
        <div
          key={`menu-${index}`}
          onClick={() => this.onSelect(menu.id)}
          className={cx(
            styles.menu,
            dark && styles['menuDark'],
            menu.id === activeMenu && styles.active
          )}
        >
          {menu.value}
        </div>
      );
    });
  }

  onSwitch(index) {
    return (checked) => {
      const { switchers } = this.state;
      this.setState({
        switchers: [
          ...switchers.slice(0, index),
          checked,
          ...switchers.slice(index + 1)
        ]
      });
    };
  }

  renderOperactionMenus() {
    const { switchers } = this.state;

    return switchers.map((checked, index) => (
      <div
        key={index}
        className={cx(
          styles.operationMenu,
        )}
      >
        <Switcher
          size="mini"
          version="v3"
          checked={checked}
          onChange={this.onSwitch(index)}
        />
        &nbsp;&nbsp;&nbsp;&nbsp;
        {checked ? 'checked' : 'uncheck'}
      </div>
    ));
  }

  renderDropdownButton() {
    return (
      <Button
        theme="flat"
        value="Dropdown"
        className={styles.button}
      />
    );
  }

  render() {
    const { value, selected } = this.state;
    const { disabled } = this.props;

    return (
      <div id="componentsContainer">
        <h3>Dropdown</h3>
        <div>
          <Dropdown
            showArrow={false}
            disabled={disabled}
            showPanelTriangle={false}
            content={this.renderMenus()}
            className={styles.dropdown}
            button={(
              <IconButton
                theme="flat"
                icon="cog"
                className={styles.button}
              />
            )}
            menuPanelClassName={styles.menuPanel}
            buttonClassName={styles.dropdownTrigger}
          />
        </div>
        <br />
        <div>
          <Dropdown
            showArrow
            showPanelTriangle
            disabled={disabled}
            content={this.renderMenus()}
            className={styles.dropdown}
            button={(
              <Button
                theme="flat"
                value="Dropdown"
                className={styles.button}
              />
            )}
            menuPanelClassName={styles['menuPanel-2']}
            buttonClassName={styles.dropdownTrigger}
          />
        </div>
        <br />
        <div>
          <Dropdown
            showArrow
            showPanelTriangle
            disabled={disabled}
            content={this.renderMenus(true)}
            className={styles.dropdown}
            button={(
              <Button
                color="dark"
                theme="material"
                value="Dropdown"
                className={styles.button}
              />
            )}
            menuPanelClassName={styles['menuPanel-2-dark']}
            buttonClassName={styles.dropdownTrigger}
          />
        </div>
        <br />
        <div>
          <Dropdown
            showArrow={false}
            disabled={disabled}
            closeOnClick={false}
            showPanelTriangle={false}
            content={this.renderOperactionMenus()}
            className={styles.dropdown}
            button={(
              <IconButton
                theme="flat"
                icon="cog"
                className={styles.buttonLarge}
              />
            )}
            menuPanelClassName={styles.menuPanel}
            buttonClassName={styles.dropdownTrigger}
          />
        </div>
        <br />
        <div>
          <Dropdown
            showArrow={false}
            disabled={disabled}
            closeOnClick={false}
            showPanelTriangle={false}
            content={this.renderOperactionMenus()}
            className={styles.dropdown}
            button={(
              <FloatingActionButton
                icon="cog"
                color="white"
                className={styles.buttonCirle}
              />
            )}
            menuPanelClassName={styles.menuPanel}
            buttonClassName={styles.dropdownTrigger}
          />
        </div>
      </div>
    );
  }
}

export default DropdownWrapper;
