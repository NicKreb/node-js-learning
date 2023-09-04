// const xyz = require('./people'); //require

// console.log(xyz); //returns an empty object unless exported in people.js!
// console.log(people); //returns error not defined.

// console.log(xyz.people, xyz.ages); //outputs both arrays in peoples.js but as each respective array!

// const { people } = require('./people'); //while in curly braces, as long as it matches a value it returns said value!
// console.log(people, ages); //returns error as ages was not defined in curly braces!

const { people, ages } = require('./people');

console.log(people, ages); //now that people AND ages are referenced in curly braces it outputs the proper values!

const os = require('os');
console.log(os.platform(), os.homedir()); //os stands for operating system and is by default an already accessible module on node!