## Light-UI

[![npm version](https://badge.fury.io/js/light-ui.svg)](https://badge.fury.io/js/light-ui)  [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com) [![light-ui](http://img.shields.io/npm/dm/light-ui.svg)](https://www.npmjs.com/package/light-ui) [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/ecmadao/light-ui/master/LICENSE)

[![NPM](https://nodei.co/npm/light-ui.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/light-ui)

> UI Components for [hacknical](https://github.com/ecmadao/hacknical)

### Install

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
    	theme="material" // material flat ghost, default material
    	color="dark" // dark green blue red gray, default green
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
    	theme="material" // material flat ghost, default material
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
    	trigger="focus" // hover click focus, default hover
    >
    	<input placeholder="your need to focus to show tipso" />
    </Tipso>
  )
}
```

### API

#### Button

#### IconButton

#### FloatingActionButton

---

#### Input

#### InputGroup

#### Selector

#### SelectorV2

#### Textarea

---

#### Loading

#### PortalModal

#### ShortMessage

---

#### Tipso

---

#### InfoCard

#### CardGroup

---

#### Label

### Todo

- [ ] README
- [ ] API Doc
- [ ] Raw javascript components

### License

[MIT License](./LICENSE)

### Author

[ecmadao](https://github.com/ecmadao)