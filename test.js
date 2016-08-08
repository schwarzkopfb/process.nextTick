'use strict'

var test        = require('tap'),
    nextTickSys = process.nextTick

test.plan(13)

function requireUncached(module) {
    delete require.cache[ require.resolve(module) ]
    return require(module)
}

function fakeVer(ver) {
    Object.defineProperty(process, 'version', {
        value: ver
    })
}

function testSys(ver) {
    fakeVer(ver)
    test.equal(
        requireUncached('./'), nextTickSys,
        'in version ' + ver + " system's nextTick() method should be exposed"
    )
}

function testPolyfill(ver) {
    fakeVer(ver)
    var nextTick = requireUncached('./')
    test.type(nextTick, 'function', 'in version ' + ver + ' the polyfill method should be exposed')
    test.notEqual(nextTick, nextTickSys, 'in version ' + ver + ' the polyfill method should be exposed')
}

[
    'v6.0.0',
    'v5.0',
    '4.0',
    'v3'
]
    .forEach(testSys);

[
    'v0.1.0',
    'v0.5',
    '0.4',
    'v0'
]
    .forEach(testPolyfill)

var ref = {}
require('./')(function (arg) {
    test.equal(ref, arg, 'additional argument should be passed to callback')
}, ref)
