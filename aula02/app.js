const path = require('path');
console.log(path.resolve(__dirname, '..', '..'));


const Dog = require('./b/c/d/mod.js');

const dog = new Dog('Fido');
console.log(dog.speak());

console.log(__filename);
console.log(__dirname);
