# Typescript
1. [Basics](#basics)
    + [Declarations](#declarations)
    + [Data Types](#data-types)
    + [Objects](#objects)
    + [Undefined & Null](#undefined---null)
    + [Truthy & Falsy](#truthy---falsy)
    + [Boolean expressions](#boolean-expressions)
2. [Operations](#operations)
    + [Ternary](#ternary)
    + [Increment / Decrement](#increment---decrement)
    + [While](#while)
    + [For](#for)
    + [Switch](#switch)
3. [Functions](#functions)
    + [Syntax](#syntax)
    + [Typing](#typing)
    + [Parameters](#parameters)
    - [Spread](#spread)
    - [Optional](#optional)
    + [Iterators (ES6 Only!)](#iterators--es6-only--)
4. [Object Oriented Programming](#object-oriented-programming)
    + [Classes](#classes)
    - [Interface](#interface)
5. [Arrays](#arrays)
    + [Basic operations](#basic-operations)
    + [Spread](#spread-1)
    + [Destructuring](#destructuring)
    + [Filter](#filter)
    + [Map](#map)
    + [Reduce](#reduce)

      
      
TypeScript (TS) is a superset of JavaScript (JS). 
It's main improvments are static typing and type interference which allow for more code/error analysis during development.  
The TS code you write will be compiled to JS and then be executed e.g. in a browser. All valid JS is also valid TS - the compiler will simply output the JS you put in. When compiling to a newer Version of JS there are more features available but not all runtime environments will support it. To increase compatibility most TS and JS code is currently compiled to the previous version, since the new "ES6" (also called "ECMAScript 2015") standard isn't implemented fully in all common browsers.

## Basics

### Declarations
Use the keywords ``let`` for variables and ``const`` for constants
````typescript
let variableName : Type = value;
````
A value is not needed when declaring a variable. If there is a value, the type can be omitted and the compiler while inferre it from the type of the value.

### Data Types

Name | Type | Example values
:-----------|:------------|:-----------
Boolean | ```boolean``` |true, false
Number | ```number``` | 1, 1.2345, 0xf00d
Void | ```void``` | undefined, null
Any | ```any``` | literally anything
Arrays | type[] or Array<type> | [1,2,3]
Tuples | [type1, type2] | ['John', 24]
Objects | any (or class/interface name) | {property: value}
Map | { [key : string\|number ] : type} | ["key1":value1, "key2": value2]

### Objects
Create using curly brackets or the constructor of a class.
```typescript
myObject = { theProperty: 'the value' }
myObject = new MyClass();

// Acces properties via dot or bracket notation:
myObject.theProperty
myObject[ 'theProperty' ]
```

### Undefined & Null
```Undefined``` is the default value for everything without a value.  
```Null``` is a explicit no-value.

### Truthy & Falsy
Non-booleans are interpretated as booleans when needed.  
Falsy are:
 - ```false```
 - empty string
 - number zero
 - ```NaN```
 - ```undefined```
 - ```null```

Truthy are
- ```true```
- non-empty string
- any number besides zero
- any array (even empty array)
- any object (even empty object)
 
### Boolean expressions
For equality comparisons use ```===``` (tripple equals) and ```!==```.  
A boolean expression always returns the last member that needed to be evaluated. But these values are interpreted as either true or false, as shown in the "Truthy & Falsy" section.
The value of ```true && 0 && false``` is not ```false``` but ```0```
The value of ```false || 'a string'``` is not ```true``` but ```'a string'```

## Operations
### Ternary
Shorthand for ```if else ```with  ```?``` and  ```:``` as operators.
```condition ? valueIfTrue : valueIfFalse``` returns either value, based on the condition.
### Increment / Decrement
The ```++``` and ```--``` operator before and after a number are available
```typescript
++count;
count++;
count--;
--count;
```
### While
```typescript
while (condition) {
    // body
}
do {
    // body
} while (condition)
```
### For
```typescript
for (let i : number = 0; i < 10; i++) {
    // body
}
for (let entry of myArray) {
    // body
}
```
### Switch
```typescript
switch (variable) {
    case value1:
        break;
    case value2:
        break;
    default:
        break;
```
## Functions
### Syntax
```typescript
// Named function
function namedFunction(a, b) {
    return a + b;
}

// Anonymous function asigned to a variable
const anonymousFunction = function (a, b) {
    return a + b;
};

// arrow syntax
const arrowSyntax = (a, b) => a + b;

// arrow syntax with body
const ArrowSyntaxWithBody = (a, b) => {
    return a + b;
};
```
### Typing
```typescript
// The variable "myAddFullyTyped" is typed and the value ( = the function) is also fully typed
const myAddFullyTyped : (baseValue : number, increment : number) => number =
    (x : number, y : number) : number => x + y;

// The compiler knows the types of x & y based on the typing of "myAdd"
const myAdd : (baseValue : number, increment : number) => number = (x, y) => x + y;

// The compiler knows the type of "myAdd2" based on the typing of it's value
const myAdd = (x : number, y : number) : number => x + y;
```
### Parameters
#### Spread
Parameters with the spread operator ```...``` collect all parameters into a array. The function can be called with as many parameters as needed.
```typescript
const fullName = (doctor : boolean, firstName : string, ...lastNames : string[]) =>
    doctor ? 'Dr. ' : '' + firstName + ' ' + lastNames.join(' ');

fullName(false, "John", "Doe", "Springer", "Smith"); // "John Doe Springer Smith"
```
#### Optional
```typescript
// Optional parameters are marked with "?"
const greeting = (name? : string) : string => {
    return 'Hello ' + name ? name : 'stranger';
};
console.log(greeting('John')); // Hello John
console.log(greeting()); // Hello stranger

// Optional parameter can have a default value defined
const increment = (base : number, increment : number = 1) : number => base + increment;
console.log(increment(3)); // 4
console.log(increment(3, 2)); // 5
```
### Iterators (ES6 Only!)
Iterators are lazy generators. They are marked with a ``*`` and use the ``yield`` keyword. They have a loop (potentially infinite) and return a Iterator object which offers a ``next`` function. This function returns a object with the value and a flag if the iterator is done.
```typescript
function *lazy12(n : number) : IterableIterator<number> {
    while (n < 12) {
        yield n++;
    }
}

let iterator = lazy12(10);
console.log(iterator.next()); // {value: 10, done: false}
console.log(iterator.next()); // {value: 11, done: false}
console.log(iterator.next()); // {value: undefined, done: true}
```
## Object Oriented Programming
### Classes
````typescript
/**
 * A class with public, protected and private properties
 */
abstract class Person {
  // Public is accessible everywhere
  public hairStyle : string;

  // Protected is accessible in this class and subclasses
  protected name : string;

  // Private is only accessible in this class
  private nickname : string;

  constructor(name : string) {
    // Class level properties and functions are accessed with the "this" keyword
    this.name = name;
    this.nickname = name + "y";
    this.hairStyle = "great";
  }
}
/**
 * Extending another class, accessing their properties, getter / setter functions
 */
class Employee extends Person {

  // A getter - can be read like a property
  public get id() : string {
    return this.name + this.department;
  }

  // A getter that returns the value of a private property
  public get salary() : number {
    return this._salary;
  }

  // A setter that updates the value if certain criteria are fullfilled
  public set salary(newSalary : number) {
    if (newSalary > 0 && newSalary < 100000) {
      this._salary = newSalary
    } else {
      // no value update
      console.log("Pay the man properly!");
    }
  }

  // The underscore is not a syntax symbol but a convention for private properties that are accessed by getter and/or setters
  private _salary : number;
  private department : string;

  constructor(name : string, department : string) {
    super(name);
    this.department = department;
    this.hairStyle = "professional";
  }

  /**
   * String templating
   */
  public introduction() {
    // Access to this.name but not this.nickname
    return `Hello, my name is ${this.name} and I work in ${this.department}.`;
  }
}
````
#### Interface
````typescript
/**
 * A basic interface with a single property
 */
declare interface BaseInterface {
  someProperty : string;
}

/**
 * Extending another interface, function, optional property
 */
export interface MyInterface extends BaseInterface {
  aSecondProperty : boolean;
  multiplyFunction : (a : number, b : number) => number;
  // Optional property with the "?" operator
  justOptional? : number;
}
````
## Arrays
### Basic operations
Name | explanation
:-----------|:------------
push(x) | adds X to the end of array
pop() | removes last element
concat(...x) | adds parameters to the array 
slice(start, end) | returns elements from start to (excluding) end index
splice(index, count) | Removes ``count`` items, starting from ``index``
shift() | Removes first element and returns it
unshift(x) | adds X to the front of the array
indexOf(x) | Returns the first index where x can be found
### Spread
Spread operator ``...`` spreads the values of the array
````typescript
let myBigArray : number[] = [ 0, ...arrayOne, ...arrayTwo, 7 ];
````
### Destructuring
````typescript
let [ first, second, ...rest ] : number[] = [ 1, 2, 3, 4 ];
first // 1
second // 2
rest // [3, 4]
````
### Filter
The filter function takes a ``(T) => boolean`` function as parameter. 
````typescript
let duplicates : number[] = [ 1, 1, 1, 1, 2, 2, 3, 4, 4, 5, 5, 5, 6, 7, 8, 8, 9 ];
let uniques : number[] = duplicates.filter((value, index, array) => {
    return array.indexOf(value) == index;
});
console.log(uniques); // [1,2,3,4,5,6,7,8,9]
````
### Map
````typescript
let listOfNames : string[] = data.map((value, index, array) => value.name);
````
### Reduce
Reduce needs a reduce function and a starting value as parameters
````typescript
let reduceFunction : (accumulator : F, value : T, index : number, array : T[]) => F;
let startingValue : F;
data.reduce(reduceFunction, startingValue)
````
