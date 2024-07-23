// common JS module

// const { hello, world } = require("./module1");
// hello();
// world();

//ES6(ECMA SCRIPT) module
/*
 will have to run 
npm init -y
in the terminal which will create package json file 
There we must add 
"type": "module" 
to run that es6 module or it will not work
or
we have to make the file with 
.mjs
extension instead of .js
*/
import { hello } from "./module1.js"; 
hello();
