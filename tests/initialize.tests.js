
const test = require('tape-catch');
const assert = require('assert');

const Randy = require('./../randy.js');

// CONSTRUCTOR TESTS
// 
test('initialize with defaults', function(t) {
    const r = new Randy();
    t.deepEqual(r.items, [], 'init items array');
    t.ok(r.options, 'init options');
    t.end();
});

test('intialize with items array', function(t) {
    const r = new Randy([ 6, 3, 9 ]);

    t.deepEqual(r.items, [ 6, 3, 9 ]);
    t.end();
});

test('initialize with options', function(t) {
    const r = new Randy({ 
        repeats: false, 
        remove: true 
    });

    t.deepEqual(r.items, []);
    t.deepEqual(r.options, { 
        repeats: false, 
        remove: true 
    });
    t.end();    
});


test('initialize with items and options', function(t) {
    const r = new Randy([ 6, 3, 9 ], { 
        repeats: false, 
        remove: true 
    });

    t.deepEqual(r.items, [ 6, 3, 9 ]);
    t.deepEqual(r.options, { 
        repeats: false, 
        remove: true 
    });
    t.end();    
});
