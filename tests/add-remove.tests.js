
const test = require('tape-catch');
const assert = require('assert');

const Randy = require('./../randy.js');

// ADD ITEM TESTS
// 
test('add item (int)', function(t) {
    const r = new Randy();

    r.add(100);

    t.deepEqual(r.items, [ 100 ])
    t.end();
});

test('add item (string)', function(t) {
    const r = new Randy();

    r.add('one hundred');

    t.deepEqual(r.items, [ 'one hundred' ])
    t.end();
});

test('add item (array)', function(t) {
    const array = [ 1, 3, 2 ];
    const r = new Randy();

    r.add(array);

    t.deepEqual(r.items, [[ 1, 3, 2 ]])
    t.equal(r.items[0], array);
    t.end();
});

test('add item (object)', function(t) {
    const obj = { a: 1 };
    const r = new Randy();

    r.add(obj);

    t.deepEqual(r.items, [ { a: 1 } ])
    t.equal(r.items[0], obj)
    t.end();
});

test('add multiple items', function(t) {
    const r = new Randy();

    r.add(1, 'two', { three: 3 }, [ 4 ]);
    r.add(5);

    t.deepEqual(r.items, [ 1, 'two', { three: 3 }, [ 4 ], 5 ])    
    t.end();
});


// REMOVE ITEM TESTS
// 
test('remove item (int)', function(t) {
    const r = new Randy([1, 2, 3]);

    r.remove(2);

    t.deepEqual(r.items, [ 1, 3 ])
    t.end();
});

test('remove item (string)', function(t) {
    const r = new Randy([ 'alpha', 'beta' ]);

    r.remove('alpha');

    t.deepEqual(r.items, [ 'beta' ])
    t.end();
});

test('remove item (array)', function(t) {
    const array = [ 1, 3, 2 ];
    const r = new Randy([ 'a', 'b', array ]);

    r.remove(array);

    t.deepEqual(r.items, [ 'a', 'b' ])
    t.end();
});

test('remove item (object)', function(t) {
    const obj = { a: 1 };
    const r = new Randy([ 'a', 'b', obj ]);

    r.remove(obj);

    t.deepEqual(r.items, [ 'a', 'b' ])
    t.end();});

test('remove item (non existing)', function(t) {
    const r = new Randy([ 1, 2 ]);

    r.remove(100);

    t.deepEqual(r.items, [ 1, 2 ]);
    t.end();
});

test('remove multiple items', function(t) {
    const array =  [ 3 ];
    const obj = { four: 4 };
    const r = new Randy([ 1, 'two', array, obj ]);

    r.remove(obj, 1, array, 2);

    t.deepEqual(r.items, [ 'two' ])    
    t.end();
});