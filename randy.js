
function Randy(arg1, arg2) {
    let items, options;
    if(typeof arg1 === 'object') {
        if(Array.isArray(arg1)) {
            //items, options
            items = arg1;
            options = arg2;            
        } else {
            //options
            options = arg1;
            items = [];
        }
    } else {
        //items or empty constructor
        items = [].concat(arg1 || []);
    }

    this.items = items;
    this.options = Object.assign({
        //TODO: default options
    }, options || {});
}

Randy.prototype.add = function(...items) {
    for(let item of items) {
        if(Array.isArray(item)) {
            this.items[this.items.length] = item;
        } else {
            this.items.push(item);
        }
    }
}

Randy.prototype.remove = function(...items) {
    for(let item of items) {
        if(Array.isArray(item)) {
            this.items = this.items.filter(function(i) {
                return i !== item;
            });            
        } else {
            this.items = this.items.filter(function(i) {
                return i !== item;
            });
        }
    }
}

module.exports = Randy

