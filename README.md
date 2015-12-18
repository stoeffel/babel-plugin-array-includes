# babel-plugin-array-includes

> Replaces `arr.includes(val)` with `arr.indexOf(val) >= 0`.

Thanks to [@sebmck](https://github.com/sebmck) for the help.

## Example

**In**

```javascript
[1, 2, 3, 5, 8, 13].includes(4);
```

**Out**

```javascript
"use strict";

[1, 2, 3, 5, 8, 13].indexOf(4) >= 0;
```

## Pitfalls

This doesn't work:

**In**

```js
function foo(arr) {
  return arr.includes('foo');
}
```

**Out**

```js
function foo(arr) {
  return arr.includes('foo'); // still includes
}
```

## Installation

```sh
$ npm install babel-plugin-array-includes
```

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "plugins": ["array-includes"]
}
```

### Via CLI

```sh
$ babel --plugins array-includes script.js
```

### Via Node API

```javascript
require("babel-core").transform("code", {
  plugins: ["array-includes"]
});
```
