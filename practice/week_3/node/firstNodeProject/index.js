// npm install -g package_name
// This installs the package globally, meaning to your computer, so that any other project can use it. Downside: It is only on your computer and not "required" by your package.


// npm install -S package_name
// This installed the package just for the Node project you are in. This will also modify the package.json to say that it is required for the project to work. It is installed to the node project folder.


const fs = require("fs");
const _ = require("lodash");

console.log(_.random(1, 10));
console.log(Math.floor(Math.random() * 10) + 1);

let array1 = [70, 30, 30];
let array2 = [100, 30, 10];
let arrayCombined = _.concat(array1, array2);

console.log(arrayCombined);

console.log(_.difference(array1, array2));

//Date
console.log(_.now());


// Current Assignment:
/*
1) create another folder and call it secondNodeProject. This folder should be NEXT to firstNodeProject, NOT inside of it.
2) convert the folder into a node project using "npm init".
3) install the package "Express" locally to this secondNodeProject folder.
4) Bonus: find out a methor or property you can use and use it inside of the index.js file.
*/