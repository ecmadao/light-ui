
import React from 'react';
import SelectorV2 from '../components/react/Form/SelectorV2';
import styles from './shared/styles.css';

const OPTIONS = [
  { id: 0, value: '1' },
  { id: 1, value: 'selector 1' },
  { id: 2, value: 'selector 2' },
  { id: 3, value: 'this is long selector' },
  { id: 4, value: 'disabled section', disabled: true }
];

class CustomSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      selected: OPTIONS[0].id
    };
    this.onChange = this.onChange.bind(this);
    this.onSelect = this.onSelect.bind(this);
  }

  onChange(value) {
    this.setState({ value });
  }

  onSelect(selected) {
    this.setState({ selected });
  }

  render() {
    const { value, selected } = this.state;
    const { disabled } = this.props;

    return (
      <div id="components-container">
        <h3>SelectorV2 - Custom Style</h3>
        <h4>Flexable width</h4>
        <div>
          <SelectorV2
            flexable
            value={selected}
            disabled={disabled}
            options={OPTIONS}
            onChange={this.onSelect}
            className={styles.selector}
            showArrow={false}
            optionClassName={styles.option}
            selectedClassName={styles.selected}
          />
        </div>
        <div>
          <SelectorV2
            flexable
            value={selected}
            disabled={disabled}
            options={OPTIONS}
            onChange={this.onSelect}
            className={styles.selector}
            optionClassName={styles.option}
            selectedClassName={styles.selected}
          />
        </div>
        <h4>Fixed width</h4>
        <div>
          <SelectorV2
            value={selected}
            disabled={disabled}
            options={OPTIONS}
            onChange={this.onSelect}
            className={styles.selector}
            optionClassName={styles.option}
            selectedClassName={styles.selected}
          />
        </div>
      </div>
    );
  }
}

export default CustomSelector;
