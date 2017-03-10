## Light-UI

[![npm version](https://badge.fury.io/js/light-ui.svg)](https://badge.fury.io/js/light-ui)  [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com) [![react-times](http://img.shields.io/npm/dm/light-ui.svg)](https://www.npmjs.com/package/react-times) [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/ecmadao/react-times/master/LICENSE)

[![NPM](https://nodei.co/npm/react-times.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/light-ui)

> UI Components for [hacknical](https://github.com/ecmadao/hacknical)

### Install

- install

```bash
$ npm i light-ui --save
```

- build config

Cause I use css-modules, you have to do something more special to make it work. You can check here: [css-modules](https://github.com/css-modules/css-modules) for more details.

Here is an example of webpack to compile css-modules:

```javascript
// webpack config file

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
  }
};
```

### Examples

### API

### Todo

- [ ] README
- [ ] API Doc

### License

[MIT License](./LICENSE)

### Author

[ecmadao](https://github.com/ecmadao)