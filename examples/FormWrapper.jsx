import React from 'react';
import Input from '../components/react/Form/Input';
import InputGroup from '../components/react/Form/InputGroup';
import InputGroupV2 from '../components/react/Form/InputGroupV2';
import Selector from '../components/react/Form/Selector';
import SelectorV2 from '../components/react/Form/SelectorV2';
import Textarea from '../components/react/Form/Textarea';

const OPTIONS = [
  { id: 0, value: 'selector 0' },
  { id: 1, value: 'selector 1' },
  { id: 2, value: 'selector 2' },
  { id: 3, value: 'selector 3' },
  { id: 4, value: 'disabled', disabled: true },
];

class FormWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      email: '',
      phone: '',
      textarea: '',
      selected: OPTIONS[0].id
    };
    this.onChange = this.onChange.bind(this);
    this.onSelect = this.onSelect.bind(this);
  }

  onChange(key) {
    return value => this.setState({ [key]: value });
  }

  onSelect(selected) {
    this.setState({ selected });
  }

  render() {
    const { value, phone, email, textarea, selected } = this.state;
    const { disabled } = this.props;

    const [prefix, suffix] = email.split('@');

    return (
      <div id="componentsContainer">
        <h3>Input</h3>
        <h4>material theme</h4>
        <div>
          <Input
            autoFocus
            value={value}
            placeholder="material theme"
            disabled={disabled}
            onChange={this.onChange('value')}
          />
        </div>
        <h4>flat theme</h4>
        <div>
          <Input
            value={value}
            theme="flat"
            placeholder="flat theme"
            disabled={disabled}
            onChange={this.onChange('value')}
          />
        </div>
        <h4>borderless theme</h4>
        <div>
          <Input
            value={value}
            theme="borderless"
            placeholder="borderless theme"
            disabled={disabled}
            onChange={this.onChange('value')}
          />
          &nbsp;&nbsp;&nbsp;
          <Input
            value={value}
            theme="borderless"
            subTheme="underline"
            placeholder="borderless theme"
            disabled={disabled}
            onChange={this.onChange('value')}
          />
        </div>
        <h4>validator</h4>
        <div>
          <Input
            value={email}
            type="email"
            placeholder="email"
            disabled={disabled}
            onChange={this.onChange('email')}
          />
          <Input
            value={phone}
            type="phone"
            placeholder="phone"
            disabled={disabled}
            onChange={this.onChange('phone')}
          />
        </div>
        <h4>Not required</h4>
        <div>
          <Input
            value={email}
            type="email"
            required={false}
            placeholder="email"
            disabled={disabled}
            onChange={this.onChange('email')}
          />
          <Input
            value={phone}
            type="phone"
            required={false}
            placeholder="phone"
            disabled={disabled}
            onChange={this.onChange('phone')}
          />
        </div>
        <h3>Input Group</h3>
        <div>
          <InputGroup
            value={value}
            disabled={disabled}
            placeholder="input group with input"
            onChange={this.onChange('value')}
          >
            <Input
              value={value}
              theme="borderless"
              subTheme="underline"
              placeholder="borderless input"
              disabled={disabled}
              onChange={this.onChange('value')}
            />
          </InputGroup>
          <InputGroup
            value={value}
            disabled={disabled}
            tipsoTheme="dark"
            tipsoPosition="bottom"
            placeholder="input group with intro"
            onChange={this.onChange('value')}
          >
            <div style={{ fontSize: '12px' }}>
              This is an intro of input.
            </div>
          </InputGroup>
        </div>
        <h3>Input Group2</h3>
        <div>
          <InputGroupV2
            sections={[
              {
                value: '+86',
                disabled: true,
                style: {
                  width: 30
                }
              },
              {
                value: phone,
                type: 'phone',
                placeholder: 'phone',
                onChange: this.onChange('phone'),
              }
            ]}
            theme="flat"
          />
        </div>
        <div>
          <InputGroupV2
            sections={[
              {
                value: prefix,
                placeholder: 'email prefix',
                onChange: val => this.onChange('email')(`${val}@${suffix}`)
              },
              {
                value: '@',
                disabled: true,
                style: {
                  width: 30,
                  textAlign: 'center',
                  padding: 0
                }
              },
              {
                value: suffix,
                placeholder: 'email suffix',
                style: { width: 100 },
                onChange: val => this.onChange('email')(`${prefix}@${val}`)
              }
            ]}
            theme="material"
          />
        </div>
        <div>
          <InputGroup
            value={value}
            disabled={disabled}
            placeholder="input group with input"
            onChange={this.onChange('value')}
          >
            <InputGroupV2
              sections={[
                {
                  value: 'https://',
                  disabled: true,
                  style: {
                    width: 50,
                    padding: '0 5px'
                  }
                },
                {
                  value,
                  type: 'url',
                  placeholder: 'url',
                  onChange: this.onChange('value'),
                }
              ]}
              style={{
                margin: 0
              }}
              theme="underline"
            />
          </InputGroup>
        </div>
        <h3>Textarea</h3>
        <div>
          <Textarea
            maxLength={200}
            value={textarea}
            placeholder="textarea"
            disabled={disabled}
            onChange={this.onChange('textarea')}
          />
        </div>
        <br/>
        <div>
          <Textarea
            maxLength={200}
            value={textarea}
            placeholder="textarea"
            disabled={disabled}
            onChange={this.onChange('textarea')}
            wordCountTemplate="%n words typed"
            wordCount={val => val ? val.split(' ').length : 0}
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
    );
  }
}

export default FormWrapper;
