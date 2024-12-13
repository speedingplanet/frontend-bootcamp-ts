/* eslint-disable @typescript-eslint/no-unused-vars */

// let declares a variable whose value can change
let x = 10;

// const means the value of the variable cannot change
const y = "Hello";

// TypeScript supports interfaces for more complex types
interface Car {
  make: string;
  model: string;
  // color is present, but we may not always know the value
  color: string | null;

  // engineType may not be present, but if it is, it's a string
  engineType?: string;
}

// Can also declare variables with var, but that has weird side-effects sometimes
// Better to avoid it if possible

let i: number; // JS does not distinguish between integers and decimals
let j: string;
let k: boolean; // true or false

// Types and single values
let a: null;
let b: undefined;

let c: number | null = null;

// TODO: Combining types with | and &
// TODO: Partial types
// TODO: Expansive types ([key: string])

console.log(x, y);

let found = document.querySelector("#foo");

// Safely checks if found is null
if (found !== null) {
  processElement(found);
} else {
  console.warn('Could not find an element with the id "foo"');
}

// Unsafe, passes "null" to processElement at runtime
// But maybe you know better than TypeScript!
processElement(found!);

// if (!returnValue instanceof ThingIWant) {

// Throw an error, return, whatever
// }
// Code processing ThingIWant goes here.

function processElement(e: Element) {
  // We would do something here
  console.log(e);
}
