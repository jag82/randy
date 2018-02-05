# randy

Randy lets you put things into a hat and pick them out in a variety of ways, including randomly.


## Installation
```
npm i @jag82/randy
```


## Quick Start

```
const randy = new Randy();
randy.add([2, 1, 3]);

randy.get(); // returns 1, 2, or 3 with equal probability

randy.add('four');
randy.get(); //returns 1, 2, 3, or 'four'

randy.set({
    repeats: false
});
randy.get();
randy.get(); 
randy.get(); //will not return the same result twice in a row, no matter how many times we call it!
```

## Detailed Usage


### Instantiation

You can instantiate randy with an empty constructor which will create a collection with no items and use the default options (random selection without removal).
```
const r = new Randy();
```

Initialize with array of items.
```
const r = new Randy([ 1, 2, 'three', { key: 'value' }]);
```

Initialize with options.
```
//default options
const options = {
    repeats: true, //can we repeat an item twice in a row?
    remove: false,  //remove items after selection?
    selection: 'random' //random, fifo, lifo
};
const r = new Randy(options);
```

Dynamically add/remove items:
```
const r = new Randy();

r.add(2);
r.add(['three', 'four']);
r.add(5, 6);
r.add({ seven: 7 });

r.remove(2);
r.remove({ seven: 7 });
```

Dynamically update options:
```
const r = new Randy([1, 2, 3]);
r.get();
r.count(); //3 items
r.set({ 
    remove: true
});
r.get();
r.count; //2 items
```

Statistics:
```
const r = new Randy([20, 30, 10]);
r.count(); //returns 3;
r.length(); //returns 3;
r.frequency();
r.reset();
```

## TODO:
statistics
frequency
