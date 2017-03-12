## Light-UI

[![npm version](https://badge.fury.io/js/light-ui.svg)](https://badge.fury.io/js/light-ui)  [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com) [![light-ui](http://img.shields.io/npm/dm/light-ui.svg)](https://www.npmjs.com/package/light-ui) [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/ecmadao/light-ui/master/LICENSE)

[![NPM](https://nodei.co/npm/light-ui.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/light-ui)

> UI Components for [hacknical](https://github.com/ecmadao/hacknical)

### Online demo

[https://ecmadao.github.io/light-ui](https://ecmadao.github.io/light-ui)

### Install & Config

- install

```bash
$ npm i light-ui --save
```

- build config

Cause I use [css-modules](https://github.com/css-modules/css-modules) and [PostCSS](https://github.com/postcss/postcss), you have to do something more special to make it work. You can check here: [css-modules](https://github.com/css-modules/css-modules) & [PostCSS](https://github.com/postcss/postcss) for more details.

Here is an example of webpack to compile css-modules:

```bash
# install css loader
$ npm i style-loader css-loader --save-dev

# install postcss & css-next & postcss-loader
$ npm install postcss --save
$ npm install postcss-cssnext --save
$ npm install postcss-loader --save-dev
```

```javascript
// webpack config file

// css loaders
const cssLoaders = [
  'style-loader',
  'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
  'postcss-loader'
];

const webpackConfig = {
  module: {
    loaders: [
      {
        test: /\.css$/,
        include: /light-ui/,
        loaders: cssLoaders
      }
    ]
  },
  postcss: () => {
    return [
      require('postcss-cssnext')
    ]
  }
};
```

### Basic Examples

> For more examples, you can click [here](https://ecmadao.github.io/light-ui/) to play online demo, or click [here](./examples) to see the source code of components usage.

#### Button

> [Online examples](https://ecmadao.github.io/light-ui/?selectedKind=Button&selectedStory=basical&full=0&down=1&left=1&panelRight=0&downPanel=kadirahq%2Fstorybook-addon-actions%2Factions-panel)

```javascript
import React from 'react';
import { Button } from 'light-ui';

// ....
render() {
  return (
  	<Button
    	theme="material" // material, flat, ghost, default material
    	color="dark" // dark, green, blue, red, gray, default green
    	value="button example"
	    disabled={this.props.disabled}
    />
  )
}
```

#### Min Info Card

> [Online examples](https://ecmadao.github.io/light-ui/?selectedKind=Card&selectedStory=basical&full=0&down=1&left=1&panelRight=0&downPanel=kadirahq%252Fstorybook-addon-actions%252Factions-panel)

```javascript
import React from 'react';
import { InfoCard, CardGroup } from 'light-ui';

// single info card
render() {
  return (
  	<InfoCard
    	theme="material" // material, flat, ghost, default material
    	mainText="Material Theme"
    	subText="info card example"
    />
  )
}

// info card with intro tipso
render() {
  return (
  	<InfoCard
    	mainText="Material Theme"
    	subText="2017"
    	style={{ textAlign: 'left' }}
    	tipso={{
    		text: 'This is material theme'
    	}}
    />
  )
}

// multiply info cards in group (in one line)
render() {
  return (
  	<CardGroup>
    	<InfoCard
    		mainText="Card Group 1"
    		subText="2017"
    		style={{ textAlign: 'left' }}
    		tipso={{
    			text: 'This card is in group'
    		}}
    	/>
    	<InfoCard
    		mainText="Card Group 2"
    		subText="2017"
    		style={{ textAlign: 'left' }}
    	/>
    </CardGroup>
  )
}

// multiply info cards in group (in multiply lines)
render() {
  return (
  	<CardGroup>
    	<CardGroup>
    		<InfoCard
    			mainText="Card Group 1"
    			subText="2017"
    			tipso={{
    				text: 'This card is in group'
    			}}
    		/>
    		<InfoCard
    			mainText="Card Group 2"
    			subText="2017"
    			style={{ textAlign: 'left' }}
    		/>
    		<InfoCard
                mainText="Card Group 3"
                subText="2017"
            />
    	</CardGroup>
    	<CardGroup>
    		<InfoCard
                mainText="Card Group 4"
                subText="2017"
    		/>
    		<InfoCard
                mainText="Card Group 5"
                subText="2017"
    		/>
    	</CardGroup>
    </CardGroup>
  )
}
```

#### Tipso

> [Online examples](https://ecmadao.github.io/light-ui/?selectedKind=Tipso&selectedStory=basical&full=0&down=1&left=1&panelRight=0&downPanel=kadirahq%252Fstorybook-addon-actions%252Factions-panel)

```javascript
import React from 'react';
import { Tipso, Button } from 'light-ui';

// ...
render() {
  return (
  	<Tipso
    	tipsoContent={(
    		<div style={{
    			width: '95px',
    			textAlign: 'center'
    		}}>
    			This is an example
    		</div>
  		)}>
            <Button
              value="hover to show"
            />
	</Tipso>
  )
}

// you can render tipso to any components
// and use any DOM your like to show in tipso
render() {
  return (
  	<Tipso
    	tipsoContent={(<span>tipso example</span>)}
    	trigger="focus" // hover, click, focus, default hover
    >
    	<input placeholder="your need to focus to show tipso" />
    </Tipso>
  )
}
```

#### Switcher

> [Online examples](https://ecmadao.github.io/light-ui/?selectedKind=Others&selectedStory=basical&full=0&down=1&left=1&panelRight=0&downPanel=kadirahq%2Fstorybook-addon-actions%2Factions-panel)

```javascript
import {} from 'light-ui';

// ...
render() {
  return (
  	<Switcher onChange={this.onChange} checked={props.checked} />
  )
}
```

### API

#### Button

```javascript
Button.propTypes = {
  value: PropTypes.string,
  onClick: PropTypes.func,
  color: PropTypes.string, // green, red, blue, dark, gray
  style: PropTypes.object, // custom inline style to overwrite
  className: PropTypes.string, // custom css module className to overwrite style
  theme: PropTypes.string, // material, flat, ghost
  disabled: PropTypes.bool,
  // send a icon DOM node, or a class string meaning a font-awesome icon
  leftIcon: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element,
    PropTypes.string
  ]),
  rightIcon: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element,
    PropTypes.string
  ])
};
```

#### IconButton

```javascript
IconButton.propTypes = {
  icon: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.string
  ]),
  className: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  theme: PropTypes.string // material, flat, ghost
};
```

#### FloatingActionButton

```javascript
FloatingActionButton.propTypes = {
  style: PropTypes.object,
  onClick: PropTypes.func,
  className: PropTypes.string,
  icon: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element,
    PropTypes.string
  ])
};
```

---

#### Input

```javascript
Input.propTypes = {
  disabled: PropTypes.bool,
  required: PropTypes.bool, // whether check input value is validate or not
  value: PropTypes.string,
  style: PropTypes.object, // html inline style
  className: PropTypes.string, // custom className to overwrite
  id: PropTypes.string, // DOM id if you need
  placeholder: PropTypes.string,
  type: PropTypes.string, // HTML5 input type, used to set input check func
  theme: PropTypes.string, // material, flat, borderless
  subTheme: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  onKeyUp: PropTypes.func,
  onFocus: PropTypes.func,
  onKeyDown: PropTypes.func,
};
```

#### InputGroup

`InputGroup` is special, which combined by `Input` Component (Main Input) and `Tipso` Component. `Tipso` Component accept any component to render in it.

```javascript
InputGroup.propTypes = {
  inputClassName: PropTypes.string, // used to overwrite Input style
  wrapperClassName: PropTypes.string, // used to overwrite Tipso style
  wrapperStyle: PropTypes.object, // inline style to overwrite Tipso,
  children: PropTypes.element // component will be rendered in Tipso
  // ...
  // another props is same as Input Component, will send to Main Input
};
```

```javascript
// InputGroup usage example
import { InputGroup } from 'light-ui';

render() {
  return (
  	<InputGroup
		value={value}
		disabled={disabled}
		placeholder="input group with intro"
		onChange={this.onChange} >
    	// this DOM will be rendered in Tipso
		<div style={{ fontSize: '12px' }}>
			This is an intro of input.
		</div>
	</InputGroup>
  )
}
```

#### Selector

> Traditional selector component, using raw HTML `<select/>` DOM

```javascript
Selector.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  theme: PropTypes.string, // material, flat
  className: PropTypes.string,
  onChange: PropTypes.func,
  options: PropTypes.array,
  disabled: PropTypes.bool
};
```

#### SelectorV2

> Custom selector component

```javascript
SelectorV2.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  theme: PropTypes.string, // material, flat
  className: PropTypes.string,
  onChange: PropTypes.func,
  options: PropTypes.array,
  disabled: PropTypes.bool,
  color: PropTypes.string, // green, blue, white
};
```

#### Textarea

```javascript
Textarea.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  onKeyDown: PropTypes.func,
  disabled: PropTypes.bool,
};
```

---

#### Loading

```javascript
Loading.propTypes = {
  className: PropTypes.string,
  theme: PropTypes.string, // rotate, bounce
  loading: PropTypes.bool,
  closeAble: PropTypes.bool, // weather can be close or not
  onClose: PropTypes.func, // close callback
  style: PropTypes.object,
};
```

#### PortalModal

> Check [here](https://github.com/tajo/react-portal) to see more detail about `Portal`

```javascript
PortalModal.propTypes = {
  closeOnEsc: PropTypes.bool,
  showModal: PropTypes.bool,
  closeOnOutsideClick: PropTypes.bool,
  onClose: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.array
  ])
};
```

#### ShortMessage

```javascript
ShortMessage.propTypes = {
  onClose: PropTypes.func, // close callback
  expire: PropTypes.number, // expire time, default 2000 ms
  text: PropTypes.string // message text
};
```

---

#### Tipso

`Tipso` is the extension of `BaseTipso` Component. It accept a children to render as `Tipso` trigger, and you can use `hover`, `click` or `focus` as trigger func.

```javascript
Tipso.propTypes = {
  trigger: PropTypes.string, // hover, click or focus
  wrapperStyle: PropTypes.object,
  children: PropTypes.element,
  tipsoContent: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.node
  ]),
  className: PropTypes.string, // className to overwrite Tipso wrapper
  theme: PropTypes.string, // light or dark
  position: PropTypes.string, // top or bottom
  show: PropTypes.bool // show tipso in default
};
```

```javascript
// Tipso example

// render a dark theme Tipso under the Button, only click can show this Tipso
render() {
  return (
  	<Tipso
		theme="dark"
    	position="bottom"
		trigger="click"
		tipsoContent={(
			<div className={styles['tipso-content']}>
    			This is an example
    		</div>
		)}>
			<Button value="hover to show" />
	</Tipso>
  )
}
```

---

#### InfoCard

```javascript
InfoCard.propTypes = {
  mainText: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  subText: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  mainTextStyle: PropTypes.string,
  subTextStyle: PropTypes.string,
  className: PropTypes.string,
  icon: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element,
    PropTypes.string
  ]),
  tipso: PropTypes.object, // an object config to render tipso in InfoCard
  style: PropTypes.object,
  theme: PropTypes.string // material, flat or ghost
};
```

#### CardGroup

You can render multiply `InfoCard` in `CardGroup`. Also, you can render any amount of `CardGroup` in `CardGroup` itself.

```javascript
CardGroup.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.node,
    PropTypes.array
  ]),
  className: PropTypes.string,
  theme: PropTypes.string, // material, flat or ghost
  style: PropTypes.object,
};
```

---

#### Label

`Label` likes `Button`, but it can only has left icon, and much more smaller than `Button`

```javascript
Label.propTypes = {
  text: PropTypes.string,
  clickable: PropTypes.bool,
  onClick: PropTypes.func,
  className: PropTypes.string,
  theme: PropTypes.string,
  icon: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.string
  ])
};
```

#### Switcher

```javascript
Switcher.propTypes = {
  color: PropTypes.string, // green, blue or gray
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  size: PropTypes.string // normal or mini
};
```

### Todo

- [x] README
- [x] API Doc
- [ ] Raw javascript components

### License

[MIT License](./LICENSE)

### Author

[ecmadao](https://github.com/ecmadao)