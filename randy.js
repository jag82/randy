
function Randy() {
    console.log('constructor: Randy');
}

Randy.prototype.bark = function() {
    console.log('bark!');
    return 'bark';
}

module.exports = Randy

