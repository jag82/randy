
const test = require('tape-catch');
const assert = require('assert');

const Randy = require('./../randy.js');

test('positive control', function(t){
    t.equal(1, 1);
    t.deepEqual({ a: { b: 2 } }, { a: { b: 2 } });
    t.end();    
});

test.skip('negative control', function(t) {
    t.equal(0, 1);
    t.end();
});

test('can be instantiated', function(t){
    const randy = new Randy();

    t.equal(randy.bark(), 'bark');

    t.end();
});

