
const test = require('tape-catch');
const assert = require('assert');

const Randy = require('./../randy.js');

// SELECTION TESTS
// 
test('', function(t) {
    const r = new Randy();

    t.deepEqual(r.items, []);
    t.ok(r.options);
    t.end();
});


