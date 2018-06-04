
import React from 'react';
import cx from 'classnames';
import Dropdown from '../components/react/Dropdown';
import styles from './shared/styles.css';
import icons from '../lib/shared/utils/icons';

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
      activeMenu: MENUS[0].id
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
            dark && styles['menu-dark'],
            menu.id === activeMenu && styles.active
          )}
        >
          {menu.value}
        </div>
      );
    });
  }

  renderDropdownButton() {
    return (
      <div className={styles.dropdownButton}>Dropdown</div>
    );
  }

  render() {
    const { value, selected } = this.state;
    const { disabled } = this.props;

    return (
      <div id="components-container">
        <h3>Dropdown</h3>
        <div>
          <Dropdown
            showArrow={false}
            disabled={disabled}
            showPanelTriangle={false}
            content={this.renderMenus()}
            className={styles.dropdown}
            button={this.renderDropdownButton()}
            menuPanelClassName={styles.menuPanel}
            buttonClassName={styles.dropdownTrigger}
          />
        </div>
        <div>
          <Dropdown
            showArrow
            showPanelTriangle
            disabled={disabled}
            content={this.renderMenus()}
            className={styles.dropdown}
            button={this.renderDropdownButton()}
            menuPanelClassName={styles['menuPanel-2']}
            buttonClassName={styles.dropdownTrigger}
          />
        </div>
        <div>
          <Dropdown
            showArrow
            showPanelTriangle
            disabled={disabled}
            content={this.renderMenus(true)}
            className={styles.dropdown}
            button={this.renderDropdownButton()}
            menuPanelClassName={styles['menuPanel-2-dark']}
            buttonClassName={styles.dropdownTrigger}
          />
        </div>
      </div>
    );
  }
}

export default DropdownWrapper;
