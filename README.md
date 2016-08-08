[![view on npm](http://img.shields.io/npm/v/process.nextTick.svg?style=flat-square)](https://www.npmjs.com/package/process.nextTick)
[![downloads per month](http://img.shields.io/npm/dm/process.nextTick.svg?style=flat-square)](https://www.npmjs.com/package/process.nextTick)
[![node version](https://img.shields.io/badge/node-%3E=0.8-brightgreen.svg?style=flat-square)](https://nodejs.org/download)
[![build status](https://img.shields.io/travis/schwarzkopfb/process.nextTick.svg?style=flat-square)](https://travis-ci.org/schwarzkopfb/process.nextTick)
[![test coverage](https://img.shields.io/coveralls/schwarzkopfb/process.nextTick.svg?style=flat-square)](https://coveralls.io/github/schwarzkopfb/process.nextTick)
[![license](https://img.shields.io/npm/l/process.nextTick.svg?style=flat-square)](https://github.com/schwarzkopfb/process.nextTick/blob/development/LICENSE)

# process.nextTick

In Node version <1 `process.nextTick()` accepts a callback function only.
In later versions you can supply additional arguments to pass when invoking the callback.
This is a polyfill for early versions.

## Usage

```js

// In Node >=1 the built-in `nextTick()` method is exposed, 
// so this is just a re-assignment that has no effect.
process.nextTick = require('process.nexttick')

// Now you can safely pass additional arguments 
// to `nextTick()` regardless of Node version.
process.nextTick(function (arg) {
    arg === 42 // true
}, 42)

```

**Note**: This module itself does not overwrite `process.nextTick()`.

## Installation

With npm:

    npm install process.nexttick

## License

[MIT](/LICENSE)