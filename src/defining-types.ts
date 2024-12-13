/* eslint-disable @typescript-eslint/no-unused-vars */
// Different ways to define types in TypeScript and JavaScript

// Defining types via type inference

let aNumber = 10;
let aString = "Hello";
let aBoolean = true;
let aDate = new Date();

// Explicit types (even if undefined)
let someNumber: number;
let somString: string;

// What about our own types?
// Interfaces exist in TypeScript, not JavaScript
// If you don't need a feature of types, classes, etc., use interfaces
interface BookInterface {
  author: string;
  title: string;
  // The question mark indicates this property is optional
  pageCount?: number;
}

// TypeScript also has the 'type' keyword. More on this soon
type BookType = {
  author: string;
  title: string;
  pageCount?: number;
};

// Classes exist in JavaScript and create types in TypeScript
class BookClass {
  author = "Default author";
  title = "Default title";

  constructor(inputAuthor: string, inputTitle: string) {
    this.author = inputAuthor;
    this.title = inputTitle;
  }
}

// TypeScript also has Enums but they aren't used as much
// Also, enums generate JavaScript code, union types (below) don't
enum Planets {
  MERCURY,
  VENUS,
  EARTH,
  MARS,
  JUPITER,
  SATURN,
  NEPTUNE,
  URANUS,
}

// Functional types

type CalculatorFn = (x: number, y: number) => number;

let add: CalculatorFn = (x, y) => x + y;
let subtract: CalculatorFn = (x, y) => x - y;

// <T> is a Generic, or late-binding value
type ComparatorFn<T> = (a: T, b: T) => number;

// Interfaces can inherit from one another, just like classes
interface Person {
  firstName: string;
  lastName: string;
}

interface Employee extends Person {
  employeeId: number;
}

// interfaces extend each other
// classes extend each other
// classes implement interfaces

// You can allow interfaces to be extendable
interface MusicTrack {
  title: string;
  artist: string;

  // Allows any number of additional properties with string as property names
  // and strings or booleans as property values
  [key: string]: string | boolean;
}

let trackOne: MusicTrack = {
  artist: "Someone",
  title: "Something",
  anotherProperty: "some string",
  anotherBoolean: false,
  // Not valid, values can't be numbers
  // anotherNumber: 10,
  // Not valid, keys have to be strings
  // Symbol('foo'): 'Hello'
};

// Union types allow for either/or variations
let age: string | number;

// Can also define ranges of values
type DaysOfTheWeek =
  | "Sunday"
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday";

// Intersection types combine types
type HasId = {
  id: number;
};

type Bicycle = {
  size: number;
  gears: number;
};

type BicycleWithId = Bicycle & HasId;

type MenuItem = { description: string; price: number } & HasId;

// Extending interfaces vs Intersecting types
interface Vehicle {
  make: string;
  model: string;
}

interface Car extends Vehicle {
  numberOfWheels: number;
}

// A Car IS A Vehicle

function printMakeAndModel(v: Vehicle) {
  console.log(v.make + " " + v.model);
}

let honda: Car = {
  make: "Honda",
  model: "CR-V",
  numberOfWheels: 4,
};

printMakeAndModel(honda);

type VehicleType = {
  make: string;
  model: string;
}

// CarType has the properties of a VehicleType but is NOT a VehicleType
type CarType = VehicleType & {
  numberOfWheels: number;
};

let mustang: CarType = {
	make: 'Ford',
	model: 'Mustang',
	numberOfWheels: 4
}

printMakeAndModel(mustang);