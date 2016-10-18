# bee-safe-anchor
[![npm version](https://img.shields.io/npm/v/bee-safe-anchor.svg)](https://www.npmjs.com/package/bee-safe-anchor)
[![Build Status](https://img.shields.io/travis/tinper-bee/generator-tinper-bee/master.svg)](https://travis-ci.org/tinper-bee/bee-safe-anchor)
[![devDependency Status](https://img.shields.io/david/dev/tinper-bee/bee-safe-anchor.svg)](https://david-dm.org/tinper-bee/bee-safe-anchor#info=devDependencies)


react bee-safe-anchor component for tinper-bee

#### setup develop environment

```sh
$ git clone https://github.com/tinper-bee/bee-safe-anchor
$ cd bee-safe-anchor
$ npm install
$ npm run dev
```

## Usage

```js
import SafeAnchor from 'bee-safe-anchor';
//或者
var SafeAnchor = require('bee-safe-anchor');
```



## API
|参数|说明|类型|默认值|
|:---|:----:|:---:|------:|
|href|跳转地址|string|-|
|onClick|点击事件|function|-|
|disabled|是否禁用|boolean|false|
|role|----|---|------|
|tabIndex|tab切换|number/string|------|
|componentClass|组件元素|string/element|a|
