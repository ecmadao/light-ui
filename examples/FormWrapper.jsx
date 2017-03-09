import React from 'react';
import Input from '../components/react/Form/Input';
import Selector from '../components/react/Form/Selector';
import SelectorV2 from '../components/react/Form/SelectorV2';
import Textarea from '../components/react/Form/Textarea';


const OPTIONS = [
  { id: 0, value: 'selector 0' },
  { id: 1, value: 'selector 1' },
  { id: 2, value: 'selector 2' },
  { id: 3, value: 'selector 3' }
];

class FormWrapper extends React.Component {
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
    this.setState({ value })
  }

  onSelect(selected) {
    this.setState({ selected })
  }

  render() {
    const { value, selected } = this.state;
    const { disabled, clearIcon } = this.props;

    return (
      <div id="components-container">
        <h3>Input</h3>
        <h4>material theme</h4>
        <div>
          <Input
            value={value}
            placeholder="material theme"
            disabled={disabled}
            onChange={this.onChange}
          />
        </div>
        <h4>flat theme</h4>
        <div>
          <Input
            value={value}
            theme="flat"
            placeholder="flat theme"
            disabled={disabled}
            onChange={this.onChange}
          />
        </div>
        <h4>borderless theme</h4>
        <div>
          <Input
            value={value}
            theme="borderless"
            placeholder="borderless theme"
            disabled={disabled}
            onChange={this.onChange}
          />&nbsp;&nbsp;&nbsp;
          <Input
            value={value}
            theme="borderless"
            style="underline"
            placeholder="borderless theme"
            disabled={disabled}
            onChange={this.onChange}
          />
        </div>
        <h4>validator</h4>
        <div>
          <Input
            value={value}
            type="email"
            placeholder="email"
            disabled={disabled}
            onChange={this.onChange}
          />
          <Input
            value={value}
            type="phone"
            placeholder="phone"
            disabled={disabled}
            onChange={this.onChange}
          />
        </div>
        <h3>Textarea</h3>
        <div>
          <Textarea
            max="200"
            value={value}
            placeholder="textarea"
            type="textarea"
            onChange={this.onChange}
          />
        </div>
        <h3>Selector</h3>
        <h4>material theme</h4>
        <div>
          <Selector
            value={selected}
            disabled={disabled}
            options={OPTIONS}
            onChange={this.onSelect}
          />
        </div>
        <h4>flat theme</h4>
        <div>
          <Selector
            value={selected}
            theme="flat"
            disabled={disabled}
            options={OPTIONS}
            onChange={this.onSelect}
          />
        </div>
        <h3>SelectorV2</h3>
        <h4>material theme</h4>
        <div>
          <SelectorV2
            value={selected}
            disabled={disabled}
            options={OPTIONS}
            onChange={this.onSelect}
          />
          <SelectorV2
            value={selected}
            disabled={disabled}
            options={OPTIONS}
            color="blue"
            onChange={this.onSelect}
          />
          <SelectorV2
            value={selected}
            disabled={disabled}
            options={OPTIONS}
            color="white"
            onChange={this.onSelect}
          />
        </div>
        <h4>flat theme</h4>
        <div>
          <SelectorV2
            value={selected}
            disabled={disabled}
            options={OPTIONS}
            theme="flat"
            onChange={this.onSelect}
          />
          <SelectorV2
            value={selected}
            disabled={disabled}
            options={OPTIONS}
            theme="flat"
            color="blue"
            onChange={this.onSelect}
          />
          <SelectorV2
            value={selected}
            disabled={disabled}
            options={OPTIONS}
            theme="flat"
            color="white"
            onChange={this.onSelect}
          />
        </div>
      </div>
    )
  }
}

export default FormWrapper;
