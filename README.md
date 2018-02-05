# randy

Randy lets you put things into a hat and pick them out in a variety of ways, including randomly.

[![Build Status](https://travis-ci.org/jag82/randy.svg?branch=master)](https://travis-ci.org/jag82/randy)
[![Coverage Status](https://coveralls.io/repos/github/jag82/randy/badge.svg?branch=master)](https://coveralls.io/github/jag82/randy?branch=master)


## Installation
```js
npm i @jag82/randy
```

## Quick Start

Select random items...
```js
const randy = new Randy([ 2, 1, 3]);
randy.get();  // returns 1, 2, or 3
```

...add more items on the fly...
```js
randy.add('four');
randy.get();  // returns 1, 2, 3, or 'four'
```

...change selection options too!
```js
randy.set({
    repeats: false
});

for(let i = 0; i < 100; i++) {
    randy.get();  // will not return the same result twice in a row, no matter how many times we call it!
}
```

## Detailed Usage


### Instantiation

...with an empty constructor:
```js
const r = new Randy();
// r.items = [], default options
```

...with an array of items:
```js
const r = new Randy([ 1, 2, 'three', { key: 'value' }]);
```

...with options:
```js
//default options
const options = {
    repeats: true,  // can we repeat an item twice in a row?
    remove: false,   // remove items after selection?
    selection: 'random'  // random, fifo, lifo
};

const r = new Randy(options);

// or with an initial items array...
const r2 = new Randy([1, 2, 3], options);
```

### Dynamically add/remove items:
```js
const r = new Randy();

r.add(2);
r.add(['three', 'four']);
r.add(5, 6);
r.add({ seven: 7 });

r.remove(2);
r.remove({ seven: 7 });

// r.items = [ ['three', 'four'], 5, 6 ]
```

### Dynamically update options:
```js
const r = new Randy([1, 2, 3]);
r.get();
// r.items.length = 3

r.set({ 
    remove: true
});
r.get();
// r.items.length = 2
```

### Statistics:
```js
const r = new Randy([20, 30, 10]);
r.frequency();
r.reset();
```

## TODO:
statistics

frequency

rename repo (hat?), will affect travis-ci, coveralls

publish to npm

integrate to piano tool



