//Imports functions halfOf and multiply from lib.js module
// import { halfOf, multiply } from './lib.js';
// console.log(halfOf(84));
// console.log(multiply(21, 2));

//do something example
// import doSomething from './lib.js';

// doSomething();

import { flag, touch } from './validator.js';
console.log(flag); //false
touch(); // change to true
console.log(flag); // true
flag = false; // change to false
console.log(flag); // error