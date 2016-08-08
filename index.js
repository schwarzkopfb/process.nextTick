/**
 * In Node version <1 `process.nextTick()` accepts a callback function only.
 * In later versions you can supply additional arguments to pass when invoking the callback.
 * This is a polyfill for early versions.
 */

'use strict'

var nextTickSys = process.nextTick,
    slice       = Array.prototype.slice

function nextTick(callback) {
    var args = slice.call(arguments, 1)

    nextTickSys(function () {
        callback.apply(this, args)
    })
}

module.exports = /^v?0/.test(process.version)
    ? nextTick
    : nextTickSys
